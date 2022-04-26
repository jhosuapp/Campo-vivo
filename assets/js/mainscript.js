const getButtonHamburger = document.querySelector('#hamburger');
const getNavOfHeader = document.querySelector('.header__nav');


getButtonHamburger.addEventListener('click', ()=>{
    getButtonHamburger.classList.toggle('open');
    getNavOfHeader.classList.toggle('active');
});