$(function() {

	const handlers = {
		body: $('body'),
		window: $(window),
		mainPanel: $('.main__panel'),
		nav: $('.page-nav'),
		anchors: $('.anchor'),
		htmlBody: $('html, body')
	}

	// Wait with animations
	setTimeout(() => {
		handlers.body.removeClass('is-loading');
	}, 100);

	// Sticky menu

	handlers.mainPanel.scrollex({
		mode: 'top',
		enter: () => {
			handlers.nav.addClass('is-sticky');
		},
		leave: () => {
			handlers.nav.removeClass('is-sticky');
		},
	});

	// Scroll

	handlers.anchors.click(function(e) {

	        e.preventDefault();

	        handlers.htmlBody.animate({scrollTop: $(this.hash).offset().top }, 800, () => {

	            window.location.hash = this.hash;
	        });
	});

	// Active menu element

	handlers.anchors.each(function() {
		console.log();
		let id = $(this).attr('href');

		$(id).scrollex({
			mode: 'middle',
			enter: () => {
				handlers.anchors.removeClass('is-active');
				$(this).addClass('is-active');
			}
		});
	});

});