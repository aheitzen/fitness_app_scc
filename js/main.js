// VIDEO ROTATOR CODE

// var currentVideo = 0
// var videos = [
// 		{
// 		src: 'video/Workout.mp4',
// 		type: 'video/mp4'
// 	}
// ]

// var videoElement = $('video')
// var sourceElement = $('video source')

// videoElement.on('ended',function(){
// 	sourceElement.attr('src', videos[currentVideo].src)
// 	sourceElement.attr('type', videos[currentVideo].type)
// 	videoElement.get(0).load();
// 	videoElement[0].play();
	
// 	if (currentVideo >= videos.length - 1) {
// 		currentVideo = 0;
// 	} else {
// 		currentVideo++;
// 	}
// });

var myArray = ['Intellifit keeps me smart and strong. <span><img class="test-img" src="images/two.png"> - Kim Dale</span>','I love the app reminders on my phone, really keeps me on track.<span><img class="test-img" src="images/three.png"> - Larry Smith</span>' ];
var currentIndex = 0;
var selector = $('#selector');
var timer = setInterval(function(){
		selector.animate({left: '-100%'}, 700, function () { 
	    selector.hide();
	    selector.html(myArray[currentIndex]);
	    selector.css({left: '100%'});
	    selector.show();
	    selector.animate({left: '0'}, 700);
	});
	currentIndex++;
	if (currentIndex == myArray.length) {
		currentIndex = 0;
	}
 }, 5000);

var a = $("nav").offset().top;
$(document).scroll(function(){
    if($(this).scrollTop() > a)
    {   
       $('nav').css({"background": "black"});
    } else {
       $('nav').css({"background": "transparent"});
    }
});


$(document).ready(function (){
	$("#about").click(function (){
    	$('html, body').animate({
        	scrollTop: $("#mission-statement").offset().top
        }, 1000);
  	});
  	$("#movie").click(function (){
    	$('html, body').animate({
        	scrollTop: $("#movie-section").offset().top
        }, 1000);
  	});
    $("#contact").click(function (){
      $('html, body').animate({
          scrollTop: $("#social-nav").offset().top
        }, 1000);
    });
    $("#pricing").click(function (){
      $('html, body').animate({
          scrollTop: $("#pricing-section").offset().top
        }, 1000);
    });
    $("#home-link").click(function (){
      $('html, body').animate({
          scrollTop: $("#top-nav").offset().top
        }, 1000);
    });
});