const navMenu = document.getElementById('nav-menu'),
  navClose = document.getElementById('nav-close'),
  navToggle = document.getElementById('nav-toggle'),
  header = document.getElementById('header')

function toggleMenu() {
  navMenu.classList.toggle('show-nav')
}

navClose.addEventListener('click', toggleMenu)
navToggle.addEventListener('click', toggleMenu)

// Nav Blur
function navbarBlur() {
  scrollY > 0
    ? header.classList.add('blur-header')
    : header.classList.remove('blur-header')
}

window.addEventListener('scroll', navbarBlur)
