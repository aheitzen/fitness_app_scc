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