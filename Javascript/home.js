$(document).ready(function() {
    $('#imageModal').on('show.bs.modal', function(event) {
        var button = $(event.relatedTarget); // Botón que activó el modal
        var imgSrc = button.data('image'); // Extrae la información de los datos
        var modal = $(this);
        modal.find('#modalImage').attr('src', imgSrc);
    });

    // Navbar scroll behavior
    $(window).scroll(function() {
        if ($(this).scrollTop() > 30) { // Ajusta el valor según tus necesidades
            $('.navbar').addClass('navbar-fixed');
        } else {
            $('.navbar').removeClass('navbar-fixed');
        }

        // Highlight the current section in the navbar
        var scrollPos = $(document).scrollTop();
        $('a.nav-link').each(function() {
            var currLink = $(this);
            var refElement = $(currLink.attr("href"));
            if (refElement.position().top - $('.navbar').outerHeight() <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                $('a.nav-link').removeClass("active");
                currLink.addClass("active");
                currLink.attr('title', 'Estás aquí'); // Añade el tooltip
            } else {
                currLink.removeClass("active");
                currLink.removeAttr('title'); // Elimina el tooltip
            }
        });

        // Animación de entrada para las cajas
        $('.animated').each(function() {
            var elementPos = $(this).offset().top;
            var windowHeight = $(window).height();
            if (elementPos < scrollPos + windowHeight - 100) { // Ajusta el valor según tus necesidades
                $(this).addClass('fadeInUp');
            }
        });
    });

    // Smooth scroll with offset for navbar
    $('a.nav-link').on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            var offset = $('.navbar').outerHeight(); // Altura del navbar

            $('html, body').animate({
                scrollTop: $(hash).offset().top - offset
            }, 800, function() {
                window.location.hash = hash;
            });

            // Colapsar el navbar después de hacer clic en un enlace
            $('.navbar-collapse').collapse('hide');
        }
    });

    // Trigger scroll event on page load to animate elements already in view
    $(window).trigger('scroll');
});