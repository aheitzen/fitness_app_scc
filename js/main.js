var currentVideo = 0
var videos = [
	// {
	// 	src: 'video/pullUp.mp4',
	// 	type: 'video/mp4'
	// },
		{
		src: 'video/Workout.mp4',
		type: 'video/mp4'
	}
]

var videoElement = $('video')
var sourceElement = $('video source')

videoElement.on('ended',function(){
	sourceElement.attr('src', videos[currentVideo].src)
	sourceElement.attr('type', videos[currentVideo].type)
	videoElement.get(0).load();
	videoElement[0].play();
	
	if (currentVideo >= videos.length - 1) {
		currentVideo = 0;
	} else {
		currentVideo++;
	}
});

var myArray = ['Intellifit keeps me smart and strong. <span><br> - Jerry Dale</span>','I love the app reminders on my phone, really keeps me on track.<span><br> - Kim Smith</span>' ];
var currentIndex = 0;
var selector = $('#selector');
var timer = setInterval(function(){

	
	selector.animate({left: '-100%'}, 500, function () { 
	    selector.hide();
	    selector.html(myArray[currentIndex]);
	    selector.css({left: '100%'});
	    selector.show();
	    selector.animate({left: '0'}, 500);
	});
	currentIndex++;
	if (currentIndex == myArray.length) {
		currentIndex = 0;
	}
 }, 5000);