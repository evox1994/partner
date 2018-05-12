$(document).ready(function(){

	$('.reviews-slider').slick({
		infinite: true,
		slidesToShow: 2,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
				}
			}
		]
	});
	
});