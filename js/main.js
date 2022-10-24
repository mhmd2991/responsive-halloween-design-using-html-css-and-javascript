let btnMenu = document.querySelector('.toggle-btn'),
    menu = document.querySelector('.menu'),
    sections=document.querySelectorAll('section'),
    navLi = document.querySelectorAll('.navbar-left li a'),
    toTopBtn = document.querySelector('#to-top');

btnMenu.addEventListener('click', () => {
    menu.classList.toggle('active');
});

window.onscroll = function () {
    if (this.scrollY >= 300) {
        toTopBtn.classList.add('show');
    } else {
        toTopBtn.classList.remove('show');
    }
}

toTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
});

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });
    navLi.forEach(li => {
        li.classList.remove("active");
        if (li.dataset.link == current) {
            li.classList.add('active');
        }
    });
});