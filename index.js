$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
      items: 1,
      margin: 50,
      autoWidth: true,
      center: true,
      responsive : {
        991 : {
          items: 1,
          autoWidth: false,
          center: false,
        }
      },
      nav: true,
      navText: [
        '<span aria-label="' + 'Previous' + '"><img src="img/arrow-left.png" alt="arrow-left"></span>',
        '<span aria-label="' + 'Next' + '"><img src="img/arrow-right.png" alt="arrow-right"></span>'
      ],
    });
  });
$(".burger-menu ").on("click",".bar",function(){
  
    $(".menu").slideToggle();
    $(".bar").toggleClass('change');
    $(".menu").toggleClass('header__menu_burger');
    $(".menu").toggleClass('header__menu');
    $("header").toggleClass('header_sticky');
  
   });
   function showSaveMsg() {
    $(".save-msg").fadeIn(400).delay(2000).fadeOut(400);
   };
   $(".intro__btn").on('click', showSaveMsg);
   $(".form__btn").on('click', showSaveMsg);