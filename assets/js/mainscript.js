const getButtonHamburger = document.querySelector('#hamburger');

getButtonHamburger.addEventListener('click', ()=>{
    getButtonHamburger.classList.toggle('open');
});