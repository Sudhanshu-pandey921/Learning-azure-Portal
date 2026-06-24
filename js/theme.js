(function () {
  const themeToggle = document.getElementById('theme-toggle');
  const root = document.documentElement;
  const body = document.body;

  function setTheme(mode) {
    if (mode === 'light') {
      body.classList.add('light');
      root.style.setProperty('--accent', '#0067c5');
    } else {
      body.classList.remove('light');
      root.style.setProperty('--accent', '#0078d4');
    }
    localStorage.setItem('portal-theme', mode);
  }

  function initTheme() {
    const savedTheme = localStorage.getItem('portal-theme');
    setTheme(savedTheme === 'light' ? 'light' : 'dark');
  }

  function toggleTheme() {
    const active = body.classList.contains('light') ? 'dark' : 'light';
    setTheme(active);
  }

  document.addEventListener('DOMContentLoaded', function () {
    if (themeToggle) {
      themeToggle.addEventListener('click', toggleTheme);
    }
    initTheme();
  });
})();
