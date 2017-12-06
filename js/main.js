var myArray = ['Intellifit keeps me smart and strong. <span><img class="test-img" src="images/two.jpg" alt="testomonial img"> - Kim Dale</span>','I love the app reminders on my phone, really keeps me on track.<span><img class="test-img" src="images/one.jpg" alt="testomonial img"> - Larry Smith</span>' ];
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
 }, 5600);

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
	$("#home-link").click(function (){
    	$('html, body').animate({
        	scrollTop: $("#top-nav").offset().top
        }, 1000);
  	});
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
          scrollTop: $("#footer").offset().top
        }, 1000);
    });
    $("#pricing").click(function (){
      $('html, body').animate({
          scrollTop: $("#pricing-header").offset().top
        }, 1000);
    });
});