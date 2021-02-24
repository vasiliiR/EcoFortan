/* Initialisation of slider Slick*/
$(document).ready(function(){
	$('.inner__header__slider').slick({
		dots: true,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		prevArrow: document.querySelector('#inner__header__my__arrow__right'),
		nextArrow: document.querySelector('#inner__header__my__arrow__left'),
	});


	$('.leftbox').hover(function () {
		$('.rightbox').animate({ width: '45.5%' }, 1000)
	}, function () {
		$('.rightbox').animate({ width: '0.4%' }, 1000)
	});

	$('.leftbox_1').hover(function () {
		$('.rightbox_1').animate({ width: '45.5%' }, 1000)
	}, function () {
		$('.rightbox_1').animate({ width: '0.4%' }, 1000)
	});

	$('.leftbox_2').hover(function () {
		$('.rightbox_2').animate({ width: '45.5%' }, 1000)
	}, function () {
		$('.rightbox_2').animate({ width: '0.4%' }, 1000)
	});

	$('.leftbox_3').hover(function () {
		$('.rightbox_3').animate({ width: '45.5%' }, 1000)
	}, function () {
		$('.rightbox_3').animate({ width: '0.4%' }, 1000)
	});
});


