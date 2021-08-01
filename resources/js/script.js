$(document).ready(function(){
	$(".about-section").waypoint(function(direction){
		if (direction == "down") {
			$("nav").addClass("sticky-nav");
		}
		else{
			$("nav").removeClass("sticky-nav");
		}
	})
});

$(document).ready(function(){
	$(".about-section").waypoint(function(direction){
		$(".js-about-box").addClass("animate__animated animate__fadeIn");
	},{
		offset:'50%'
	});
});
$(document).ready(function(){
	$(".service-section").waypoint(function(direction){
		$(".js-service-box").addClass("animate__animated animate__zoomIn");
	},{
		offset:'50%'
	});
});
$(document).ready(function(){
	$(".packages-section").waypoint(function(direction){
		$(".js-package-box").addClass("animate__animated animate__pulse");
	});
});
