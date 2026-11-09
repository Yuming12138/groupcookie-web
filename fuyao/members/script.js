(() => {
  const members = [
    { id: 'yinwanjian', group: 'faculty', groupLabel: '课题组负责人', name: '尹万健', latin: 'Wanjian Yin', role: '教授、课题组负责人', email: 'wjyin@suda.edu.cn', photo: '../../assets/members/yinwanjian.jpg', research: ['能源材料', '缺陷物理', '第一性原理'] },
    { id: 'zhouke', group: 'faculty', groupLabel: '教师', name: '周柯', latin: 'Ke Zhou', role: '副教授', email: 'zhouke@suda.edu.cn', photo: '../../assets/members/zhouke.png', research: ['微纳限域输运', 'AI 驱动材料设计', '水与水合离子'], source: '个人主页', sourceUrl: 'https://www.comates.group/members/zhouke' },
    { id: 'jiangweijian', group: 'student', groupLabel: '博士研究生', name: '姜伟健', latin: 'Weijian Jiang', role: '博士研究生 · 2024', email: 'weijianjiang@126.com', photo: '../../assets/members/jiangweijian.jpg' },
    { id: 'chenguangming', group: 'student', groupLabel: '硕士研究生', name: '陈光明', latin: 'Guangming Chen', role: '硕士研究生 · 2024', email: '17634437488@163.com', photo: '../../assets/members/chenguangming.jpg', contain: true },
    { id: 'shayenan', group: 'student', groupLabel: '硕士研究生', name: '沙烨男', latin: 'Yenan Sha', role: '硕士研究生 · 2025', email: 'yenansha@outlook.com', photo: '../../assets/members/shayenan.jpg' },
    { id: 'chenjie', group: 'student', groupLabel: '硕士研究生', name: '陈杰', latin: 'Jie Chen', role: '硕士研究生 · 2025', email: '20254240042@stu.suda.edu.cn', photo: '../../assets/members/chenjie.jpg' },
    { id: 'luoruoming', group: 'student', groupLabel: '硕士研究生', name: '罗若铭', latin: 'Ruoming Luo', role: '硕士研究生 · 2024', email: '737795805@qq.com', photo: '../../assets/members/luoruoming.jpg' },
  ];
  const directory = document.querySelector('#member-directory');
  const escapeHtml = (value) => String(value ?? '').replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
  const icons = () => { if (window.lucide) window.lucide.createIcons({ attrs: { 'stroke-width': 1.8 } }); };
  function card(member) {
    const research = member.research?.length ? `<div class="member-research-tags">${member.research.map((item) => `<span>${escapeHtml(item)}</span>`).join('')}</div>` : '';
    const source = member.sourceUrl ? `<a href="${escapeHtml(member.sourceUrl)}" target="_blank" rel="noopener noreferrer">${escapeHtml(member.source)} <i data-lucide="arrow-up-right" aria-hidden="true"></i></a>` : '';
    return `<article class="directory-member-card"><img class="${member.contain ? 'contain' : ''}" src="${escapeHtml(member.photo)}" alt="${escapeHtml(member.name)}" width="104" height="154" loading="lazy" /><div class="directory-member-body"><p class="directory-member-role">${escapeHtml(member.groupLabel)}</p><h3>${escapeHtml(member.name)}</h3><p class="directory-member-meta">${escapeHtml(member.latin)}<br />${escapeHtml(member.role)}</p>${research}<a class="directory-member-mail" href="mailto:${escapeHtml(member.email)}">${escapeHtml(member.email)}</a>${source ? `<span class="directory-member-source">${source}</span>` : ''}</div></article>`;
  }
  function render(group = 'all') {
    const visible = group === 'all' ? members : members.filter((member) => member.group === group);
    if (!visible.length) { directory.innerHTML = '<p class="member-empty">暂无该类别成员资料。</p>'; return; }
    const groups = group === 'all' ? [['faculty', '教师'], ['student', '学生']] : [[group, group === 'faculty' ? '教师' : '学生']];
    directory.innerHTML = groups.map(([key, label]) => { const items = visible.filter((member) => member.group === key); if (!items.length) return ''; return `<section class="member-group" aria-labelledby="member-group-${key}"><div class="member-group-head"><h2 id="member-group-${key}">${label}</h2><span>${items.length} 人</span></div><div class="directory-grid">${items.map(card).join('')}</div></section>`; }).join('');
    icons();
  }
  document.querySelectorAll('[data-group]').forEach((button) => button.addEventListener('click', () => { const group = button.dataset.group; document.querySelectorAll('[data-group]').forEach((item) => { const selected = item === button; item.classList.toggle('selected', selected); item.setAttribute('aria-pressed', String(selected)); }); render(group); }));
  render();
})();
