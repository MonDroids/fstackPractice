const menuToggle = document.getElementById('menu-toggle');
const sidebar = document.getElementById('sidebar');
const modeToggle = document.getElementById('mode-toggle');
const body = document.body;

menuToggle.addEventListener('click', () => {
  sidebar.classList.toggle('hide');
});

modeToggle.addEventListener('click', () => {
  body.classList.toggle('light');
  modeToggle.textContent = body.classList.contains('light') ? '☀️' : '🌙';
});
