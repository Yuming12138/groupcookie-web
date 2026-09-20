(() => {
  const $ = (selector) => document.querySelector(selector);
  const fileInput = $('#prediction-file');
  const dropzone = $('#dropzone');
  const fileName = $('#file-name');
  const status = $('#upload-status');
  const toast = $('#toast');
  let toastTimer;
  const icons = () => { if (window.lucide) window.lucide.createIcons({ attrs: { 'stroke-width': 1.8 } }); };
  const showToast = (message) => { toast.textContent = message; toast.classList.add('visible'); window.clearTimeout(toastTimer); toastTimer = window.setTimeout(() => toast.classList.remove('visible'), 2800); };
  const formatSize = (bytes) => bytes < 1024 * 1024 ? `${Math.max(1, Math.round(bytes / 1024))} KB` : `${(bytes / 1024 / 1024).toFixed(1)} MB`;
  const showFile = (file) => { if (!file) return; fileName.textContent = `${file.name} · ${formatSize(file.size)}`; status.textContent = '文件已选中。提交后会创建一条演示任务。'; };
  fileInput.addEventListener('change', () => showFile(fileInput.files[0]));
  ['dragenter', 'dragover'].forEach((type) => dropzone.addEventListener(type, (event) => { event.preventDefault(); dropzone.classList.add('dragging'); }));
  ['dragleave', 'drop'].forEach((type) => dropzone.addEventListener(type, (event) => { event.preventDefault(); dropzone.classList.remove('dragging'); }));
  dropzone.addEventListener('drop', (event) => { const file = event.dataTransfer.files[0]; if (!file) return; try { const transfer = new DataTransfer(); transfer.items.add(file); fileInput.files = transfer.files; } catch (error) { /* 浏览器不支持 DataTransfer 时仍显示文件信息。 */ } showFile(file); });
  $('#upload-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const file = fileInput.files[0];
    if (!file) { status.textContent = '请先选择一个 CIF、POSCAR、VASP、CSV 或 JSON 文件。'; showToast('请先选择预测文件。'); return; }
    const jobId = `SA-${Date.now().toString(36).toUpperCase()}`;
    const target = $('#prediction-target').selectedOptions[0].textContent;
    $('#job-id').textContent = jobId;
    $('#job-file').textContent = file.name;
    $('#job-target').textContent = target;
    $('#job-state').textContent = '已创建（演示）';
    $('#job-title').textContent = '预测任务已创建';
    status.textContent = '任务已建立。接入后端后，这里将进入排队、解析和运行状态。';
    showToast(`预测任务 ${jobId} 已创建。`);
  });
  icons();
})();
