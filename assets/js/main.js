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
 		if ($('#pq1').isInViewport()) {
 			$('#pq1').addClass('visible');
 		} else {
        // do something else
    }
    if ($('#pq2').isInViewport()) {
 			$('#pq2').addClass('visible');
 		} 
    if ($('#video1').isInViewport()) {
    	$("audio#audio1")[0].play();

    	$('#video1').addClass('visible');
    } else {
    	$("audio#audio1")[0].pause();
    }
    if($('#junk1').isInViewport()) {
        var scrollTop = $(window).scrollTop();
        var imgPos = scrollTop / 2 + 'px';
        $('#junk1').addClass('butt');
        console.log("SD")
        $('#junk1').css('transform', 'translateY(' + imgPos + ')');

    }



    //Chart
    
});
    var ctx = document.getElementById('debris-years').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['1960', '1970', '1980', '1990', '2000', '2010'],
        datasets: [{
            label: 'Accumulation of All Objects in Orbit',
            data: [0, 1000, 5000, 7000, 9500, 20000],
            backgroundColor: '#e0195e',
            borderColor: '#e0195e'
        }],
    },

    // Configuration options go here
    options: {}
});
 });
