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
	var
		inicio = $('#inicio').position().top,
		conocimientos = $('#conocimientos').position().top,
		estudios = $('#estudios').position().top,
		experiencia = $('#experiencia').position().top;

	function Activar_Animacion() {
		var scroll_top = $(window).scrollTop();

		// animar el inicio
		// if ((scroll_top >= 0) && (scroll_top <= (conocimientos - inicio)))  {
		// 	$('.entrada').addClass('fadeInLeft animated');
		// 	$('.nombre').addClass('zoomInRight animated');
		// } else {
		// 	$('.entrada').removeClass('fadeInLeft animated');
		// 	$('.nombre').removeClass('zoomInRight animated');
		// }

		// Animar conocimientos
		if ((scroll_top >= conocimientos) && (scroll_top < estudios)) {
			$('.conocimientos').removeClass('fadeOutRight');
			$('.conocimientos').addClass('fadeInLeft');
		}

		// Animar Estudios
		console.log('top: ' + scroll_top +' valor: '+ estudios + ' Valor 2: '+ experiencia);
		if ((scroll_top >= estudios) && (scroll_top < experiencia)) {
			$('#estudios1').removeClass('rotateOutDownLeft');
			$('#estudios1').addClass('rotateInDownLeft');
			$('#estudios2').removeClass('rotateOutDownRight');
			$('#estudios2').addClass('rotateInDownRight');
		}

		// Animar Experiencia
		if (scroll_top >= (experiencia - inicio)) {
			$('#experiencia .caja').removeClass('flipOutX');
			$('#experiencia .caja').addClass('flipInX');
		}
	}

	$(window).scroll(Activar_Animacion);
});