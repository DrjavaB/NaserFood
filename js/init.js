$(".mainSlider").slick({
	infinite: true,
	arrows: true,
	autoplay: false,
	dots: true,
	speed: 2000,
	cssEase: 'cubic-bezier(0.68,-0.26, 0.3, 1.41)',
	prevArrow: '<button class="slick-prev" aria-label="Previous" type="button"><</button>',
	nextArrow: '<button class="slick-next" aria-label="Next" type="button">></button>',
	customPaging: function (slider) {
		return $('<button type="button" />').css({
			'height': '12px',
			'border-radius': '100%',
			'background': '#a5d283',
			'margin-right': '6px',
			'cursor': 'pointer'
		});
	}
});
$(".albumSlider").slick({
	infinite: true,
	arrows: false,
	autoplay: true,
	dots: false,
	cssEase: 'cubic-bezier(0.66, 0, 0.33, 1.34)',
	slidesToShow: 6,
	slidesToScroll: 1,
	speed: 1000,
	swipe: true,
	swipeToSlide: true,
	autoplaySpeed: 2000,
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 5,
			}
		},
		{
			breakpoint: 900,
			settings: {
				slidesToShow: 4,
			}
		},
		{
			breakpoint: 700,
			settings: {
				slidesToShow: 3,
			}
		},
		{
			breakpoint: 550,
			settings: {
				slidesToShow: 2,
			}
		}
	]
});
