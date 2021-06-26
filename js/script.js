$(document).ready(function() {
	let check = true;
	$('.burger_button').click(function() {
		$('#checkbox3').prop('checked', check);
		if (check) {
			$('.mobile_header_items').fadeIn(500);
		}
		else {
			$('.mobile_header_items').fadeOut(500);
		}
		check = !check;		
		return false;
	});
	$('.city-tabs_button').click(function() {
		$('.city-tabs_button').removeClass('active');
		$(this).addClass('active');
		let city = $(this).attr('data-city');
		$('.city-information_item span').removeClass('active');
		$('.city-information_item span').each(function() {
			console.log("WOW");
			if($(this).attr('data-city') == city) {
				$(this).addClass('active');
			}
		})
	});
	$('.project-outward_slider').owlCarousel({
		loop:true,
		margin: 10,
		nav:true,
		items: 1, 
		dots: false
	});
	$('.project-outward_slider_mobile').owlCarousel({
		loop:true,
		margin: 10,
		nav:true,
		items: 1, 
		dots: false
	});
	$('.functions_slider').owlCarousel({
		animateOut: 'fadeOut',
		animateIn: 'fadeIn',
		loop:true,
		margin: 10,
		nav:true,
		items: 1, 
		mouseDrag: false,
		responsive: {
			0: {
				dots: false
			},
			1281: {
				dots: true
			}
		}
	});
});