document.addEventListener('DOMContentLoaded', function () {
  const menuButton = document.querySelector('.nav-menu');
  const navItem = document.querySelector('.nav-item');
  const submenu = document.getElementById('submenu');

  if (menuButton && navItem && submenu) {
    menuButton.addEventListener('click', function (event) {
      event.preventDefault();
      const isExpanded = navItem.classList.toggle('active');
      menuButton.setAttribute('aria-expanded', isExpanded);

      if (isExpanded) {
        submenu.removeAttribute('hidden');
      } else {
        submenu.setAttribute('hidden', 'true');
      }
    });
  }

  document.querySelectorAll('.submenu a').forEach(anchor => {
    anchor.addEventListener('click', function () {
      navItem.classList.remove('active');
      submenu.setAttribute('hidden', 'true');
      menuButton.setAttribute('aria-expanded', 'false');
    });
  });

  const scrollToFooterBtn = document.getElementById('scroll-to-footer');
  const footerSection = document.getElementById('footer');
