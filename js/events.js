$(document).ready(function(){

	$('.filter-item').click(function(){
		var el = $(this).data("filter");

		if ( !$(this).hasClass("active") ) {
			$('.filter-item').removeClass("active");
			$(this).addClass("active");
			$('.events-list').animate({'opacity': 0},300);
			setTimeout(function(){
				$('.events-list li').removeClass("active");
				$('.events-list li').each(function(){
					if ( $(this).hasClass(el) ) {
						$(this).addClass("active");
					}
				});
				$('.events-list').animate({'opacity': 1},300);
			},300);
		}
	});

});