(() => {
  const DATA_URL = '../../data/mp300_materials.json';
  const requestedViewerPort = new URL(window.location.href).searchParams.get('viewer_port');
  const VIEWER_PORT = /^\d{1,5}$/.test(requestedViewerPort || '') ? requestedViewerPort : '8767';
  const $ = (selector) => document.querySelector(selector);
  const esc = (value) => String(value == null ? '' : value).replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
  const text = (value, limit) => {
    const result = String(value == null ? '' : value).replace(/\s+/g, ' ').trim();
    return limit && result.length > limit ? result.slice(0, limit - 1).replace(/[ ,;，；]+$/, '') + '…' : result;
  };
  const present = (value) => value != null && String(value).trim() !== '';
  const formula = (value) => esc(value).replace(/([₀-₉]+)/g, '<sub>$1</sub>');
  const hull = (value) => Number.isFinite(Number(value)) ? Number(value).toFixed(3) + ' eV/atom' : '未报告';
  const setText = (selector, value) => { const node = $(selector); if (node) node.textContent = value; };
  const setHtml = (selector, value) => { const node = $(selector); if (node) node.innerHTML = value; };
  const toast = $('#toast'); let toastTimer;
  const show = (message) => { if (!toast) return; toast.textContent = message; toast.classList.add('visible'); clearTimeout(toastTimer); toastTimer = setTimeout(() => toast.classList.remove('visible'), 2800); };
  const icons = () => { if (window.lucide) window.lucide.createIcons({ attrs: { 'stroke-width': 1.8 } }); };

  function structureUrl(item) {
    return item.structureUrl || '../../data/structures/' + encodeURIComponent(item.id) + '.cif';
  }

  function viewerBaseUrl() {
    const protocol = window.location.protocol === 'file:' ? 'http:' : window.location.protocol;
    const hostname = window.location.hostname || '127.0.0.1';
    return new URL(protocol + '//' + hostname + ':' + VIEWER_PORT + '/');
  }

  function viewerUrl(item) {
    const url = viewerBaseUrl();
    url.searchParams.set('record_id', item.id);
    return url.toString();
  }

  function structureFailure(message) {
    const stage = $('#structure-stage');
    const frame = $('#structure-viewer');
    const loading = $('#structure-loading');
    const empty = $('#structure-empty');
    if (frame) frame.hidden = true;
    if (loading) loading.hidden = true;
    if (empty) empty.hidden = false;
    if (stage) stage.setAttribute('aria-busy', 'false');
    setText('#structure-empty-note', message);
    setText('#structure-source-note', 'CIF 暂不可用');
    setText('#structure-interaction-note', '检查本地结构查看服务');
    $('#structure-status-dot')?.classList.replace('ready', 'error');
    icons();
  }

  async function renderStructure(item) {
    const stage = $('#structure-stage');
    const frame = $('#structure-viewer');
    const loading = $('#structure-loading');
    const empty = $('#structure-empty');
    if (!stage || !frame || !present(item.id)) return;
    stage.setAttribute('aria-busy', 'true');
    if (empty) empty.hidden = true;
    if (loading) loading.hidden = false;
    setText('#structure-source-note', 'CIF · Crystal Toolkit');
    setText('#structure-interaction-note', '拖动旋转 · 滚轮缩放');
    try {
      const [structureResponse, viewerResponse] = await Promise.all([
        fetch(structureUrl(item), { method: 'HEAD', cache: 'no-store' }),
        fetch(new URL('health', viewerBaseUrl()), { cache: 'no-store' })
      ]);
      if (!structureResponse.ok) throw new Error('未找到该记录的 CIF 文件');
      if (!viewerResponse.ok) throw new Error('Crystal Toolkit 查看器未启动');
    } catch (error) {
      const message = error?.message === 'Failed to fetch' ? 'Crystal Toolkit 查看器未启动' : (error?.message || 'CIF 文件读取失败');
      structureFailure(message);
      return;
    }

    let settled = false;
    const timeout = window.setTimeout(() => {
      if (!settled) structureFailure('Crystal Toolkit 查看器未启动或载入超时');
    }, 15000);
    frame.onload = () => {
      settled = true;
      window.clearTimeout(timeout);
      if (loading) loading.hidden = true;
      stage.setAttribute('aria-busy', 'false');
    };
    frame.onerror = () => {
      settled = true;
      window.clearTimeout(timeout);
      structureFailure('Crystal Toolkit 查看器连接失败');
    };
    frame.hidden = false;
    frame.src = viewerUrl(item);
  }

  function referenceRecords(item) {
    const raw = Array.isArray(item.references) ? item.references : (Array.isArray(item.literature) ? item.literature : []);
    const records = raw.map((ref, index) => ({ ...ref, number: index + 1, codes: Array.isArray(ref.codes) ? ref.codes : (present(ref.code) ? [ref.code] : []) }));
    if (!records.length && present(item.sourcePaper)) records.push({ number: 1, codes: [], type: '数据集来源', title: item.sourcePaper, authors: item.sourceAuthors, journal: item.sourceJournal, year: item.sourceYear, doi: item.paperDoi || item.sourceDoi, url: item.sourceUrl });
    const byCode = new Map(); records.forEach((ref) => (ref.codes || []).forEach((code) => byCode.set(String(code).toUpperCase(), ref.number)));
    return { records, byCode };
  }

  function citationText(value, context, limit) {
    let html = esc(text(value, limit));
    html = html.replace(/\[([^\]]+)\]/g, (whole, body) => {
      let found = false;
      const replaced = body.replace(/\b((?:CS|SS|TS)\d+)\b/gi, (code) => {
        found = true;
        const number = context?.byCode.get(code.toUpperCase());
        return number ? esc(code) + '<sup class="citation"><a href="#reference-' + number + '">[' + number + ']</a></sup>' : esc(code) + '<sup class="citation pending" title="文献待补充">[?]</sup>';
      });
      return found ? replaced : whole;
    });
    return html;
  }

  function referenceUrl(ref) {
    if (present(ref.url) && /^https?:\/\//i.test(String(ref.url))) return String(ref.url);
    if (present(ref.doi)) return 'https://doi.org/' + encodeURIComponent(String(ref.doi).replace(/^https?:\/\/doi\.org\//i, ''));
    return '';
  }

  function renderReferences(item) {
    const context = referenceRecords(item); const list = $('#reference-list');
    setText('#reference-count', context.records.length ? context.records.length + ' 条' : '待补充');
    if (!list) return context;
    if (!context.records.length) { list.innerHTML = '<li class="reference-empty">文献条目待补充。</li>'; return context; }
    list.innerHTML = context.records.map((ref) => {
      const url = referenceUrl(ref); const title = text(ref.title || ref.name || '未命名文献', 240); const titleHtml = url ? '<a href="' + esc(url) + '" target="_blank" rel="noreferrer">' + esc(title) + '</a>' : esc(title); const details = [ref.authors, ref.journal, ref.year, ref.doi ? 'DOI: ' + ref.doi : ''].filter(present).map((value) => text(value, 240)).join(' · ');
      return '<li class="reference-item" id="reference-' + ref.number + '"><span class="reference-index">[' + ref.number + ']</span><div><div class="reference-title">' + titleHtml + (ref.codes?.length ? '<span class="reference-code">' + esc(ref.codes.join(' · ')) + '</span>' : '') + '</div>' + (details ? '<p>' + esc(details) + '</p>' : '') + '</div></li>';
    }).join('');
    return context;
  }

  function renderFacts(item) {
    setText('#record-id', item.id);
    setText('#record-source', item.sourceCategory || item.sourceFamily || '本地数据集');
    setHtml('#material-formula', formula(item.formula || item.id));
    setText('#material-meta', (item.spacegroup ? '空间群 ' + item.spacegroup : '空间群未报告') + ' · ' + (item.numSites ? item.numSites + ' 个原子位点' : '原子位点未报告'));
    const tags = Array.isArray(item.propertyTags) ? item.propertyTags : [];
    setHtml('#tag-row', (tags.length ? tags : ['未标注性质标签']).map((tag) => '<span class="tag">' + esc(tag) + '</span>').join(''));
    const score = Number(item.score);
    setHtml('#hero-score', Number.isFinite(score) ? String(score) + '<span>/100</span>' : '—<span>/100</span>');
    setText('#hero-score-note', Number.isFinite(score) ? (score >= 75 ? '进入优先验证区间' : '作为候选记录保留') : '评分未报告');
    const facts = [['记录编号', item.id], ['化学式', item.formula], ['空间群', item.spacegroup || '未报告'], ['原子位点', item.numSites || '未报告'], ['E_hull', hull(item.eHull)], ['最低原子间距', item.minimumDistanceAngstrom ? Number(item.minimumDistanceAngstrom).toFixed(3) + ' Å' : '未报告']];
    setHtml('#key-facts', facts.map((pair) => '<div><dt>' + pair[0] + '</dt><dd>' + esc(pair[1]) + '</dd></div>').join(''));
    setText('#data-state', item.stabilityLabel || '字段已载入');
    setText('#source-summary', text(item.sourcePaper || item.sourceFamily || item.sourceCategory || '本地材料数据集', 120));
    setText('#updated-at', item.sourceBatch ? '数据批次 ' + item.sourceBatch : '数据随批次更新');
  }

  function renderEvidence(item, context) {
    const score = Number(item.score); const ehull = Number(item.eHull); const gap = Number(item.bandGapPbeEv);
    const metrics = [
      ['可合成性评分', Number.isFinite(score) ? score : null, '/ 100', Number.isFinite(score) ? score : 0, '数据集评分'],
      ['热力学稳定性', Number.isFinite(ehull) ? Math.max(0, Math.round(100 - ehull * 1000)) : null, '/ 100', Number.isFinite(ehull) ? 100 - ehull * 1000 : 0, Number.isFinite(ehull) ? 'E_hull ' + hull(ehull) : '未报告'],
      ['计算带隙', Number.isFinite(gap) ? gap : null, ' eV', Number.isFinite(gap) ? Math.min(100, gap / 6 * 100) : 0, item.bandGapOrMetal || '未报告']
    ];
    setHtml('#metric-grid', metrics.map((metric) => '<article class="metric-card"><div class="metric-head"><span>' + metric[0] + '</span><span>' + (metric[1] == null ? '—' : esc(metric[1]) + '<small>' + metric[2] + '</small>') + '</span></div><div class="metric-bar"><i style="width:' + Math.max(0, Math.min(100, metric[3])) + '%"></i></div><p>' + esc(metric[4]) + '</p></article>').join(''));
    setHtml('#record-summary', '<strong>记录摘要</strong><p>' + citationText(item.summary || item.stabilityNote || '该记录暂无文字摘要。', context, 560) + '</p>');
    setText('#evidence-source', item.stabilityLabel || item.sourcePaper || '来自当前记录字段');
  }

  function parseRoutes(markdown) {
    const routes = []; const pattern = /#{3,4} Route \d+: ([^\n]+)/g; let match;
    while ((match = pattern.exec(markdown)) && routes.length < 5) {
      const start = match.index + match[0].length; const remainder = markdown.slice(start); const next = remainder.search(/\n#{3,4} Route \d+:/); const body = remainder.slice(0, next < 0 ? remainder.length : next); const fields = {};
      body.split(/\n\|/).forEach((line) => { const pair = line.replace(/^\|/, '').split('|').map((value) => value.trim()); if (pair.length >= 2 && pair[0] && pair[1] && pair[0] !== 'Field') fields[pair[0]] = pair[1]; });
      if (Object.keys(fields).length) routes.push({ title: match[1].trim(), fields: fields });
    }
    return routes;
  }

  async function renderRoutes(item, context) {
    let routes = [];
    if (present(item.reportMarkdown)) routes = parseRoutes(item.reportMarkdown);
    if (!routes.length && item.sourcePath) {
      try {
        const response = await fetch('../../' + item.sourcePath.replace(/\\/g, '/'));
        if (response.ok) routes = parseRoutes(await response.text());
      } catch (error) { /* The route label below remains useful when the report is unavailable. */ }
    }
    const uniqueRoutes = [];
    const seenTitles = new Set();
    routes.forEach((route) => { const key = String(route.title || '').trim().toLowerCase(); if (key && !seenTitles.has(key)) { seenTitles.add(key); uniqueRoutes.push(route); } });
    routes = uniqueRoutes;
    if (!routes.length && present(item.bestRoute)) routes = [{ title: item.bestRoute, fields: { 'Reference basis': item.conditions || item.routes || '已标注为该记录的最佳参考路线。' } }];
    setText('#route-count', routes.length ? routes.length + ' 条路线' : '暂无路线');
    if (!routes.length) { setHtml('#route-list', '<div class="empty-row">该记录暂无可展示的合成路线。</div>'); return; }
    setHtml('#route-list', routes.map((route, index) => { const fields = route.fields || {}; const detail = fields['Precursors'] || fields['Temperature program'] || fields['Reference basis'] || '路线条件待补充。'; const conditions = [fields['Temperature program'], fields['Atmosphere'], fields['Pressure'], fields['Estimated difficulty']].filter(Boolean).map((value) => text(value, 150)).slice(0, 3); const icon = /hydro|solv|aqueous/i.test(route.title) ? 'flask-conical' : /flux|melt|salt/i.test(route.title) ? 'waves' : /pressure|ammon|sealed/i.test(route.title) ? 'gauge' : 'flame'; return '<article class="route-card"><div class="route-node"><i data-lucide="' + icon + '" aria-hidden="true"></i><span>' + String(index + 1).padStart(2, '0') + '</span></div><div><h3>' + esc(route.title) + '</h3><p>' + citationText(detail, context, 280) + '</p>' + (conditions.length ? '<div class="route-conditions">' + conditions.map((value) => '<span>' + citationText(value, context) + '</span>').join('') + '</div>' : '') + '</div></article>'; }).join('')); icons();
  }

  function renderProperties(item) {
    const fields = [['计算带隙', present(item.bandGapPbeEv) ? item.bandGapPbeEv + ' eV' : null], ['带隙 / 金属性', item.bandGapOrMetal], ['形成能', present(item.formationEnergyEvAtom) ? item.formationEnergyEvAtom + ' eV/atom' : null], ['预测硬度', present(item.predictedHardnessGPa) ? item.predictedHardnessGPa + ' GPa' : null], ['预测 Tc', present(item.predictedTcK) ? item.predictedTcK + ' K' : null], ['动力学稳定性', item.dynamicStability], ['实验状态', item.experimentalStatus]].filter((pair) => present(pair[1]));
    setText('#property-count', fields.length + ' 个字段'); setHtml('#property-list', fields.length ? fields.map((pair) => '<div><dt>' + pair[0] + '</dt><dd>' + esc(text(pair[1], 220)) + '</dd></div>').join('') : '<div class="empty-row">该记录暂无额外性质字段。</div>');
    const sources = [['来源论文', item.sourcePaper], ['论文 DOI', item.paperDoi], ['数据集 DOI', item.datasetDoi], ['数据类别', item.sourceCategory || item.sourceFamily]].filter((pair) => present(pair[1]));
    setHtml('#source-panel', '<h3>数据出处</h3><dl>' + sources.map((pair) => '<div><dt>' + pair[0] + '</dt><dd>' + esc(text(pair[1], 240)) + '</dd></div>').join('') + '</dl>');
  }

  function exportRecord(item) { const content = ['Synthesis Atlas 材料记录', '记录编号: ' + item.id, '化学式: ' + item.formula, '空间群: ' + (item.spacegroup || '未报告'), 'E_hull: ' + hull(item.eHull), '可合成性评分: ' + (item.score == null ? '未报告' : item.score), '最佳路线: ' + (item.bestRoute || '未报告'), '来源: ' + (item.sourcePaper || item.sourceFamily || item.sourceCategory || '本地数据集')].join('\n'); const link = document.createElement('a'); link.href = URL.createObjectURL(new Blob([content], { type: 'text/plain;charset=utf-8' })); link.download = (item.id || 'material') + '-summary.txt'; link.click(); setTimeout(() => URL.revokeObjectURL(link.href), 1000); show('记录摘要已下载。'); }

  async function init() {
    icons();
    try { const response = await fetch(DATA_URL); if (!response.ok) throw new Error('数据文件读取失败'); const materials = await response.json(); const requested = new URL(window.location.href).searchParams.get('id'); const item = materials.find((entry) => entry.id === requested || entry.formula === requested) || materials[0]; const referenceContext = renderReferences(item); renderFacts(item); renderStructure(item); renderEvidence(item, referenceContext); renderProperties(item); await renderRoutes(item, referenceContext); icons(); $('#export-button')?.addEventListener('click', () => exportRecord(item)); }
    catch (error) { setText('#record-id', '读取失败'); setText('#material-formula', '—'); setText('#material-meta', error.message); setText('#route-count', '读取失败'); }
    $('#theme-toggle')?.addEventListener('click', () => { document.body.classList.toggle('soft-mode'); show(document.body.classList.contains('soft-mode') ? '已切换为柔和阅读背景。' : '已恢复标准阅读背景。'); });
  }
  init();
})();
