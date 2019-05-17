 var scene = document.getElementById('scene');
 var parallax = new Parallax(scene);

 $.fn.isInViewport = function() {
 	var elementTop = $(this).offset().top;
 	var elementBottom = elementTop + $(this).outerHeight();

 	var viewportTop = $(window).scrollTop();
 	var viewportBottom = viewportTop + $(window).height();

 	return elementBottom > viewportTop && elementTop < viewportBottom -300;
 };

 $('#header1').hide();
 $('#header2').hide();
 jQuery(document).ready(function($){
 	var parallaxSettings = {
        initialOpacity: 1, //from 0 to 1, e.g. 0.34 is a valid value. 0 = transparent, 1 = Opaque
        opacitySpeed: 0.1, //values from 0.01 to 1 -> 0.01: slowly appears on screen; 1: appears as soon as the user scrolls 1px
        pageLoader: true
      };

      parallaxImgScroll(parallaxSettings);
 	$('#header1').fadeIn();
 	$(window).scroll(function() {
 		var scroll = $(window).scrollTop();
 		var windowHeight = $(window).height();
 		$("#header1").css({
 			transform: 'translate3d(0%, -'+(scroll/300)+'%, 0) scale('+(300 + scroll/5)/300+')',
		//Blur suggestion from @janwagner: https://codepen.io/janwagner/ in comments
		"-webkit-filter": "blur(" + (scroll/200) + "px)",
		filter: "blur(" + (scroll/200) + "px)",
		opacity: (150/scroll)
	});
 		if(scroll > (windowHeight - (windowHeight/2) + 200)) {
 			$('#header2').fadeIn();
 			$('#header1').fadeOut();

 		} else {
 			$('#header2').fadeOut();
 			$('#header1').fadeIn();
 		}
 	});

 	// For animations
 	$(window).on('resize scroll', function() {
 		if ($('.pullquote').isInViewport()) {
 			$('.pullquote').addClass('visible');
 		} else {
        // do something else
    }
    if ($('#video1').isInViewport()) {
    	$("audio#audio1")[0].play();

    	$('#video1').addClass('visible');
    } else {
    	$("audio#audio1")[0].pause();
    }
});
 });
