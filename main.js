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

const fadeEls = document.querySelectorAll('.visual .fade-in');

fadeEls.forEach(function(fadeEl, index){
    gsap.to(fadeEl, 1, {
        opacity : 1,
        delay : 0.7 * (index + 1)
    })
});

new Swiper ('.notice .swiper', {
    direction: 'vertical',
    autoplay: true,
    loop: true
});

const promotionBTN = document.querySelector('.notice .inner__right .material-icons');
const promotionEl = document.querySelector('.promotion');

promotionBTN.addEventListener('click', function(){
    if(promotionEl.classList.contains('hide')){
        promotionEl.classList.remove('hide');
    }
    else{
        promotionEl.classList.add('hide');
    }
});

new Swiper ('.promotion .swiper', {
    loop : true,
    autoplay : true,
    slidesPerView : 3,
    spaceBetween : 10,
    centeredSlides: true,
    pagination : {
        el : '.promotion .swiper-pagination',
        clickable : true
    },
    navigation : {
        prevEl : '.promotion .swiper-button-prev',
        nextEl : '.promotion .swiper-button-next',
    }
});

gsap.to('.floating1', 2 , {
    delay : 1,
    y : 25,
    repeat : -1,
    yoyo : 1,
    ease : 'expo.out',
    rotation : 44
});

gsap.to('.floating2', 2 , {
    delay : 1,
    x : -35,
    repeat : -1,
    yoyo : 1,
    ease : 'bounce.out',
    rotation : 33
});