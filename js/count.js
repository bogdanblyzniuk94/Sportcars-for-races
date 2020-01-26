($('.count')).each(function(){
	$(this).prop('achievements', 0).animate({
		achievements:$(this).text()
	},{
		duration: 2500,
		easing: 'swing',
		step:function(now){
			$(this).text(Math.ceil(now));
		}
	});
});