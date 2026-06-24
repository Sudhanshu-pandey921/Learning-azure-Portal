(function () {
  const sidebar = document.getElementById('sidebar');
  const menuToggle = document.getElementById('menu-toggle');
  const navItems = Array.from(document.querySelectorAll('.nav-item'));

  function handleNavClick(event) {
    const target = event.currentTarget.dataset.target;
    const section = document.getElementById(target);
    if (!section) return;
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    navItems.forEach(item => item.classList.remove('active'));
    event.currentTarget.classList.add('active');
    if (window.innerWidth <= 820) {
      sidebar.style.display = 'none';
    }
  }

  function initSidebar() {
    navItems.forEach(item => item.addEventListener('click', handleNavClick));
    if (menuToggle) {
      menuToggle.addEventListener('click', function () {
        sidebar.style.display = sidebar.style.display === 'grid' ? 'none' : 'grid';
      });
    }
    window.addEventListener('resize', function () {
      if (window.innerWidth > 820) {
        sidebar.style.display = 'flex';
      }
    });
  }

  document.addEventListener('DOMContentLoaded', initSidebar);
})();
