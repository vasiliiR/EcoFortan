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
	/* Accardion */
	$('.demo').beefup();
	
});
