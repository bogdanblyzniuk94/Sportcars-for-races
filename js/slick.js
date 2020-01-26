$('.hero').slick({
	slidesToShow: 3,
	slidesToScroll: 1,
	arrows: true,
	dots: true,
	autoplay: true,
    autoplaySpeed: 3000,
	responsive: [
    {
      breakpoint: 1470,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 1070,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    ]
});


