/*
	Miniport by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$nav = $('#nav');

	// Breakpoints.
		breakpoints({
			xlarge:  [ '1281px',  '1680px' ],
			large:   [ '981px',   '1280px' ],
			medium:  [ '737px',   '980px'  ],
			small:   [ null,      '736px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Scrolly.
		$('#nav a, .scrolly').scrolly({
			speed: 1000,
			offset: function() { return $nav.height(); }
		});

	// Image Modal / Lightbox.
		var $modal = $('#image-modal'),
			$modalImg = $('#modal-img'),
			$modalCaption = $('#modal-caption');

		$('.map-placeholder img, .image.featured img').on('click', function() {
			$modalImg.attr('src', $(this).attr('src'));
			$modalCaption.text($(this).attr('alt'));
			$modal.addClass('active');
		});

		$('.modal-close, .image-modal').on('click', function(e) {
			if (e.target !== $modalImg[0]) {
				$modal.removeClass('active');
			}
		});

		$(document).on('keydown', function(e) {
			if (e.key === 'Escape') {
				$modal.removeClass('active');
			}
		});

})(jQuery);