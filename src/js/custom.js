
$(document).ready(function(){

    //SLICK SLIDER 
    $('.slider').slick({
        infinite: true,
        slideToShow:1,
        slideToScroll:1
    });
    

/*
================================
MAGNIFIC POPUP SECTION SRART
================================
*/
    $('.video').magnificPopup({
        type:'iframe',
        iframe: {
            patterns: {
              youtube: {
                index: 'youtube.com/',
                id: 'v=', 
                src: 'http://www.youtube.com/embed/%id%?autoplay=1'
              },
            },
            srcAction: 'iframe_src',
         }
    });

    //* portfolio 
    $('.img-link').magnificPopup({type:'image'});
/*
================================
MAGNIFIC POPUP SECTION ENDS
================================
*/


    //skills bars customize script

    $('.skillbar').skillBars({
      from: 0,       
      to: false,      
      speed: 1000,   
      interval: 100,    
      decimals: 0,      
      onUpdate: null,   
      onComplete: null,   
      classes:{
        skillBarBar : '.skillbar-bar',
        skillBarPercent : '.skill-bar-percent',
      }
    });


/*
================================
AOS ANIMATION SECTION SRART
================================
*/

AOS.init({
  duration:1000
});

/*
================================
AOS ANIMATION SECTION ends
================================
*/


$('.counter-up').countUp({
  'time': 3000,
  'delay': 10
});

var mixer = mixitup('.filter-bar');


//*============Team carousel ============
$('.owl').owlCarousel();

$(".owl-carousel-team").owlCarousel({
   loop:true,
   margin:30,
   nav:true,
   navText:['<i class="fa fa-angle-double-left"></i>','<i class="fa fa-angle-double-right"></i>'],
   center:false,
   autoplay:true,
   dotsEach:true,
   responsive:{
     0:{
       items:1,
       nav:true,
     },

     600:{
      items:2,
      nav:true,
    },

    1000:{
      items:4,
      nav:true,
    }
   }
});

$('.fa-bars').click(function(){
  $('.navbar').addClass("bg",1000);
});

$(".banner-theme").owlCarousel({
  loop:true,
  margin:0,
items:1,
autoplay:true,
navText:['<i class="fa fa-angle-double-right"></i>','<i class="fa fa-angle-double-left"></i>'],
nav:true,
dots:false,
autoplayHoverPause: false,
autoplaySpeed: 100,
animateOut: 'fadeOut',
animateIn: 'fadeIn',
  responsive:{
      0:{
          items:1,
          nav:true,
      },
      767:{
          items:1,
          nav:true,
      },
      992:{
          items:1
      }
  }
});


//*---- Tesimonial carosel 
$('.owl').owlCarousel();

$(".owl-carousel-testimonial").owlCarousel({
   loop:true,
   margin:30,
   navText:['<i class="fa fa-angle-double-left"></i>','<i class="fa fa-angle-double-right"></i>'],
   nav:true,
   center:false,
   autoplay:true,
   dotsEach:true,
   responsive:{
     0:{
       items:1
     },

     600:{
      items:1
    },

    1000:{
      items:1
    }
   }
});


})(jQuery);
