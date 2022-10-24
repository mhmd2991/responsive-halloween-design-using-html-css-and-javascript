let btnMenu = document.querySelector('.toggle-btn'),
    menu = document.querySelector('.menu');

btnMenu.addEventListener('click', () => {
    menu.classList.toggle('active');
});