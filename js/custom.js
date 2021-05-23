$('#courseSlider').owlCarousel({
    loop: true,
    margin: 0,
    autoplay: false,
	dots: true,
	nav: true,
    responsive: {
		0: {
            items: 1
        },
		580: {
            items: 2,
        },
		1170: {
            items: 2,
			stagePadding: 90,
        }
    },
	navText: ['<img src="images/arrow-caret-right.png">', '<img src="images/arrow-left.png">']
});


$('#testiSlider').owlCarousel({
    loop: true,
    margin: 0,
	nav: true,
    autoplay: true,
	dots: false,
	navText: ['<img src="images/arrow-left.png">', '<img src="images/arrow-caret-right.png">'],
    responsive: {
        0: {
            items: 1
        }
    }
});


if ( $('.wow').length > 0 ) {
	new WOW().init();
}


$('.faq-wrapper .collapse-btn').on('click', function(){
	$(this).toggleClass('open');
	$(this).next('.collapse').slideToggle();
});