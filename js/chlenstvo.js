$(document).ready(function(){
	$('.button-scroll').click(function(){
		var el = $(this).attr('href');
		var des = $('.b-5-submit').offset().top;

		$('body,html').animate({scrollTop: des}, 800);
		return false;
	});
});