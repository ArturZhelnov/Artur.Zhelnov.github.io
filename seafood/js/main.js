$(function() {
	
	$('.menu_btn').on('click', function(){
		$('.menu_btn').toggleClass('active');
		$('.menu_list').toggleClass('active');
	});
	
	$('.menu_link').on('click', function(){
		$('.menu_list').removeClass('active');
		$('.menu_btn').removeClass('active');
    });
	
	// ON RESIZE
	
	$(window).on('resize', function() {
		$('.menu_btn').removeClass('active');
		$('.menu_list').removeClass('active');
	});
	
	// SLIDER INIT
	
	$('.rolling_text_box').slick({
		autoplay: true,
		autoSpeed: 5000,
		speed: 3000,
		fade: true,
		arrows: false,
		dots: false,
	});
	
	$('.header_slider').slick({
		autoplay: true,
		speed: 2000,
		fade: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		prevArrow: '<button type="button" class="slick-prev"><img src="images/arrows/up.svg" alt="previous"/></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="images/arrows/down.svg" alt="next"/></button>',
		
	});
	
	// PRODUCT SLIDER 
	
	$('.product_content_wrapper').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.product_name_wrapper',
	});
	
	$('.product_name_wrapper').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.product_content_wrapper',
		centerMode: true,
		focusOnSelect: true,
		vertical: true,
		prevArrow: '<button type="button" class="product-prev"><img src="images/arrows/black/up.svg" alt="previous"/></button>',
		nextArrow: '<button type="button" class="product-next"><img src="images/arrows/black/down.svg" alt="next"/></button>',
		
	});
	
	// SCROLL TO TOP a[href='#top'] -> .scroll-button; slow -> 5000
	
	$(".scroll_btn_footer").click(function() {
		$("html, body").animate({ scrollTop: 0 }, "5000");
		return false;
	});
	
	// AOS ANIMATION
	
	AOS.init({
		duration: 800,
		anchorPlacement: 'top-bottom',
    });
	
});