document.documentElement.style.fontSize = innerWidth / 16 + "px";
onresize = function() {
	document.documentElement.style.fontSize = innerWidth / 16 + "px";
}

function error(Message){
	var staTar = jQuery(window);
	var width = jQuery(window).width();
	var html = "<div id = 'flashMessage'  class='noty_w noty_danger'><div class='noty_bar noty_type_error'><div class='noty_message'><span class='noty_text'>"+Message+"</span></div></div></div>";
	$("#message").html(html);
	$("#flashMessage")
		.css({
			'left':width/2-jQuery("#flashMessage").width()/2})
			.fadeIn(800);
	setTimeout("hideTips()",2000);

	hideTips = function(){
		$("#flashMessage").fadeOut(500);
		$("#message").html('');
	};
}
function success(Message){
	var staTar = jQuery(window);
	var width = jQuery(window).width();
	var html = "<div id = 'flashMessage'  class='noty_w noty_suc'><div class='noty_bar noty_type_error'><div class='noty_message'><span class='noty_text'>"+Message+"</span></div></div></div>";
	$("#message").html(html);
	$("#flashMessage")
		.css({
			'left':width/2-jQuery("#flashMessage").width()/2})
			.fadeIn(800);
	setTimeout("hideTips()",2000);

	hideTips = function(){
		$("#flashMessage").fadeOut(500);
		$("#message").html('');
	};
}

function successCen(Message){
	var staTar = jQuery(window);
	var width = jQuery(window).width();
	var html = "<div id = 'flashMessage'  class='noty_w1 noty_suc'><div class='noty_bar noty_type_error'><div class='noty_message'><span class='noty_text'>"+Message+"</span></div></div></div>";
	$("#message").html(html);
	$("#flashMessage")
		.css({
			'left':width/2-jQuery("#flashMessage").width()/2})
			.fadeIn(800);
	setTimeout("hideTips()",2000);

	hideTips = function(){
		$("#flashMessage").fadeOut(500);
		$("#message").html('');
	};
}
