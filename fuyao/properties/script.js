(() => {
  const DATA_URL = '../../data/mp300_materials.json';
  const state = { materials: [], tags: new Map(), selectedTags: new Set() };
  const $ = (selector) => document.querySelector(selector);
  const icons = () => { if (window.lucide) window.lucide.createIcons({ attrs: { 'stroke-width': 1.8 } }); };
  const escapeHtml = (value) => String(value ?? '').replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
  const formatSpacegroup = (value) => escapeHtml(value || '—').replace(/_(\d+)/g, '<sub>$1</sub>');
  const params = new URLSearchParams(window.location.search);
  const queryInput = $('#property-query');
  const elementInput = $('#element-query');
  const ehullInput = $('#ehull-max');
  const scoreInput = $('#score-min');

  function buildTags() {
    state.tags.clear();
    state.materials.forEach((item) => (item.propertyTags || []).forEach((tag) => state.tags.set(tag, (state.tags.get(tag) || 0) + 1)));
    const tagList = $('#tag-list');
    tagList.innerHTML = [...state.tags.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0])).map(([tag, count]) => `<button class="property-tag" type="button" data-tag="${escapeHtml(tag)}" aria-pressed="false"><span>${escapeHtml(tag)}</span><small>${count}</small></button>`).join('');
    tagList.querySelectorAll('[data-tag]').forEach((button) => button.addEventListener('click', () => {
      const tag = button.dataset.tag;
      if (state.selectedTags.has(tag)) state.selectedTags.delete(tag); else state.selectedTags.add(tag);
      button.classList.toggle('selected', state.selectedTags.has(tag));
      button.setAttribute('aria-pressed', String(state.selectedTags.has(tag)));
      renderResults();
      syncUrl();
    }));
    $('#tag-count').textContent = state.tags.size;
  }

  function matches(item) {
    const query = (queryInput.value || '').trim().toLowerCase();
    const wantedElements = (elementInput.value || '').split(/[ ,，+]+/).map((value) => value.trim()).filter(Boolean);
    const ehullMax = Number.parseFloat(ehullInput.value);
    const scoreMin = Number.parseFloat(scoreInput.value);
    const haystack = [item.id, item.formula, item.spacegroup, item.propertySearchText, ...(item.propertyTags || []), ...(item.elements || [])].join(' ').toLowerCase();
    return (!query || haystack.includes(query)) && (!wantedElements.length || wantedElements.every((element) => (item.elements || []).some((value) => value.toLowerCase() === element.toLowerCase()))) && (!state.selectedTags.size || [...state.selectedTags].every((tag) => (item.propertyTags || []).includes(tag))) && (Number.isNaN(ehullMax) || Number(item.eHull) <= ehullMax) && (Number.isNaN(scoreMin) || Number(item.score) >= scoreMin);
  }

  function renderResults() {
    const filtered = state.materials.filter(matches).sort((a, b) => Number(b.score || 0) - Number(a.score || 0) || Number(a.eHull || 0) - Number(b.eHull || 0));
    const body = $('#result-body');
    const visible = filtered.slice(0, 30);
    $('#results-description').textContent = `${filtered.length.toLocaleString('zh-CN')} 条记录符合当前条件${filtered.length > visible.length ? `，展示前 ${visible.length} 条` : ''}`;
    $('#results-state').textContent = filtered.length ? '已更新' : '无匹配';
    $('#filter-count').textContent = `${state.selectedTags.size + [queryInput.value, elementInput.value, ehullInput.value, scoreInput.value].filter((value) => String(value || '').trim()).length} 个条件`;
    if (!visible.length) {
      body.innerHTML = '<tr><td colspan="5"><div class="result-empty"><p>没有符合条件的记录。可以清除一个标签，或放宽 E_hull 上限。</p></div></td></tr>';
      return;
    }
    body.innerHTML = visible.map((item) => {
      const scoreClass = Number(item.score) >= 75 ? '' : ' mid';
      const tags = (item.propertyTags || []).slice(0, 2).join(' · ') || '未标注';
      const hull = Number.isFinite(Number(item.eHull)) ? Number(item.eHull).toFixed(3) : '—';
      return `<tr><td><a class="formula-link" href="../material-detail/index.html?id=${encodeURIComponent(item.id)}" target="_blank" rel="noopener noreferrer">${escapeHtml(item.formula)}</a><span class="formula-meta">${escapeHtml(item.id)} · ${escapeHtml((item.elements || []).join(' · '))}</span></td><td>${hull}</td><td class="score${scoreClass}">${escapeHtml(item.score ?? '—')}</td><td>${formatSpacegroup(item.spacegroup)}</td><td>${escapeHtml(tags)}</td></tr>`;
    }).join('');
    icons();
  }

  function syncFromUrl() {
    queryInput.value = params.get('q') || '';
    elementInput.value = params.get('elements') || '';
    const tagQuery = params.get('tag');
    if (tagQuery) tagQuery.split(',').filter(Boolean).forEach((tag) => state.selectedTags.add(tag));
  }

  function syncUrl() {
    const url = new URL(window.location.href);
    [['q', queryInput.value], ['elements', elementInput.value], ['ehull', ehullInput.value], ['score', scoreInput.value]].forEach(([key, value]) => value ? url.searchParams.set(key, value) : url.searchParams.delete(key));
    if (state.selectedTags.size) url.searchParams.set('tag', [...state.selectedTags].join(',')); else url.searchParams.delete('tag');
    window.history.replaceState({}, '', url);
  }

  $('#property-form').addEventListener('submit', (event) => { event.preventDefault(); renderResults(); syncUrl(); });
  [queryInput, elementInput, ehullInput, scoreInput].forEach((input) => input.addEventListener('input', renderResults));
  $('#clear-filters').addEventListener('click', () => { queryInput.value = ''; elementInput.value = ''; ehullInput.value = ''; scoreInput.value = ''; state.selectedTags.clear(); document.querySelectorAll('.property-tag.selected').forEach((button) => { button.classList.remove('selected'); button.setAttribute('aria-pressed', 'false'); }); renderResults(); syncUrl(); });

  fetch(DATA_URL).then((response) => { if (!response.ok) throw new Error('数据文件读取失败'); return response.json(); }).then((materials) => { state.materials = materials; $('#dataset-count').textContent = materials.length.toLocaleString('zh-CN'); syncFromUrl(); buildTags(); if (state.selectedTags.size) state.selectedTags.forEach((tag) => { const button = document.querySelector(`[data-tag="${CSS.escape(tag)}"]`); if (button) { button.classList.add('selected'); button.setAttribute('aria-pressed', 'true'); } }); renderResults(); }).catch((error) => { $('#results-state').textContent = '读取失败'; $('#results-description').textContent = error.message; $('#result-body').innerHTML = '<tr><td colspan="5"><div class="result-empty"><p>本地数据文件暂时无法读取，请通过静态服务器打开原型。</p></div></td></tr>'; });
})();
