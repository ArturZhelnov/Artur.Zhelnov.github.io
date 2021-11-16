$(function(){
	
	/*INFO SLIDER*/
	$('.info_slider').slick({
		autoplay: true,
		autoSpeed: 5000,
		fade: true,
		prevArrow: '<svg class="slick_left" width="50" height="30" fill="#303030" version="1.1" id="Layer_1a" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 476.213 476.213" style="enable-background:new 0 0 476.213 476.213;" xml:space="preserve"><polygon points="476.213,223.107 76.212,223.107 76.212,161.893 0,238.108 76.212,314.32 76.212,253.107 476.213,253.107"/></svg>',
		nextArrow: '<svg class="slick_right" width="50" height="30" fill="#303030" version="1.1" id="Layer_1b" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 476.213 476.213" style="enable-background:new 0 0 476.213 476.213;" xml:space="preserve"><polygon points="476.213,238.105 400,161.893 400,223.106 0,223.106 0,253.106 400,253.106 400,314.32"/></svg>',
	});
	
	/* INFO TABS */
	$('.info_tabs_item').on('click', function(e){
		e.preventDefault();
		$('.info_tabs_item').removeClass('active');
		$(this).addClass('active');
		
		$('.info_tabs_content').removeClass('active');
		$($(this).attr('href')).addClass('active');
		
		$('.info_slider').slick('unslick');
		$($(this).attr('href')).find('.info_slider').slick({fade: true, autoplay: true, prevArrow: '<svg class="slick_left" width="50" height="30" fill="#303030" version="1.1" id="Layer_1a" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 476.213 476.213" style="enable-background:new 0 0 476.213 476.213;" xml:space="preserve"><polygon points="476.213,223.107 76.212,223.107 76.212,161.893 0,238.108 76.212,314.32 76.212,253.107 476.213,253.107"/></svg>', nextArrow: '<svg class="slick_right" width="50" height="30" fill="#303030" version="1.1" id="Layer_1b" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 476.213 476.213" style="enable-background:new 0 0 476.213 476.213;" xml:space="preserve"><polygon points="476.213,238.105 400,161.893 400,223.106 0,223.106 0,253.106 400,253.106 400,314.32"/></svg>'});
	});
	
	/* CLIENTS SLIDER*/
	$('.clients_slider').slick({
		autoplay: true,
		autoSpeed: 10000,
		fade: true,
		prevArrow: '<svg class="slick_left" width="50" height="30" fill="#303030" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 476.213 476.213" style="enable-background:new 0 0 476.213 476.213;" xml:space="preserve"><polygon points="476.213,223.107 76.212,223.107 76.212,161.893 0,238.108 76.212,314.32 76.212,253.107 476.213,253.107"/></svg>',
		nextArrow: '<svg class="slick_right" width="50" height="30" fill="#303030" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 476.213 476.213" style="enable-background:new 0 0 476.213 476.213;" xml:space="preserve"><polygon points="476.213,238.105 400,161.893 400,223.106 0,223.106 0,253.106 400,253.106 400,314.32"/></svg>',
	});
	
	/* AOS init */
	AOS.init({
		easing: 'ease-out-back',
		duration: 1000,
		delay: 0,
		anchorPlacement: 'top-bottom',
	});
	
	//E-mail Ajax Send
	$(".footer_form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});
	
});