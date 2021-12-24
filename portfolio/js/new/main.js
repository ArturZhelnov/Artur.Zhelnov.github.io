$(function(){
	
	/* MAGNIFIC POPUP */
	
	$('.image-popup-vertical-fit').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		mainClass: 'mfp-img-mobile',
		image: {
			verticalFit: true
		}
		
	});
	
	
	$('.image-popup-fit-width').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		image: {
			verticalFit: false
		}
	});

	$('.image-popup-no-margins').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		closeBtnInside: false,
		fixedContentPos: true,
		mainClass: 'mfp-no-margins mfp-with-zoom',/* class to remove default margin from left and right side*/
		image: {
			verticalFit: true
		},
		zoom: {
			enabled: true,
			duration: 300/* don't foget to change the duration also in CSS*/
		}
	});
	/* MAGNIFIC POPUP ENDS */
	
	/*VIEW ADDITIONAL WORKS*/
	var viewWorks = function() {
		$('.js-view').click(function(evt){
			
			var $this = $(this);
			$this.toggleClass('active');
			setTimeout(function(){
				$('.js-more-works').slideToggle(400);
				if ( $this.hasClass('active') ) {
					$this.find('.js-view-text').text('Show Less');
					
					$this.removeClass('link-primary').addClass('link-warning');
					
					$this.find('.fa-plus').removeClass('link-primary').addClass('link-warning');
				} else {
					$this.find('.js-view-text').text('Show More');
					$this.removeClass('link-warning').addClass('link-primary');
					
					$this.find('.fa-plus').removeClass('link-warning').addClass('link-primary');
				}
			}, 500);

			evt.preventDefault();

		})
	};
	
	viewWorks();
	
	/*$(function(){
		viewWorks();
	});*/
	
	/* BACK TOP bottom: "20px" to bottom: "-100px" */
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 1) {
            $('.to_top').css({
                right: "20px"
            }), 1200;
        } else {
            $('.to_top').css({
                right: "-100px"
            }), 1200;
        }
    });

});