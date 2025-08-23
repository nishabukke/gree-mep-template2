

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

// mobile menu
            $( document ).ready(function() {

            $( ".cross" ).hide();
            $( "#menu" ).hide();
            $( ".canva_expander" ).click(function() {
            $( "#menu" ).slideToggle( "slow", function() {
            $( ".canva_expander" ).hide();
            $( ".cross" ).show();
            });
            });

            $( ".cross" ).click(function() {
            $( "#menu" ).slideToggle( "slow", function() {
            $( ".cross" ).hide();
            $( ".canva_expander" ).show();
            });
            });

            });

            // Close out sub menu
            $('.sub__close').click(function(e) {
            e.preventDefault();

            $(this).parent().parent().removeClass('is-active');
            });

            // Trigger sub menu
            $('#menu ul .nav__submenu').click(function(e) {
        e.preventDefault();

        $(this).siblings().addClass('is-active');
        });

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    breakpoints: {
      450: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });

  var swiper = new Swiper(".testim-swiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    breakpoints: {
      450: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1,
      },
      1024: {
        slidesPerView: 1,
      },
    },
  });



document.querySelectorAll('.swiper-slide img').forEach(image => {
    image.onclick = () => {
      document.querySelector('.popup-image').style.display = 'block';
      document.querySelector('.popup-image img').src = image.getAttribute('src');
    }
});

document.querySelector('.popup-image span').onclick = () =>{
  document.querySelector('.popup-image').style.display = 'none';
}

var counted = 0;
$(window).scroll(function() {

  var count = $('#counter');
  console.log(count);
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
            $this.text(Math.floor(this.countNum) + ` +`);
          },
          complete: function() {
            $this.text(this.countNum + ` +`);
            //alert('finished');
          }

        });
    });
    counted = 1;
  }
}

});

// portfolio tabs desktop

function activeTab(evt, id) {
           
  // Get all elements with class="tablinks" and remove the class "active"
   let tabactive = document.getElementsByClassName("TabButtonSelected");
   tabactive[0].className = tabactive[0].className.replace(" TabButtonSelected", "");

   document.getElementById(id).style.display = "block";
   evt.currentTarget.className += " TabButtonSelected";

   displaySection(evt,id)
}

function displaySection(evt, id) {

   let tabactive = document.getElementsByClassName("tab-section");
   tabactive[0].className = tabactive[0].className.replace(" d-chart-show", "d-chart-n");
   // add below line of codes
   [...document.querySelectorAll('div.tab-section')].forEach(item => item.style.display='none')
   document.getElementById("Section" + id).style.display = "block";
   evt.currentTarget.className += " d-chart-show";

}
