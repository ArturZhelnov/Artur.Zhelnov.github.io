$(function() {
    // MENU
    $('.navbar-collapse a').on('click', function(){
      $(".navbar-collapse").collapse('hide');
	  $('.menu_btn').toggleClass('active');
    });
	
	$('.menu_btn').on('click', function(){
		$('.menu_btn').toggleClass('active');
		$('.navbar-collapse').toggleClass('show');
	});
	
	
	var wSize = $(window).width();
	$(window).resize(function() {
		if(wSize >= 992) {
			$('.menu_btn').removeClass('active');
			$('.navbar-collapse').removeClass('show');
		} else {
			$('.menu_btn').addClass('active');
			$('.navbar-collapse').addClass('show');
		}
	});
	
});