$(document).ready(function(){

	let slides = []
	const PAGES = $('.page');
	PAGES.each(function(index, value){
		if (index==0) {
			slides.push({
				current: this,
				prev: PAGES[PAGES.length-1],
				next: PAGES[1]
			})
		} else if (index==PAGES.length-1) {
			slides.push({
				current: this,
				prev: PAGES[PAGES.length-2],
				next: PAGES[0]
			})
		} else {
			slides.push({
				current: this,
				prev: PAGES[index-1],
				next: PAGES[index+1]
			})
		}
	})

	const height = $(window).height();
	let num_pages_travelled = 0;

	$(window).scroll(function() {
		let page_progress = Math.round(this.pageYOffset/height);
		if(page_progress > num_pages_travelled){
		  	num_pages_travelled++;
		  	let next = $(slides[num_pages_travelled].current);
		  	next.addClass('active');
		  } else if (page_progress < num_pages_travelled){
		  	let past = $(slides[num_pages_travelled].current);
		  	past.removeClass('active');
		  	num_pages_travelled--;
		  }
	});

});