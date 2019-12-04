(function ($) {
  "use strict";

  var review = $('.player_info_item');
  if (review.length) {
    review.owlCarousel({
      items: 1,
      loop: true,
      dots: false,
      autoplay: true,
      margin: 40,
      autoplayHoverPause: true,
      autoplayTimeout:5000,
      nav: true,
      navText: [
        '<img src="img/icon/left.svg" alt="">',
        '<img src="img/icon/right.svg" alt="">'
        
      ],
      responsive:{
        0:{
          margin: 15
        },
        600:{
          margin: 10
        },
        1000:{
          margin: 10
        }
    }
    });
  }
  $('.popup-youtube, .popup-vimeo').magnificPopup({
      // disableOn: 700,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false
  });



  var review = $('.player_info_item');
  if (review.length) {
    review.owlCarousel({
      items: 1,
      loop: true,
      dots: false,
      autoplay: true,
      margin: 40,
      autoplayHoverPause: true,
      autoplayTimeout:5000,
      nav: true,
      navText: [
        '<img src="img/icon/left.svg" alt="">',
        '<img src="img/icon/right.svg" alt="">'
        
      ],
      responsive:{
        0:{
          margin: 15
        },
        600:{
          margin: 10
        },
        1000:{
          margin: 10
        }
    }
    });
  }
  jQuery.fn.liScroll = function(settings) {
	settings = jQuery.extend({
		travelocity: 0.03
		}, settings);		
		return this.each(function(){
				var $strip = jQuery(this);
				$strip.addClass("newsticker")
				var stripHeight = 1;
				$strip.find("li").each(function(i){
					stripHeight += jQuery(this, i).outerHeight(true); // thanks to Michael Haszprunar and Fabien Volpi
				});
				var $mask = $strip.wrap("<div class='mask'></div>");
				var $tickercontainer = $strip.parent().wrap("<div class='tickercontainer'></div>");								
				var containerHeight = $strip.parent().parent().height();	//a.k.a. 'mask' width 	
				$strip.height(stripHeight);			
				var totalTravel = stripHeight;
				var defTiming = totalTravel/settings.travelocity;	// thanks to Scott Waye		
				function scrollnews(spazio, tempo){
				$strip.animate({top: '-='+ spazio}, tempo, "linear", function(){$strip.css("top", containerHeight); scrollnews(totalTravel, defTiming);});
				}
				scrollnews(totalTravel, defTiming);				
				$strip.hover(function(){
				  jQuery(this).stop();
				},
				function(){
				  var offset = jQuery(this).offset();
				  var residualSpace = offset.top + stripHeight;
				  var residualTime = residualSpace/settings.travelocity;
				  scrollnews(residualSpace, residualTime);
				});			
		});	
};

$(function(){
    $("ul#ticker01").liScroll();
});
  // menu fixed js code
  $(window).scroll(function () {
    var window_top = $(window).scrollTop() + 1;
    if (window_top > 50) {
      $('.main_menu').addClass('menu_fixed animated fadeInDown');
    } else {
      $('.main_menu').removeClass('menu_fixed animated fadeInDown');
    }
  });
  if (document.getElementById('default-select')) {
		$('select').niceSelect();
	}

  $('.grid').masonry({
    itemSelector: '.grid-item',
    columnWidth: '.grid-sizer',
    percentPosition: true
  });

  if ($('.img-gal').length > 0) {
		$('.img-gal').magnificPopup({
			type: 'image',
			gallery: {
				enabled: true
			}
		});
	}
  

}(jQuery));