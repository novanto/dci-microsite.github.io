function DCI(){

	
	$('.slider-analysis').slick({
	  dots: false,
	  infinite: true,
	  speed: 300,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: true,
	  responsive: [
	    {
	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1,
	        infinite: true,
	        dots: false
	      }
	    },
	    {
	      breakpoint: 600,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
	  ]
	});

	$('.slider-mobile-analysis').slick({
	  dots: false,
	  infinite: true,
	  speed: 300,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: true,
	  responsive: [
	    {
	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1,
	        infinite: true,
	        dots: false
	      }
	    },
	    {
	      breakpoint: 600,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
	  ]
	});

	$('.slider-perfomance').slick({
	  dots: true,
	  infinite: true,
	  speed: 300,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: false,
	  responsive: [
	    {
	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1,
	        infinite: true,
	        dots: false
	      }
	    },
	    {
	      breakpoint: 600,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
	  ]
	});

  var scroll_pos = 0;
  $(document).scroll(function() { 
      scroll_pos = $(this).scrollTop();
      if(scroll_pos > 750) {
          $(".fixed-header").addClass('blue-scroll');
      } else {
          $(".fixed-header").removeClass('blue-scroll');
      }
  });

  var vidClip = document.getElementById("comprovideo"); 

  $('#show-video').click(function(e){
  	e.preventDefault();
  	$('.video-banner').fadeIn(500);
  });

  $('.video-banner').click(function(e){
  	e.preventDefault();
  	$('.video-banner').fadeOut(500);
  	comprovideo.pause();
  });

  $('#close-vid').click(function(e){
  	e.preventDefault();
  	$('.video-banner').fadeOut(500);
  	comprovideo.pause();
  });

  $(window).load(function(){
  	$('.video-banner').fadeIn(500);
  });

}

function goToByScroll(id){
  // Reove "link" from the ID
id = id.replace("link", "");
  // Scroll
$('html,body').animate({
    scrollTop: $("#"+id).offset().top -200},
    'slow');
}

$(".fixed-header .inner-fixed-header ul > li > a").on('click' , function(e) { 
      // Prevent a page reload when a link is pressed
    e.preventDefault(); 
      // Call the scroll function
    goToByScroll($(this).attr("id"));           
});
$("#collapsibleNavbar ul > li > a").on('click' , function(e) { 
      // Prevent a page reload when a link is pressed
    e.preventDefault(); 
      // Call the scroll function
    goToByScroll($(this).attr("id"));           
});