const services = () => {
	let slider = $('.services__list').slick({
		infinite: true,
		dots: false,
		arrows: false,
		centerMode: true,
		centerPadding: '15px',
		slidesToShow: 1,
		responsive: [
			{
				breakpoint: 585,
				settings: {
					centerMode: true,
					centerPadding: '60px',
					slidesToShow: 1
				}
			},
			{
				breakpoint: 413,
				settings: {
					centerMode: true,
					centerPadding: '40px',
					slidesToShow: 1
				}
			},
			{
				breakpoint: 374,
				settings: {
					centerMode: true,
					centerPadding: '10px',
					slidesToShow: 1
				}
			}
		]
	});

	if (window.innerWidth > 767) {
		slider.slick("unslick");
	}
}

export default services;