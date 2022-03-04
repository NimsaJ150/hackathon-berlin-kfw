//navbar mobile devices function
const menu = document.querySelector('#mobile-menu');
const menuLink = document.querySelector('.nav-menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLink.classList.toggle('active');
})
