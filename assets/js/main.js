 var scene = document.getElementById('scene');
 var parallax = new Parallax(scene);
 $('#header1').hide();
 $('#header2').hide();
 jQuery(document).ready(function($){

 	$('#header1').fadeIn();
 	$(window).scroll(function() {
 		var scroll = $(window).scrollTop();
 		var windowHeight = $(window).height();
 		$("#header1").css({
 			transform: 'translate3d(0%, -'+(scroll/150)+'%, 0) scale('+(150 + scroll/5)/150+')',
		//Blur suggestion from @janwagner: https://codepen.io/janwagner/ in comments
		"-webkit-filter": "blur(" + (scroll/200) + "px)",
		filter: "blur(" + (scroll/200) + "px)",
		opacity: (120/scroll)
	});
 		if(scroll > (windowHeight - (windowHeight/2) + 200)) {
 			$('#header2').fadeIn();
 		} else {
 			$('#header2').fadeOut();
 		}
 	});
 });
