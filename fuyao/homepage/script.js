(() => {
  const elements = [
    ['H','氢','nonmetal',1,1],['He','氦','noble',1,18],
    ['Li','锂','metal',2,1],['Be','铍','metal',2,2],['B','硼','metalloid',2,13],['C','碳','nonmetal',2,14],['N','氮','nonmetal',2,15],['O','氧','nonmetal',2,16],['F','氟','nonmetal',2,17],['Ne','氖','noble',2,18],
    ['Na','钠','metal',3,1],['Mg','镁','metal',3,2],['Al','铝','metal',3,13],['Si','硅','metalloid',3,14],['P','磷','nonmetal',3,15],['S','硫','nonmetal',3,16],['Cl','氯','nonmetal',3,17],['Ar','氩','noble',3,18],
    ['K','钾','metal',4,1],['Ca','钙','metal',4,2],['Sc','钪','transition',4,3],['Ti','钛','transition',4,4],['V','钒','transition',4,5],['Cr','铬','transition',4,6],['Mn','锰','transition',4,7],['Fe','铁','transition',4,8],['Co','钴','transition',4,9],['Ni','镍','transition',4,10],['Cu','铜','transition',4,11],['Zn','锌','transition',4,12],['Ga','镓','metal',4,13],['Ge','锗','metalloid',4,14],['As','砷','metalloid',4,15],['Se','硒','nonmetal',4,16],['Br','溴','nonmetal',4,17],['Kr','氪','noble',4,18],
    ['Rb','铷','metal',5,1],['Sr','锶','metal',5,2],['Y','钇','transition',5,3],['Zr','锆','transition',5,4],['Nb','铌','transition',5,5],['Mo','钼','transition',5,6],['Tc','锝','transition',5,7],['Ru','钌','transition',5,8],['Rh','铑','transition',5,9],['Pd','钯','transition',5,10],['Ag','银','transition',5,11],['Cd','镉','transition',5,12],['In','铟','metal',5,13],['Sn','锡','metal',5,14],['Sb','锑','metalloid',5,15],['Te','碲','metalloid',5,16],['I','碘','nonmetal',5,17],['Xe','氙','noble',5,18],
    ['Cs','铯','metal',6,1],['Ba','钡','metal',6,2],['Hf','铪','transition',6,4],['Ta','钽','transition',6,5],['W','钨','transition',6,6],['Re','铼','transition',6,7],['Os','锇','transition',6,8],['Ir','铱','transition',6,9],['Pt','铂','transition',6,10],['Au','金','transition',6,11],['Hg','汞','transition',6,12],['Tl','铊','metal',6,13],['Pb','铅','metal',6,14],['Bi','铋','metal',6,15],['Po','钋','metalloid',6,16],['At','砹','nonmetal',6,17],['Rn','氡','noble',6,18],
    ['Fr','钫','metal',7,1],['Ra','镭','metal',7,2],['Rf','𬬻','transition',7,4],['Db','𬭊','transition',7,5],['Sg','𬭳','transition',7,6],['Bh','𬭛','transition',7,7],['Hs','𬭶','transition',7,8],['Mt','䥑','transition',7,9],['Ds','鐽','transition',7,10],['Rg','錀','transition',7,11],['Cn','鎶','transition',7,12],['Nh','鉨','metal',7,13],['Fl','鈇','metal',7,14],['Mc','镆','metal',7,15],['Lv','鉝','metal',7,16],['Ts','鿬','nonmetal',7,17],['Og','鿫','noble',7,18],
  ];
  const lanthanides = [['La','镧'],['Ce','铈'],['Pr','镨'],['Nd','钕'],['Pm','钷'],['Sm','钐'],['Eu','铕'],['Gd','钆'],['Tb','铽'],['Dy','镝'],['Ho','钬'],['Er','铒'],['Tm','铥'],['Yb','镱'],['Lu','镥']];
  const actinides = [['Ac','锕'],['Th','钍'],['Pa','镤'],['U','铀'],['Np','镎'],['Pu','钚'],['Am','镅'],['Cm','锔'],['Bk','锫'],['Cf','锎'],['Es','锿'],['Fm','镄'],['Md','钔'],['No','锘'],['Lr','铹']];
  let candidates = [];
  let catalogLoaded = false;
  let catalogError = null;
  const DATA_URLS = ['../../data/mp300_materials.json', '../data/mp300_materials.json', '/fuyao/data/mp300_materials.json'];
  const escapeHtml = (value) => String(value == null ? '' : value).replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
  const identifyRecord = (item) => {
    const recordId = String(item?.recordId || item?.id || '').trim();
    const explicitMpId = String(item?.mpId || item?.mp_id || item?.['mp-id'] || '').trim();
    const mpId = /^mp-\d+$/i.test(explicitMpId) ? explicitMpId : (/^mp-\d+$/i.test(recordId) ? recordId : null);
    const recordIdType = mpId ? 'materials-project' : (item?.wbmMaterialId ? 'wbm' : 'catalog');
    return { recordId, mpId, recordIdType, recordIdLabel: mpId ? 'MP ID' : (recordIdType === 'wbm' ? 'WBM ID' : '记录 ID') };
  };
  const normalizeCandidate = (item) => ({
    ...item,
    ...identifyRecord(item),
    plain: String(item.formula || '').replace(/[₀-₉]/g, (digit) => String('₀₁₂₃₄₅₆₇₈₉'.indexOf(digit))),
    name: item.spacegroup ? '空间群 ' + item.spacegroup : '候选相',
    bandgap: Number.isFinite(Number(item.bandGapPbeEv)) ? Number(item.bandGapPbeEv) : null,
    ehull: Number.isFinite(Number(item.eHull)) ? Number(item.eHull) : null,
    formation: Number.isFinite(Number(item.formationEnergyEvAtom)) ? Number(item.formationEnergyEvAtom) : null,
    bulk: Number.isFinite(Number(item.bulkModulusGPa)) ? Number(item.bulkModulusGPa) : null,
  });
  const propertyConfig = {
    bandgap: { label: '计算带隙', unit: 'eV', decimals: 2 },
    ehull: { label: 'E_hull', unit: 'eV/atom', decimals: 3 },
    formation: { label: '形成能', unit: 'eV/atom', decimals: 2 },
    bulk: { label: '体积模量', unit: 'GPa', decimals: 0 },
  };
  const selected = new Set();
  const toast = document.querySelector('#toast');
  let toastTimer;
  const showToast = (message) => {
    toast.textContent = message;
    toast.classList.add('visible');
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => toast.classList.remove('visible'), 3000);
  };
  const icons = () => { if (window.lucide) window.lucide.createIcons({ attrs: { 'stroke-width': 1.8 } }); };
  const updateUrl = (key, value) => {
    const url = new URL(window.location.href);
    if (value) url.searchParams.set(key, value); else url.searchParams.delete(key);
    window.history.replaceState({}, '', url);
  };

  const table = document.querySelector('#periodic-table');
  const renderCell = (item, row, col) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'element-cell ' + item[2];
    button.style.gridRow = row;
    button.style.gridColumn = col;
    button.dataset.symbol = item[0];
    button.setAttribute('aria-label', item[0] + ' ' + item[1] + '，第 ' + row + ' 周期');
    button.setAttribute('aria-pressed', 'false');
    button.title = item[0] + ' · ' + item[1];
    button.innerHTML = '<strong>' + item[0] + '</strong><small>' + item[1] + '</small>';
    button.addEventListener('click', () => {
      if (selected.has(item[0])) { selected.delete(item[0]); button.classList.remove('selected'); button.setAttribute('aria-pressed', 'false'); }
      else { selected.add(item[0]); button.classList.add('selected'); button.setAttribute('aria-pressed', 'true'); }
      renderSelection();
    });
    if (table) table.appendChild(button);
  };
  elements.forEach((item) => renderCell(item, item[3], item[4]));
  const renderSeries = (target, values) => values.forEach((item) => {
    const data = [item[0], item[1], 'metal', 0, 0];
    const button = document.createElement('button');
    button.type = 'button'; button.className = 'element-cell metal'; button.dataset.symbol = item[0]; button.setAttribute('aria-pressed', 'false'); button.title = item[0] + ' · ' + item[1]; button.innerHTML = '<strong>' + item[0] + '</strong><small>' + item[1] + '</small>';
    button.addEventListener('click', () => { if (selected.has(data[0])) { selected.delete(data[0]); button.classList.remove('selected'); button.setAttribute('aria-pressed', 'false'); } else { selected.add(data[0]); button.classList.add('selected'); button.setAttribute('aria-pressed', 'true'); } renderSelection(); });
    const targetNode = document.querySelector(target);
    if (targetNode) targetNode.appendChild(button);
  });
  renderSeries('#lanthanides', lanthanides); renderSeries('#actinides', actinides);

  const resultBody = document.querySelector('#element-result-body');
  const resultPanel = document.querySelector('.element-results');
  const resultScroller = document.querySelector('.element-results .result-table-wrap');
  const previewRowCount = resultBody ? resultBody.querySelectorAll('[data-preview-row="true"]').length : 0;
  const previewMarkup = resultBody ? resultBody.innerHTML : '';
  const setCatalogState = (state) => {
    if (!resultPanel) return;
    resultPanel.dataset.catalogState = state;
    resultPanel.setAttribute('aria-busy', state === 'loading' ? 'true' : 'false');
  };
  const formatEhull = (value) => Number.isFinite(Number(value)) ? Number(value).toFixed(3) : '—';
  const formatTags = (candidate) => {
    const tags = Array.isArray(candidate.propertyTags) ? candidate.propertyTags.filter(Boolean).slice(0, 3) : [];
    return tags.length ? tags.join(' · ') : '未标注';
  };
  const renderSelection = () => {
    const symbols = [...selected];
    const selectionSummary = document.querySelector('#selection-summary');
    if (selectionSummary) selectionSummary.textContent = symbols.length ? symbols.join(' + ') : '未选择元素';
    if (!catalogLoaded && !symbols.length && previewRowCount) {
      if (resultBody && !resultBody.querySelector('[data-preview-row="true"]')) resultBody.innerHTML = previewMarkup;
      const resultCount = document.querySelector('#element-result-count');
      if (resultCount) resultCount.textContent = previewRowCount;
      setCatalogState(catalogError ? 'partial' : 'loading');
      return;
    }
    const matches = candidates.filter((candidate) => !symbols.length || symbols.every((symbol) => (candidate.elements || []).includes(symbol))).sort((a, b) => Number(b.score || 0) - Number(a.score || 0));
    const resultCount = document.querySelector('#element-result-count');
    if (resultCount) resultCount.textContent = matches.length;
    if (!resultBody) return;
    if (!matches.length) {
      resultBody.innerHTML = '<tr><td colspan="5"><p class="empty-result">' + (symbols.length ? '当前数据中没有同时包含所选元素的候选相。' : (catalogLoaded ? '材料目录当前没有记录。' : '材料记录暂时无法读取。')) + '</p></td></tr>';
    } else {
      resultBody.innerHTML = matches.map((candidate) => '<tr><td><a class="result-material" href="../material-detail/index.html?id=' + encodeURIComponent(candidate.recordId || candidate.id) + '"><strong>' + escapeHtml(candidate.formula) + '</strong><span>' + escapeHtml(candidate.recordIdLabel + ' · ' + (candidate.mpId || candidate.recordId || candidate.id)) + '</span></a></td><td>' + escapeHtml(candidate.spacegroup || '—') + '</td><td class="result-number">' + escapeHtml(formatEhull(candidate.eHull)) + '</td><td class="result-score">' + escapeHtml(candidate.score ?? '—') + '</td><td class="result-properties">' + escapeHtml(formatTags(candidate)) + '</td></tr>').join('');
    }
    if (resultScroller) {
      resultScroller.scrollTop = 0;
      resultScroller.scrollLeft = 0;
    }
    setCatalogState(catalogLoaded ? 'ready' : 'loading');
  };
  renderSelection();
  document.querySelector('#clear-elements')?.addEventListener('click', () => { selected.clear(); document.querySelectorAll('.element-cell.selected').forEach((button) => { button.classList.remove('selected'); button.setAttribute('aria-pressed', 'false'); }); updateUrl('elements', ''); renderSelection(); });
  const propertyForm = document.querySelector('#property-form');
  const renderProperties = () => {
    const propertySelect = document.querySelector('#property-select');
    if (!propertySelect) return;
    const property = propertySelect.value;
    const config = propertyConfig[property];
    const minValue = parseFloat(document.querySelector('#property-min').value);
    const maxValue = parseFloat(document.querySelector('#property-max').value);
    const filtered = candidates.filter((candidate) => (!selected.size || [...selected].every((symbol) => (candidate.elements || []).includes(symbol))) && (Number.isNaN(minValue) || (Number.isFinite(candidate[property]) && candidate[property] >= minValue)) && (Number.isNaN(maxValue) || (Number.isFinite(candidate[property]) && candidate[property] <= maxValue)));
    document.querySelector('#property-unit').textContent = config.unit;
    document.querySelector('#property-column-label').textContent = config.label + ' · ' + config.unit;
    const results = document.querySelector('#property-results');
    const formatProperty = (candidate) => Number.isFinite(candidate[property]) ? candidate[property].toFixed(config.decimals) : '—';
    const formatHull = (candidate) => Number.isFinite(candidate.ehull) ? candidate.ehull.toFixed(3) : '—';
    results.innerHTML = '<div class="property-result-head"><span>材料</span><span>' + config.label + ' · ' + config.unit + '</span><span>E_hull · eV/atom</span><span>可合成性</span><span></span></div>' + (filtered.length ? filtered.slice(0, 30).map((candidate) => '<div class="property-result-row"><strong>' + escapeHtml(candidate.formula) + '</strong><span>' + formatProperty(candidate) + '</span><span>' + formatHull(candidate) + '</span><span class="' + (Number(candidate.score) >= 75 ? 'score-high' : 'score-mid') + '">' + escapeHtml(candidate.score ?? '—') + '</span></div>').join('') : '<p class="empty-result">没有符合范围的示例记录。</p>');
    icons();
    updateUrl('property', property);
  };
  document.querySelector('#property-select')?.addEventListener('change', renderProperties);
  propertyForm?.addEventListener('submit', (event) => { event.preventDefault(); renderProperties(); showToast('性质筛选已更新：' + propertyConfig[document.querySelector('#property-select').value].label + '。'); });

  const input = document.querySelector('#quick-query');
  document.querySelector('#quick-search')?.addEventListener('submit', (event) => {
    event.preventDefault();
    const query = input.value.trim();
    if (!query) { showToast('请输入化学式、元素或性质。'); return; }
    const exact = candidates.find((candidate) => candidate.plain.toLowerCase() === query.toLowerCase());
    if (exact) { selected.clear(); document.querySelectorAll('.element-cell.selected').forEach((button) => { button.classList.remove('selected'); button.setAttribute('aria-pressed', 'false'); }); exact.elements.forEach((symbol) => { const button = document.querySelector('[data-symbol="' + symbol + '"]'); selected.add(symbol); if (button) { button.classList.add('selected'); button.setAttribute('aria-pressed', 'true'); } }); renderSelection(); updateUrl('elements', exact.elements.join(',')); document.querySelector('#elements').scrollIntoView({ behavior: 'smooth' }); showToast('已按 ' + exact.formula + ' 选中元素组合。'); return; }
    if (/带隙|band.?gap|e.?hull|形成能|模量/i.test(query)) { const propertySection = document.querySelector('#properties'); if (propertySection) propertySection.scrollIntoView({ behavior: 'smooth' }); else window.location.href = '../properties/index.html?q=' + encodeURIComponent(query); return; }
    showToast('已记录检索词“' + query + '”，等待接入实时搜索接口。');
  });
  document.querySelectorAll('[data-query]').forEach((button) => button.addEventListener('click', () => { input.value = button.dataset.query; input.focus(); }));
  document.querySelector('#mobile-menu-toggle')?.addEventListener('click', (event) => { const open = document.querySelector('.site-header').classList.toggle('mobile-open'); event.currentTarget.setAttribute('aria-expanded', open ? 'true' : 'false'); event.currentTarget.setAttribute('aria-label', open ? '关闭导航' : '打开导航'); });

  const fileInput = document.querySelector('#prediction-file');
  const dropzone = document.querySelector('#dropzone');
  const fileName = document.querySelector('#file-name');
  const uploadStatus = document.querySelector('#upload-status');
  const showFile = (file) => {
    if (!file) return;
    const size = file.size < 1024 * 1024 ? Math.max(1, Math.round(file.size / 1024)) + ' KB' : (file.size / 1024 / 1024).toFixed(1) + ' MB';
    fileName.textContent = file.name + ' · ' + size;
    uploadStatus.textContent = '文件已选中。演示模式不会上传文件。';
  };
  fileInput?.addEventListener('change', () => showFile(fileInput.files[0]));
  ['dragenter','dragover'].forEach((type) => dropzone?.addEventListener(type, (event) => { event.preventDefault(); dropzone.classList.add('dragging'); }));
  ['dragleave','drop'].forEach((type) => dropzone?.addEventListener(type, (event) => { event.preventDefault(); dropzone.classList.remove('dragging'); }));
  dropzone?.addEventListener('drop', (event) => { const file = event.dataTransfer.files[0]; if (file) { try { const transfer = new DataTransfer(); transfer.items.add(file); fileInput.files = transfer.files; } catch (error) { /* Browser fallback: keep the visible filename. */ } showFile(file); } });
  document.querySelector('#upload-form')?.addEventListener('submit', (event) => {
    event.preventDefault();
    const file = fileInput.files[0];
    if (!file) { uploadStatus.textContent = '请先选择一个 CSV、JSON、CIF 或 POSCAR 文件。'; showToast('请先选择预测输入文件。'); return; }
    const jobId = 'SA-' + Date.now().toString(36).toUpperCase();
    document.querySelector('#job-id').textContent = jobId;
    document.querySelector('#job-file').textContent = file.name;
    document.querySelector('#job-state-value').textContent = '已创建（演示）';
    document.querySelector('#job-title').textContent = '预测任务已创建';
    uploadStatus.textContent = '任务已建立。接入后端后，这里将进入排队与运行状态。';
    showToast('预测任务 ' + jobId + ' 已创建。');
  });

  const loadDataset = async () => {
    setCatalogState('loading');
    try {
      let records;
      try {
        const apiResponse = await fetch('/api/materials?limit=5000&include=full', { cache: 'no-store' });
        const apiPayload = apiResponse.ok ? await apiResponse.json() : null;
        records = Array.isArray(apiPayload?.data) && apiPayload.data.length ? apiPayload.data : null;
      } catch (_apiError) {
        records = null;
      }
      if (!records) {
        let lastError = null;
        for (const dataUrl of DATA_URLS) {
          try {
            const response = await fetch(dataUrl, { cache: 'no-store' });
            if (!response.ok) { lastError = new Error('数据文件读取失败（' + response.status + '）'); continue; }
            const payload = await response.json();
            if (Array.isArray(payload) && payload.length) { records = payload; break; }
            lastError = new Error('数据文件为空');
          } catch (error) {
            lastError = error;
          }
        }
        if (!records) throw (lastError || new Error('数据文件读取失败'));
      }
      candidates = records.map(normalizeCandidate);
      catalogLoaded = true;
      catalogError = null;
      const total = document.querySelector('#dataset-total');
      const scored = document.querySelector('#candidate-total');
      const tags = document.querySelector('#tag-total');
      if (total) total.textContent = records.length.toLocaleString('zh-CN');
      if (scored) scored.textContent = records.filter((item) => Number(item.score) >= 75).length.toLocaleString('zh-CN');
      if (tags) tags.textContent = new Set(records.flatMap((item) => item.propertyTags || [])).size;
      renderSelection();
    } catch (error) {
      catalogLoaded = false;
      catalogError = error;
      renderSelection();
      showToast('完整材料目录暂时无法读取，当前保留默认示例记录。');
    }
  };
  loadDataset();

  const navLinks = [...document.querySelectorAll('.site-nav a')];
  const sections = ['elements','properties','predict','members'].map((id) => document.getElementById(id));
  const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) navLinks.forEach((link) => link.classList.toggle('active', link.getAttribute('href') === '#' + entry.target.id)); }), { rootMargin: '-35% 0px -55% 0px' });
  sections.filter(Boolean).forEach((section) => observer.observe(section));
  icons();
})();
