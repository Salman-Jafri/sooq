(function($) {
	

	/*---Owl-carousel----*/	
	// ______________Owl-carousel-icons
	var owl = $('.owl-carousel-icons');
	owl.owlCarousel({
		margin: 25,
		loop: true,
		rewind: true,
		nav: true,
		autoplay: true,
		dots: false,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 2
			},
			1300: {
				items: 3
			}
		}
	})

	// ______________Owl-carousel-col-5
	var owl = $('.owl-carousel-col-5');
	owl.owlCarousel({
		loop: true,
		rewind: true,
		margin: 25,
		animateIn: 'fadeInDowm',
		animateOut: 'fadeOutDown',
		autoplay: false,
		autoplayTimeout: 7000, // set value to change speed
		autoplayHoverPause: true,
		dots: false,
		nav: true,
		autoplay: true,
		responsiveClass: true,
		responsive: {
			0: {
				items: 3,
				slideBy: 3,
				nav: true
			},
			600: {
				items: 5,
				slideBy: 5,
				nav: true
			},
			1300: {
				items: 5,
				slideBy: 5,
				nav: true
			}
		}
	})
	// owl-prev

	// ______________Owl-carousel-col-4
	var owl = $('.owl-carousel-col-4');
	owl.owlCarousel({
		loop: true,
		rewind: true,
		margin: 25,
		animateIn: 'fadeInDowm',
		animateOut: 'fadeOutDown',
		autoplay: false,
		autoplayTimeout: 7000, // set value to change speed
		autoplayHoverPause: true,
		dots: false,
		nav: true,
		autoplay: true,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
				slideBy: 1,
				nav: true
			},
			600: {
				items: 4,
				slideBy: 4,
				nav: true
			},
			1300: {
				items: 4,
				slideBy: 4,
				nav: true
			}
		}
	})

	// ______________Owl-carousel-col-3
	var owl = $('.owl-carousel-col-3');
	owl.owlCarousel({
		loop: true,
		rewind: true,
		margin: 25,
		animateIn: 'fadeInDowm',
		animateOut: 'fadeOutDown',
		autoplay: false,
		autoplayTimeout: 5000, // set value to change speed
		autoplayHoverPause: true,
		dots: false,
		nav: true,
		autoplay: true,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
				slideBy: 1,
				nav: true
			},
			600: {
				items: 3,
				slideBy: 3,
				nav: true
			},
			1300: {
				items: 3,
				slideBy: 3,
				nav: true
			}
		}
	})

	// Mobile
	var owl = $('.owl-carousel-col-mob-4');
	owl.owlCarousel({
		loop: true,
		rewind: true,
		margin: 8,
		animateIn: 'fadeInDowm',
		animateOut: 'fadeOutDown',
		autoplay: false,
		autoplayTimeout: 5000, // set value to change speed
		autoplayHoverPause: true,
		dots: false,
		nav: true,
		autoplay: true,
		responsiveClass: true,
		responsive: {
			0: {
				items: 4,
				slideBy: 4,
				nav: true
			},
			600: {
				items: 4,
				slideBy: 4,
				nav: true
			},
			1300: {
				items: 4,
				slideBy: 4,
				nav: true
			}
		}
	});

	var owl = $('.owl-carousel-col-mob-3');
	owl.owlCarousel({
		loop: true,
		rewind: true,
		margin: 8,
		animateIn: 'fadeInDowm',
		animateOut: 'fadeOutDown',
		autoplay: false,
		autoplayTimeout: 5000, // set value to change speed
		autoplayHoverPause: true,
		dots: false,
		nav: true,
		autoplay: true,
		responsiveClass: true,
		responsive: {
			0: {
				items: 3,
				nav: true,
				slideBy: 3
			},
			600: {
				items: 3,
				nav: true,
				slideBy: 3
			},
			1300: {
				items: 3,
				nav: true,
				slideBy: 3
			}
		}
	});

	var owl = $('.owl-carousel-col-mob-2');
	owl.owlCarousel({
		loop: true,
		rewind: true,
		margin: 10,
		animateIn: 'fadeInDowm',
		animateOut: 'fadeOutDown',
		autoplay: false,
		autoplayTimeout: 5000, // set value to change speed
		autoplayHoverPause: true,
		dots: false,
		nav: true,
		autoplay: true,
		responsiveClass: true,
		responsive: {
			0: {
				items: 2,
				slideBy: 2,
				nav: true
			},
			600: {
				items: 2,
				slideBy: 2,
				nav: true
			},
			1300: {
				items: 2,
				slideBy: 2,
				nav: true
			}
		}
	})
	// Mobile

	// ______________Owl-carousel-icons2
	var owl = $('.owl-carousel-icons2');
	owl.owlCarousel({
		loop: true,
		rewind: true,
		margin: 25,
		animateIn: 'fadeInDowm',
		animateOut: 'fadeOutDown',
		autoplay: false,
		autoplayTimeout: 5000, // set value to change speed
		autoplayHoverPause: true,
		dots: false,
		nav: true,
		autoplay: true,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
				slideBy: 1,
				nav: true
			},
			600: {
				items: 3,
				slideBy: 3,
				nav: true
			},
			1300: {
				items: 4,
				slideBy: 4,
				nav: true
			}
		}
	})
	
	// ______________Owl-carousel-icons3
	var owl = $('.owl-carousel-icons3');
	owl.owlCarousel({
		margin: 25,
		rewind: true,
		loop: true,
		nav: false,
		dots: false,
		autoplay: true,
		responsive: {
			0: {
				items: 1,
				slideBy: 1,
			},
			600: {
				items: 2,
				slideBy: 2,
			},
			1000: {
				items: 2,
				slideBy: 2
			}
		}
	})
	
	// ______________Owl-carousel-icons4
	var owl = $('.owl-carousel-icons4');
	owl.owlCarousel({
		margin: 25,
		rewind: true,
		loop: true,
		nav: false,
		dots: false,
		autoplay: true,
		responsive: {
			0: {
				items: 1,
				slideBy: 1
			},
			600: {
				items: 3,
				slideBy: 3
			},
			1000: {
				items: 6,
				slideBy: 6
			}
		}
	})
	
	// ______________Owl-carousel-icons5
	var owl = $('.owl-carousel-icons5');
	owl.owlCarousel({
		loop: true,
		rewind: true,
		margin: 25,
		animateIn: 'fadeInDowm',
		animateOut: 'fadeOutDown',
		autoplay: false,
		autoplayTimeout: 5000, // set value to change speed
		autoplayHoverPause: true,
		dots: true,
		nav: false,
		autoplay: true,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
				slideBy: 1,
				nav: true
			},
			600: {
				items: 2,
				slideBy: 2,
				nav: true
			},
			1300: {
				items: 4,
				slideBy: 4,
				nav: true
			}
		}
	})
	
	// ______________Owl-carousel-icons6
	var owl = $('.owl-carousel-icons6');
	owl.owlCarousel({
		margin: 25,
		rewind: true,
		loop: true,
		nav: false,
		dots: false,
		autoplay: true,
		responsive: {
			0: {
				items: 1,
				slideBy: 1
			},
			600: {
				items: 2,
				slideBy: 2
			},
			1000: {
				items: 3,
				slideBy: 3
			}
		}
	})
	
	// ______________Slide-owl-carousel
	var owl = $('.slide-owl-carousel');
	owl.owlCarousel({
		margin: 25,
		rewind: true,
		loop: true,
		nav: false,
		autoplay: true,
		dots: false,
		animateOut: 'fadeOut',
		smartSpeed:450,
		responsive: {
			0: {
				items: 1
			}
		}
	})
	
	// ______________Testimonial-owl-carousel2
	var owl = $('.testimonial-owl-carousel2');
	owl.owlCarousel({
		margin: 25,
		rewind: true,
		loop: true,
		nav: false,
		autoplay: true,
		dots: false,
		animateOut: 'fadeOut',
		smartSpeed:450,
		responsive: {
			0: {
				items: 1
			}
		}
	})
	
	// ______________Testimonial-owl-carousel3
	var owl = $('.testimonial-owl-carousel3');
	owl.owlCarousel({
		margin: 25,
		rewind: true,
		loop: true,
		nav: false,
		autoplay: true,
		dots: true,
		responsive: {
			0: {
				items: 1
			}
		}
	})
	
	// ______________Testimonial-owl-carousel4
	var owl = $('.testimonial-owl-carousel4');
	owl.owlCarousel({
		margin: 25,
		rewind: true,
		loop: true,
		nav: false,
		autoplay: true,
		dots: true,
		responsive: {
			0: {
				items: 1
			}
		}
	})
	
	// ______________Testimonial-owl-carousel
	var owl = $('.testimonial-owl-carousel');
	owl.owlCarousel({
		loop: true,
		rewind: true,
		margin: 25,
		autoplay: true,
		animateIn: 'fadeInDowm',
		animateOut: 'fadeOutDown',
		autoplay: false,
		autoplayTimeout: 5000, // set value to change speed
		autoplayHoverPause: true,
		dots: false,
		nav: true,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
				nav: true
			}
		}
	})
	



	$('.owl-prev,.owl-next').on('click', function(e) {
	    $('.owl-carousel-col-5').trigger('stop.owl.autoplay');
	});
	$('.owl-prev,.owl-next').on('click', function(e) {
	    $('.owl-carousel-col-mob-3').trigger('stop.owl.autoplay');
	});
	$('.owl-prev,.owl-next').on('click', function(e) {
	    $('.owl-carousel-icons').trigger('stop.owl.autoplay');
	});
	$('.owl-prev,.owl-next').on('click', function(e) {
	    $('.owl-carousel-col-5').trigger('stop.owl.autoplay');
	});

	$('.owl-prev,.owl-next').on('click', function(e) {
	    $('.owl-carousel-col-4').trigger('stop.owl.autoplay');
	});
	$('.owl-prev,.owl-next').on('click', function(e) {
	    $('.owl-carousel-col-mob-4').trigger('stop.owl.autoplay');
	});
	$('.owl-prev,.owl-next').on('click', function(e) {
	    $('.owl-carousel-col-3').trigger('stop.owl.autoplay');
	});
	$('.owl-prev,.owl-next').on('click', function(e) {
	    $('.owl-carousel-col-mob-4').trigger('stop.owl.autoplay');
	});

	$('.owl-prev,.owl-next').on('click', function(e) {
	    $('.owl-carousel-col-mob-4').trigger('stop.owl.autoplay');
	});
	$('.owl-prev,.owl-next').on('click', function(e) {
	    $('.owl-carousel-col-mob-2').trigger('stop.owl.autoplay');
	});
	$('.owl-prev,.owl-next').on('click', function(e) {
	    $('.owl-carousel-icons2').trigger('stop.owl.autoplay');
	});
	$('.owl-prev,.owl-next').on('click', function(e) {
	    $('.owl-carousel-icons3').trigger('stop.owl.autoplay');
	});

	$('.owl-prev,.owl-next').on('click', function(e) {
	    $('.owl-carousel-icons4').trigger('stop.owl.autoplay');
	});
	$('.owl-prev,.owl-next').on('click', function(e) {
	    $('.owl-carousel-icons5').trigger('stop.owl.autoplay');
	});
	$('.owl-prev,.owl-next').on('click', function(e) {
	    $('.owl-carousel-icons6').trigger('stop.owl.autoplay');
	});
	$('.owl-prev,.owl-next').on('click', function(e) {
	    $('.slide-owl-carousel').trigger('stop.owl.autoplay');
	});

	$('.owl-prev,.owl-next').on('click', function(e) {
	    $('.testimonial-owl-carousel2').trigger('stop.owl.autoplay');
	});
	$('.owl-prev,.owl-next').on('click', function(e) {
	    $('.testimonial-owl-carousel3').trigger('stop.owl.autoplay');
	});
	$('.owl-prev,.owl-next').on('click', function(e) {
	    $('.testimonial-owl-carousel4').trigger('stop.owl.autoplay');
	});
	$('.owl-prev,.owl-next').on('click', function(e) {
	    $('.testimonial-owl-carousel').trigger('stop.owl.autoplay');
	});

})(jQuery);

