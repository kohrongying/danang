$(document).ready(function(){

	let slides = []
	const PAGES = $('.page');
	PAGES.each(function(index, value){
		this.setAttribute('data-page', index);
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
	const max_pages = $('.page').length - 1; 

	$(window).scroll(function() {
		let page_progress = Math.round(this.pageYOffset/height);
		page_progress = Math.min(page_progress, max_pages);
		console.log(`page prog: ${page_progress}`);
		if (page_progress > num_pages_travelled) {
		  	num_pages_travelled++;
		  	let next = $(slides[num_pages_travelled].current);
		  	next.addClass('active').removeClass('inactive');
		  	
		} else if (page_progress < num_pages_travelled) {
		  	let past = $(slides[num_pages_travelled].current);
		  	past.removeClass('active').addClass('inactive');
		  	num_pages_travelled--;
		  	
		}
		console.log(`num pages travelled: ${num_pages_travelled}`);
	});

});