(function () {
  var viewport = document.getElementById('viewport');
  var navButtons = document.querySelectorAll('.nav-btn');
  var menuOverlay = document.getElementById('menuOverlay');

  function showPage(name) {
    document.querySelectorAll('.page').forEach(function (p) {
      p.classList.toggle('is-active', p.id === 'page-' + name);
    });
    navButtons.forEach(function (b) {
      b.classList.toggle('is-active', b.dataset.target === name);
    });
    closeMenu();
    window.scrollTo({ top: 0, behavior: 'auto' });
  }

  function openMenu() {
    menuOverlay.classList.add('is-open');
  }

  function closeMenu() {
    menuOverlay.classList.remove('is-open');
  }

  document.querySelectorAll('[data-target]').forEach(function (el) {
    el.addEventListener('click', function (e) {
      e.preventDefault();
      showPage(el.dataset.target);
    });
  });

  document.querySelectorAll('[data-menu-open], #hamburgerBtn').forEach(function (el) {
    el.addEventListener('click', openMenu);
  });

  document.getElementById('menuClose').addEventListener('click', closeMenu);

  document.querySelectorAll('.year').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
})();
