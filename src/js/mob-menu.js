const burger = document.querySelector('.burger');
const closeButton = document.querySelector('.close');
const mobileBox = document.querySelector('.mobile-box');
const body = document.body;

burger.addEventListener('click', function () {
  document.documentElement.classList.add('menu-open');
  mobileBox.style.left = '0';
  body.classList.add('no-scroll');
});

closeButton.addEventListener('click', function () {
  document.documentElement.classList.remove('menu-open');
  mobileBox.style.left = '-100%';
  body.classList.remove('no-scroll');
});

document.querySelectorAll('.mob-nav a').forEach(item => {
  item.addEventListener('click', function () {
    document.documentElement.classList.remove('menu-open');
    mobileBox.style.left = '-100%';
    body.classList.remove('no-scroll');

    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth',
      });
    }
  });
});

document.getElementById('mobile-order').addEventListener('click', function () {
  document.documentElement.classList.remove('menu-open');
  mobileBox.style.left = '-100%';
  body.classList.remove('no-scroll');

  const footerSection = document.getElementById('footer');
  if (footerSection) {
    window.scrollTo({
      top: footerSection.offsetTop,
      behavior: 'smooth',
    });
  }
});
