$(document).ready(function() {

	$('a[href*="#"]:not([href="#"])').click(function() {

		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

			if (target.length) {
				$('html, body').animate({
					scrollTop: target.offset().top
				}, 1000);

				return false;
			}
		}
	});

	// ejemplo: http://blog.grayghostvisuals.com/js/detecting-scroll-position/
	var inicio = $('#conocimientos').height();
	console.log('Voy 1: ' + inicio);

	function Activar_Animacion() {
		console.log('Voy 2');
		var scroll_top = $(window).scrollTop();

		if (scroll_top >= inicio) {
			$('.conocimientos').addClass('.fadeInUp.animated');
			console.log('carajo: '+ scroll_top);
		} else {}
	}

	$(window).scroll(Activar_Animacion);
	console.log('Voy 3');
});