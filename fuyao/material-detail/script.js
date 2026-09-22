(() => {
  const DATA_URL = '../../data/mp300_materials.json';
  const requestedViewerPort = new URL(window.location.href).searchParams.get('viewer_port');
  const VIEWER_PORT = /^\d{1,5}$/.test(requestedViewerPort || '') ? requestedViewerPort : '8767';
  const $ = (selector) => document.querySelector(selector);
  const esc = (value) => String(value == null ? '' : value).replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
  const text = (value, limit) => {
    const result = String(value == null ? '' : value)
      .replace(/\*\*([^*]+)\*\*/g, '$1')
      .replace(/__([^_]+)__/g, '$1')
      .replace(/`([^`]+)`/g, '$1')
      .replace(/Reasonable Inference/gi, '合理推断')
      .replace(/\[Target\]/g, '[目标材料]')
      .replace(/\s+/g, ' ')
      .trim();
    return limit && result.length > limit ? result.slice(0, limit - 1).replace(/[ ,;，；]+$/, '') + '…' : result;
  };
  const present = (value) => value != null && String(value).trim() !== '';
  const formula = (value) => esc(value).replace(/(\d+(?:\.\d+)?|[₀-₉]+)/g, '<sub>$1</sub>');
  const formatSpacegroup = (value, fallback = '未报告') => esc(value || fallback).replace(/_(\d+)/g, '<sub>$1</sub>');
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
        return number ? esc(code) + '<sup class="citation"><a href="#reference-' + number + '">[' + number + ']</a></sup>' : '<sup class="citation pending" title="报告中的证据通道标记">' + esc(code) + '</sup>';
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
    setHtml('#material-formula', formula(item.formula || item.id));
    const tags = Array.isArray(item.propertyTags) ? item.propertyTags : [];
    setHtml('#tag-row', (tags.length ? tags : ['未标注性质标签']).map((tag) => '<span class="tag">' + esc(tag) + '</span>').join(''));
    const score = Number(item.score);
    setHtml('#hero-score', Number.isFinite(score) ? String(score) + '<span>/100</span>' : '—<span>/100</span>');
    setText('#hero-score-note', Number.isFinite(score) ? (score >= 75 ? '基于材料属性与推荐路线' : '作为候选记录保留') : '评分未报告');
    const facts = [['记录编号', esc(item.id)], ['化学式', esc(item.formula)], ['空间群', formatSpacegroup(item.spacegroup)], ['原子位点', esc(item.numSites || '未报告')], ['E_hull', esc(hull(item.eHull))]];
    setHtml('#key-facts', facts.map((pair) => '<div><dt>' + pair[0] + '</dt><dd>' + pair[1] + '</dd></div>').join(''));
    const structureDescription = text(item.target || item.summary || '', 340);
    setText('#facts-description-text', structureDescription);
    const descriptionBlock = $('#facts-description');
    if (descriptionBlock) descriptionBlock.hidden = !present(structureDescription);
    setText('#data-state', item.stabilityLabel || '字段已载入');
    setText('#source-summary', text(item.sourcePaper || item.sourceFamily || item.sourceCategory || '本地材料数据集', 120));
    setText('#updated-at', item.sourceBatch ? '数据批次 ' + item.sourceBatch : '数据随批次更新');
  }

  function parseMarkdownTable(markdown) {
    const rows = [];
    String(markdown || '').split(/\r?\n/).forEach((line) => {
      if (!/^\s*\|/.test(line)) return;
      const cells = line.trim().replace(/^\|/, '').replace(/\|$/, '').split('|').map((value) => value.trim());
      if (!cells.length || cells.every((cell) => /^:?-{2,}:?$/.test(cell))) return;
      rows.push(cells);
    });
    return rows;
  }

  function parseMarkdownTables(markdown) {
    const tables = []; let block = [];
    const flush = () => { if (block.length) tables.push(parseMarkdownTable(block.join('\n'))); block = []; };
    String(markdown || '').split(/\r?\n/).forEach((line) => {
      if (/^\s*\|/.test(line)) block.push(line); else flush();
    });
    flush();
    return tables.filter((table) => table.length > 1);
  }

  const SOURCE_META = {
    CS: { name: '化学相似', kind: '组成先例', fallback: '化学组成和反应先例' },
    SS: { name: '结构相似', kind: '结构先例', fallback: '结构类型和晶体生长先例' },
    TS: { name: '热力学相似', kind: '外部热力学先例', fallback: '能量和稳定性先例' }
  };
  const SOURCE_ORDER = ['CS', 'SS', 'TS'];

  function sourceCodes(markdown, source) {
    const codes = new Set();
    const pattern = new RegExp('\\b' + source + '\\s*[-#]?\\s*(\\d+)\\b', 'gi'); let match;
    while ((match = pattern.exec(String(markdown || '')))) codes.add(source + match[1]);
    return [...codes].sort((a, b) => Number(a.slice(2)) - Number(b.slice(2)));
  }

  function sourceTableEvidence(markdown) {
    const sections = [reportSection(markdown, 3), reportSection(markdown, 6), reportSection(markdown, 1)];
    for (const section of sections) {
      for (const rows of parseMarkdownTables(section)) {
        const header = rows[0].map((cell) => cell.toLowerCase());
        const sourceIndex = header.findIndex((cell) => /^source(?:\s|$)/i.test(cell));
        const signalIndex = header.findIndex((cell) => /signal|evidence|support|used|handling|rationale/i.test(cell) && !/score/i.test(cell));
        const scoreIndex = header.findIndex((cell) => /score/i.test(cell));
        if (sourceIndex < 0 || signalIndex < 0) continue;
        const found = {};
        rows.slice(1).forEach((row) => {
          const source = String(row[sourceIndex] || '').match(/\b(CS|SS|TS)\b/i)?.[1]?.toUpperCase();
          if (!source || found[source]) return;
          const signalParts = row.filter((value, index) => index !== sourceIndex && index !== scoreIndex && present(value));
          const rawScore = scoreIndex >= 0 ? String(row[scoreIndex] || '').match(/-?\d+(?:\.\d+)?/)?.[0] : null;
          found[source] = { signal: signalParts.join(' '), score: rawScore == null ? null : Number(rawScore) };
        });
        if (Object.keys(found).length) return found;
      }
    }
    return {};
  }

  function sourceFallback(markdown, source) {
    const sections = [reportSection(markdown, 1), reportSection(markdown, 6), reportSection(markdown, 5)].filter(Boolean).join('\n');
    const pattern = new RegExp('\\b' + source + '(?:\\s*[-#]?\\s*\\d+)?\\b', 'i');
    const chunks = sections.split(/\n+|(?<=[.!?。！？])\s+/).map((chunk) => text(chunk.replace(/^\|.*?\|\s*/, ''), 260)).filter((chunk) => chunk && pattern.test(chunk));
    return chunks[0] || '';
  }

  function parseSourceEvidence(markdown) {
    const tableEvidence = sourceTableEvidence(markdown); const result = {};
    SOURCE_ORDER.forEach((source) => {
      const evidence = tableEvidence[source] || {};
      const codes = sourceCodes(markdown, source);
      result[source] = {
        name: SOURCE_META[source].name,
        kind: SOURCE_META[source].kind,
        signal: text(evidence.signal || sourceFallback(markdown, source) || SOURCE_META[source].fallback, 300),
        score: Number.isFinite(evidence.score) ? evidence.score : null,
        codes: codes
      };
    });
    return result;
  }

  function reportSection(markdown, number) {
    const matches = [...String(markdown || '').matchAll(new RegExp('^#{1,3}\\s+SECTION\\s+' + number + '\\b[^\\n]*\\n', 'gim'))];
    if (!matches.length) return '';
    const start = matches[0].index + matches[0][0].length;
    const next = String(markdown || '').slice(start).search(/^#{1,3}\s+SECTION\s+\d+\b/im);
    return String(markdown || '').slice(start, next < 0 ? undefined : start + next).trim();
  }

  function parseReport(markdown) {
    const source = String(markdown || '').replace(/([^\n])(?=#{1,3}\s+SECTION\s+\d+\b)/gi, '$1\n');
    const routeSection = reportSection(source, 1);
    const routeMatches = [...routeSection.matchAll(/^(?:#{2,4}\s+|\*\*)Route\s+(\d+):\s*(.*?)(?:\*\*)?\s*$/gm)];
    const routes = routeMatches.slice(0, 8).map((match, index) => {
      const start = match.index + match[0].length;
      const remaining = routeSection.slice(start);
      const next = remaining.search(/^(?:#{2,4}\s+|\*\*)Route\s+\d+:/m);
      const body = remaining.slice(0, next < 0 ? undefined : next);
      const rows = parseMarkdownTable(body);
      const fields = {};
      rows.forEach((row) => { if (row.length >= 2 && row[0] !== 'Field') fields[row[0]] = row.slice(1).join(' | '); });
      return { number: Number(match[1]) || index + 1, title: match[2].trim(), fields: fields, body: body };
    }).filter((route) => route.title);

    const scoreByRoute = {};
    const scorePattern = /\*\*F([23])\s+Score\s+for\s+Route\s+(\d+):\s*([\d.]+)\s*\/\s*100\*\*/gi;
    let scoreMatch;
    while ((scoreMatch = scorePattern.exec(source))) {
      const number = scoreMatch[2];
      scoreByRoute[number] = scoreByRoute[number] || {};
      scoreByRoute[number]['f' + scoreMatch[1]] = Number(scoreMatch[3]);
    }
    const finalSection = source.match(/Final Score Table[\s\S]*?(?=\n---|\n### SECTION|$)/i)?.[0] || '';
    const finalRows = parseMarkdownTable(finalSection);
    finalRows.forEach((row) => {
      if (!/^\d+$/.test(row[0]) || row.length < 6) return;
      const number = row[0];
      scoreByRoute[number] = scoreByRoute[number] || {};
      scoreByRoute[number].f2 = Number(row[1]);
      scoreByRoute[number].f3 = Number(row[2]);
      scoreByRoute[number].f1 = Number(row[3]);
      scoreByRoute[number].f4 = Number(row[4]);
      scoreByRoute[number].weighted = Number(row[5]);
    });

    const bestRoute = source.match(/\*\*Best Route\*\*\s*\|\s*([^\n|]+)/i)?.[1]?.trim() || '';
    const conditions = {};
    parseMarkdownTable(reportSection(source, 4)).forEach((row) => { if (row.length >= 2 && row[0] !== 'Parameter') conditions[row[0]] = row.slice(1).join(' | '); });
    const challenges = parseMarkdownTable(reportSection(source, 7)).filter((row) => /^\d+$/.test(row[0])).map((row) => ({ route: row[1], challenge: row[2], severity: row[3], mitigation: row.slice(4).join(' | ') }));
    const channels = [...new Set([...source.matchAll(/\b(CS|SS|TS)\s*[-_]?\s*\d+\b/gi)].map((match) => match[1].toUpperCase()))].sort((a, b) => ['CS', 'SS', 'TS'].indexOf(a) - ['CS', 'SS', 'TS'].indexOf(b));
    const f1 = source.match(/\*\*F1 Score:\s*([\d.]+)\s*\/\s*100\*\*/i)?.[1];
    const f4 = source.match(/\*\*F4 Score:\s*([\d.]+)\s*\/\s*100\*\*/i)?.[1];
    const interpretation = reportSection(source, 6).replace(/^#+\s*/gm, '').trim();
    return { routes, scoreByRoute, bestRoute, conditions, challenges, channels, sourceEvidence: parseSourceEvidence(source), f1: f1 ? Number(f1) : null, f4: f4 ? Number(f4) : null, interpretation };
  }

  async function loadReport(item) {
    if (present(item.reportMarkdown)) return item.reportMarkdown;
    if (!item.sourcePath) return '';
    try {
      const response = await fetch('../../' + item.sourcePath.replace(/\\/g, '/'), { cache: 'no-store' });
      return response.ok ? await response.text() : '';
    } catch (error) {
      return '';
    }
  }

  function renderEvidence(item, context, report) {
    const score = Number(item.score); const ehull = Number(item.eHull); const sourceEvidence = report?.sourceEvidence || parseSourceEvidence('');
    const bestRoute = report?.bestRoute || item.bestRoute || '未报告';
    const routeName = bestRoute.replace(/^Route\s*\d+\s*[:,]?\s*/i, '');
    const metrics = [
      { key: 'aggregate', label: '可合成性评分', value: Number.isFinite(score) ? String(score) : '—', unit: '/ 100' },
      { key: 'thermo', label: 'E_hull', value: Number.isFinite(ehull) ? Number(ehull).toFixed(3) : '—', unit: ' eV/atom' }
    ];
    setHtml('#metric-grid', metrics.map((metric) => '<article class="metric-card' + (metric.key === 'thermo' ? ' thermo-metric' : '') + '"><div class="metric-head"><span>' + metric.label + '</span><span class="metric-value-text">' + esc(metric.value) + '<small>' + esc(metric.unit) + '</small></span></div></article>').join(''));
    setHtml('#source-evidence-grid', SOURCE_ORDER.map((source) => {
      const evidence = sourceEvidence[source] || { name: SOURCE_META[source].name, kind: SOURCE_META[source].kind, signal: SOURCE_META[source].fallback, score: null, codes: [] };
      const codes = evidence.codes || []; const scoreMarkup = Number.isFinite(evidence.score) ? '<span class="source-score"><b>' + evidence.score + '</b><small>来源信号</small></span>' : (codes.length ? '<span class="source-score"><b>' + codes.length + '</b><small>关联条目</small></span>' : '<span class="source-score"><b>—</b><small>暂无明确记录</small></span>');
      return '<article class="source-evidence-card' + (source === 'TS' ? ' thermo-source' : '') + '" aria-label="' + esc(source + ' ' + evidence.name) + '"><div class="source-evidence-head"><div><span class="source-code">' + source + '</span><strong>' + esc(evidence.name) + '</strong></div>' + scoreMarkup + '</div><p>' + citationText(evidence.signal, context, 300) + '</p>' + (codes.length ? '<div class="source-codes">' + esc(codes.join(' · ')) + '</div>' : '') + '</article>';
    }).join(''));
    const interpretation = report?.interpretation || item.summary || item.stabilityNote || '该记录暂无文字摘要。';
    setHtml('#record-summary', '<strong>为什么推荐这条路线</strong><p>' + citationText(interpretation, context, 720) + '</p><span class="summary-route">' + esc(text(routeName)) + '</span>');
  }

  function routeIcon(title) {
    return /hydro|solv|aqueous|solution|evaporation|precipitation/i.test(title) ? 'flask-conical' : /flux|melt|salt/i.test(title) ? 'waves' : /pressure|ammon|sealed|sputter/i.test(title) ? 'gauge' : 'flame';
  }

  function routeEvidenceCodes(route) {
    const textValue = Object.values(route.fields || {}).join(' ') + ' ' + (route.body || '');
    return [...new Set([...textValue.matchAll(/\b(CS|SS|TS)\s*[-_]?\s*\d+\b/gi)].map((match) => match[1].toUpperCase()))].sort((a, b) => ['CS', 'SS', 'TS'].indexOf(a) - ['CS', 'SS', 'TS'].indexOf(b));
  }

  function recommendedRoute(report, fallbackBestRoute) {
    const bestLabel = String(report?.bestRoute || fallbackBestRoute || '').trim();
    const bestNumber = bestLabel.match(/\bRoute\s*(\d+)\b/i)?.[1] || '';
    const routes = Array.isArray(report?.routes) ? report.routes : [];
    const route = routes.find((candidate) => String(candidate.number) === bestNumber) || routes[0] || null;
    return { number: bestNumber || (route ? String(route.number) : ''), route };
  }

  function compactCondition(value) {
    const cleaned = text(value, 220);
    return cleaned.split(/[;；]|[,，]\s*(?=(?:because|as|while|with|which|and|由于|因为|其中)\b)/i)[0].trim() || cleaned;
  }

  function challengeAppliesToRoute(challenge, routeNumber) {
    const routeLabel = String(challenge?.route || '').trim();
    if (!routeLabel || /^all$/i.test(routeLabel)) return true;
    return routeNumber ? new RegExp('\\bRoute\\s*' + routeNumber + '\\b', 'i').test(routeLabel) : false;
  }

  function renderRouteOverview(item, report) {
    const node = $('#route-overview');
    if (!node || !report) return;
    const recommendation = recommendedRoute(report, item?.bestRoute);
    const items = ['Temperature range', 'Preferred atmosphere', 'Pressure', 'Estimated duration'].filter((key) => present(report.conditions?.[key]));
    const risks = (report.challenges || [])
      .filter((challenge) => challengeAppliesToRoute(challenge, recommendation.number) && /high|medium/i.test(challenge.severity || ''))
      .sort((a, b) => ({ high: 0, medium: 1 }[String(a.severity || '').toLowerCase()] ?? 2) - ({ high: 0, medium: 1 }[String(b.severity || '').toLowerCase()] ?? 2));
    if (!items.length && !risks.length) { node.hidden = true; return; }
    node.hidden = false;
    const facts = items.map((key) => {
      const label = key === 'Temperature range' ? '温度' : key === 'Preferred atmosphere' ? '气氛' : key === 'Pressure' ? '压力' : '时长';
      const fullValue = text(report.conditions[key], 260);
      return '<span title="' + esc(fullValue) + '"><small>' + esc(label) + '</small><b>' + esc(compactCondition(fullValue)) + '</b></span>';
    }).join('');
    const riskText = risks.length ? '<p><b>关键风险</b> ' + esc(text(risks[0].challenge, 170)) + '</p>' : '';
    const routeContext = recommendation.number ? '基于 Route ' + recommendation.number : '基于推荐路线';
    node.innerHTML = '<div class="route-overview-title"><strong>推荐路线速览</strong><span>' + esc(routeContext) + '</span></div>' + (facts ? '<div class="route-overview-facts">' + facts + '</div>' : '') + riskText;
  }

  function renderRoutes(item, context, report) {
    let routes = report?.routes || [];
    const uniqueRoutes = [];
    const seenTitles = new Set();
    routes.forEach((route) => { const key = String(route.title || '').trim().toLowerCase(); if (key && !seenTitles.has(key)) { seenTitles.add(key); uniqueRoutes.push(route); } });
    routes = uniqueRoutes;
    if (!routes.length && present(item.bestRoute)) {
      const fallbackNumber = recommendedRoute(report, item.bestRoute).number || '1';
      routes = [{ number: Number(fallbackNumber), title: item.bestRoute, fields: { 'Reference basis': item.conditions || item.routes || '已标注为该记录的最佳参考路线。' }, body: '' }];
    }
    setText('#route-count', routes.length ? routes.length + ' 条路线' : '暂无路线');
    renderRouteOverview(item, report);
    if (!routes.length) { setHtml('#route-list', '<div class="empty-row">该记录暂无可展示的合成路线。</div>'); return; }
    const bestNumber = recommendedRoute(report, item.bestRoute).number;
    setHtml('#route-list', routes.map((route, index) => {
      const fields = route.fields || {}; const routeNumber = String(route.number || index + 1); const scores = report?.scoreByRoute?.[routeNumber] || {}; const detail = fields['Transferability to target'] || fields['Reference basis'] || fields['Precursors'] || '路线条件待补充。';
      const conditions = [['温度', fields['Temperature program']], ['气氛', fields['Atmosphere']], ['压力', fields['Pressure']], ['难度', fields['Estimated difficulty']]].filter((pair) => present(pair[1])).slice(0, 4);
      const channels = routeEvidenceCodes(route); const icon = routeIcon(route.title); const isBest = Boolean(bestNumber && bestNumber === routeNumber) || (!bestNumber && index === 0);
      const scoreMarkup = Number.isFinite(scores.weighted) ? '<span class="route-score">' + scores.weighted.toFixed(1) + ' / 100</span>' : '';
      const channelMarkup = channels.length ? '<span class="route-evidence">' + channels.join(' · ') + '</span>' : '';
      const repeatedConditionLabels = new Set(['温度', '气氛', '压力']);
      const visibleConditions = isBest ? conditions.filter((pair) => !repeatedConditionLabels.has(pair[0])) : conditions;
      const executionWindowMarkup = isBest && conditions.some((pair) => repeatedConditionLabels.has(pair[0])) ? '<span class="route-window-note">执行窗口见上方</span>' : '';
      const conditionMarkup = visibleConditions.length || executionWindowMarkup ? '<div class="route-conditions">' + executionWindowMarkup + visibleConditions.map((pair) => '<span><b>' + esc(pair[0]) + '</b> ' + citationText(text(pair[1], 150), context) + '</span>').join('') + '</div>' : '';
      return '<article class="route-card' + (isBest ? ' recommended' : '') + '"><div class="route-node"><i data-lucide="' + icon + '" aria-hidden="true"></i><span>' + routeNumber.padStart(2, '0') + '</span></div><div class="route-card-body"><div class="route-card-head"><h3>' + esc(text(route.title)) + '</h3><div>' + (isBest ? '<span class="route-badge">推荐</span>' : '') + scoreMarkup + '</div></div><p>' + citationText(text(detail, 340), context) + '</p>' + conditionMarkup + (channelMarkup ? '<div class="route-meta">' + channelMarkup + '</div>' : '') + '</div></article>';
    }).join('')); icons();
  }

  function renderProperties(item) {
    const fields = [['计算带隙', present(item.bandGapPbeEv) ? item.bandGapPbeEv + ' eV' : null], ['带隙 / 金属性', item.bandGapOrMetal], ['形成能', present(item.formationEnergyEvAtom) ? item.formationEnergyEvAtom + ' eV/atom' : null], ['预测硬度', present(item.predictedHardnessGPa) ? item.predictedHardnessGPa + ' GPa' : null], ['预测 Tc', present(item.predictedTcK) ? item.predictedTcK + ' K' : null], ['动力学稳定性', item.dynamicStability], ['实验状态', item.experimentalStatus]].filter((pair) => present(pair[1]));
    setText('#property-count', fields.length + ' 个字段'); setHtml('#property-list', fields.length ? fields.map((pair) => '<div><dt>' + pair[0] + '</dt><dd>' + esc(text(pair[1], 220)) + '</dd></div>').join('') : '<div class="empty-row">该记录暂无额外性质字段。</div>');
    const sources = [['来源论文', item.sourcePaper], ['论文 DOI', item.paperDoi], ['数据集 DOI', item.datasetDoi], ['数据类别', item.sourceCategory || item.sourceFamily]].filter((pair) => present(pair[1]));
    setHtml('#source-panel', '<h3>数据出处</h3><dl>' + sources.map((pair) => '<div><dt>' + pair[0] + '</dt><dd>' + esc(text(pair[1], 240)) + '</dd></div>').join('') + '</dl>');
  }

  function exportRecord(item) { const content = ['Synthesis Atlas 材料记录', '记录编号: ' + item.id, '化学式: ' + item.formula, '空间群: ' + (item.spacegroup || '未报告'), 'E_hull: ' + hull(item.eHull), '可合成性评分: ' + (item.score == null ? '未报告' : item.score), '最佳路线: ' + (item.bestRoute || '未报告'), '来源: ' + (item.sourcePaper || item.sourceFamily || item.sourceCategory || '本地数据集')].join('\n'); const link = document.createElement('a'); link.href = URL.createObjectURL(new Blob([content], { type: 'text/plain;charset=utf-8' })); link.download = (item.id || 'material') + '-summary.txt'; link.click(); setTimeout(() => URL.revokeObjectURL(link.href), 1000); show('记录摘要已下载。'); }

  function observeDetailSections() {
    const content = $('.record-content');
    const links = [...document.querySelectorAll('.record-nav a')];
    const sections = content ? [...content.querySelectorAll('section[id]')] : [];
    if (!content || !links.length || !sections.length) return;

    const linkById = new Map(links.map((link) => [link.getAttribute('href')?.slice(1), link]));
    let activeId = '';
    const setActive = (id) => {
      if (!id || id === activeId) return;
      activeId = id;
      links.forEach((link) => {
        const active = linkById.get(id) === link;
        link.classList.toggle('active', active);
        if (active) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    };

    const updateActiveSection = () => {
      const paneScroll = getComputedStyle(content).overflowY === 'auto' && content.scrollHeight > content.clientHeight + 1;
      const contentTop = paneScroll ? content.getBoundingClientRect().top + 84 : 120;
      let current = sections[0];
      sections.forEach((section) => {
        if (section.getBoundingClientRect().top <= contentTop) current = section;
      });
      const atBottom = paneScroll
        ? content.scrollTop + content.clientHeight >= content.scrollHeight - 8
        : window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 8;
      if (atBottom) current = sections[sections.length - 1];
      setActive(current.id);
    };

    content.addEventListener('scroll', updateActiveSection, { passive: true });
    window.addEventListener('scroll', updateActiveSection, { passive: true });
    window.addEventListener('resize', updateActiveSection, { passive: true });
    links.forEach((link) => link.addEventListener('click', () => setActive(link.getAttribute('href')?.slice(1))));
    updateActiveSection();
  }

  async function init() {
    icons();
    try { const response = await fetch(DATA_URL); if (!response.ok) throw new Error('数据文件读取失败'); const materials = await response.json(); const requested = new URL(window.location.href).searchParams.get('id'); const item = materials.find((entry) => entry.id === requested || entry.formula === requested) || materials[0]; const report = parseReport(await loadReport(item)); const referenceContext = renderReferences(item); renderFacts(item); renderStructure(item); renderEvidence(item, referenceContext, report); renderProperties(item); renderRoutes(item, referenceContext, report); icons(); $('#export-button')?.addEventListener('click', () => exportRecord(item)); }
    catch (error) { setText('#record-id', '读取失败'); setText('#material-formula', '—'); setText('#route-count', '读取失败'); }
    observeDetailSections();
    $('#theme-toggle')?.addEventListener('click', () => { document.body.classList.toggle('soft-mode'); show(document.body.classList.contains('soft-mode') ? '已切换为柔和阅读背景。' : '已恢复标准阅读背景。'); });
  }
  init();
})();
