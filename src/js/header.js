document.addEventListener('DOMContentLoaded', function () {
  const menuButton = document.querySelector('.nav-menu');
  const navItem = document.querySelector('.nav-item');

  if (menuButton && navItem) {
    menuButton.addEventListener('click', function (event) {
      event.preventDefault();
      navItem.classList.toggle('active');
    });
  }

  document.querySelectorAll('.submenu a').forEach(anchor => {
    anchor.addEventListener('click', function (event) {
      event.preventDefault();

      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth',
        });

        navItem.classList.remove('active');
      }
    });
  });

  const scrollToFooterBtn = document.getElementById('scroll-to-footer');
  const footerSection = document.getElementById('footer');

  if (scrollToFooterBtn && footerSection) {
    scrollToFooterBtn.addEventListener('click', function () {
      window.scrollTo({
        top: footerSection.offsetTop,
        behavior: 'smooth',
      });
    });
  }
});
