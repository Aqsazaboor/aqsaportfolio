 
particlesJS('particles-js',
  
{
  "particles": {
    "number": {
      "value": 80,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 5,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  } 
}

);


//////////////// Banner JS//////////////////
var typed = new Typed(".auto-type", {
    strings: ["Web Developer", "Have a great experience in Wordpress"],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true,
    fadeOut: true,
});


//////////////// Smooth Scroll JS//////////////////
"use strict";
jQuery(function($){
    smoothScroll.init({
        speed:900,
        easing:'easeInOutQuad',
        updateURL:false,
        offset:0
    });
});





$(document).ready(function(){
  $(".portfolio").owlCarousel({
      autoplay:true,
      autoplayHoverPause:true,
      loop: true,
      margin:30,
      autoplaySpeed:1000,
      items:3,
      responsiveClass:true,
  });


  $(".testimonial").owlCarousel({
      loop: true,
      autoplayHoverPause:true,
      autoplaySpeed:1000,
      autoplay:true,
      items:1,
      fluidSpeed:2000,
      animateOut: 'slideOutDown',
      animateIn: 'flipInX',
});


$('.meter div').each(function () {
      $(this).animate({
          width: this.title,
      }, {
          duration: 4000,
          step: function (current) {
            $(this).children('h4').html(parseInt(current, 10) + '%')
              $('.meter div').css("overflow","visible");
          }
          
      });
});

});


