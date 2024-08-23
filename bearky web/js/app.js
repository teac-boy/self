var menuBtn = document.querySelector('#menu');
var navUl = document.querySelector('#nav-ul');
var menuBackOverlay =document.querySelector('.menu-back-overlay');
var navBgLayer=document.querySelector('.nav-bg-layar');

menuBtn.addEventListener(
    'click',
    function (e) {
        document.body.classList.add('open-menu')
    }
);
menuBackOverlay.addEventListener(
    'click',
    function (e){
        document.body.classList.remove('open-menu');
    }
);
document.addEventListener(
    'scroll',
    function (e){
        if(window.scrollY >= 55){
            document.body.classList.add('stick-menu');
        } else{
            document.body.classList.remove('stick-menu');
        }
    }
);

$('.slider-content').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    dots: true,
    autoplay:true,
  autoplaySpeed: 3000,
    responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    
  ]
  });