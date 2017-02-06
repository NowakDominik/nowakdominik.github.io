$(".menu a").click(function() {
	var target = $(this).attr('target');
	var mh=$('.menu').height();
	$('body').animate({scrollTop: $("#" + target).offset().top-mh}, 700);
});

						 
function scrollSpy(){
	var mh=$('.menu').height();
	$('#landing').css("padding-top",mh+"px");
	
	$(".menu a").removeClass("active");

	var divs = [];
	$(".menu a").each(function(i) {
		var appo = $(this).attr("target");
		divs[i] = $("#" + appo).offset().top;
	});


	var pos = $(window).scrollTop();
	var off = ($(window).height()) / 2;

	pos = pos + off;

	var index = 0;

	for (index = 0; index < divs.length; index++) {
		if (pos < divs[index]) {
			break;
		}
	}
	$(".menu li:nth-child(" + index + ") a").addClass("active");
};

$(window).scroll(function() {
	scrollSpy();
});
$(document).ready(function() {
	scrollSpy();
});


$('#expander').click(function(){
	$("#suzy").toggleClass('aug');
});