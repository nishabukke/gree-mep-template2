

$(document).ready(function(){ 
  $(window).scroll(function(){ 
      if ($(this).scrollTop() > 100) { 
          $('.scroll-top').addClass('open'); 
      } else {
          $('.scroll-top').removeClass('open');  
      } 
  }); 
  $('.scroll-top').click(function(){ 
      $("html, body").animate({ scrollTop: 0 }, 600); 
      return false; 
  }); 
});



let navbar = document.querySelector('.header .navbar');
let contactInfo = document.querySelector('.contact-info');


document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    contactInfo.classList.remove('active');
};

document.querySelector('#info-btn').onclick = () =>{
    contactInfo.classList.add('active');
};

document.querySelector('#close-contact-info').onclick = () =>{
    contactInfo.classList.remove('active');
};

window.onscroll = () =>{
    navbar.classList.remove('active');
    contactInfo.classList.remove('active');
};


var counted = 0;
$(window).scroll(function() {

  var count = $('#counter');

  if(count.length){
  var oTop = count.offset().top - window.innerHeight;
  if (counted == 0 && $(window).scrollTop() > oTop) {
    $('.counter').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },

        {

          duration: 2000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
    });
    counted = 1;
  }
}

});


var swiper = new Swiper(".home-slider", {
    loop: true,
    grabCursor: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var swiper = new Swiper(".reviews-slider", {
    loop: true,
    grabCursor: true,
    spaceBetween: 20,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    breakpoints: {
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        991: {
          slidesPerView: 3,
        },
      },
  });

  var swiper = new Swiper(".logo-slider", {
    loop: true,
    grabCursor: true,
    spaceBetween: 20,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    breakpoints: {
        450: {
          slidesPerView: 2,
        },
        640: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 4,
        },
        1000: {
          slidesPerView: 5,
        },
      },
  });


document.querySelectorAll('.image-container img').forEach(image => {
    image.onclick = () => {
      document.querySelector('.popup-image').style.display = 'block';
      document.querySelector('.popup-image img').src = image.getAttribute('src');
    }
});

document.querySelector('.popup-image span').onclick = () =>{
  document.querySelector('.popup-image').style.display = 'none';
}
//*
$(".navbar").on('click','li a',function(){
  // remove classname 'active' from all li who already has classname 'active'
  $(".navbar a.active").removeClass("active"); 
  // adding classname 'active' to current click li 
  $(this).addClass("active"); 
});
//*