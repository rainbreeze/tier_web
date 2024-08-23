const searchEl = document.querySelector('.search');
const inputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function() {
    inputEl.focus();
}); 

inputEl.addEventListener('focus', function(){
    searchEl.classList.add('focused');
    inputEl.setAttribute('placeholder', '통합 검색');
});

inputEl.addEventListener('blur', function(){
    searchEl.classList.remove('focused');
    inputEl.setAttribute('placeholder', '');
});

const bannersEl = document.querySelector('.banners');

window.addEventListener('scroll', function(){
    if(scrollY > 500){
        gsap.to(bannersEl, 1, {
            opacity: 0
        });
    }
    if(scrollY <= 500){
        gsap.to(bannersEl, 1, {
            opacity: 1
        });
    }
});