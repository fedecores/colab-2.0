$(document).ready(function() {
    $('#imageModal').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget); // Botón que activó el modal
        var imgSrc = button.data('image'); // Extrae la información de los datos
        var modal = $(this);
        modal.find('#modalImage').attr('src', imgSrc);
    });

    // Navbar scroll behavior
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) { // Ajusta el valor según tus necesidades
            $('.navbar').addClass('navbar-fixed');
        } else {
            $('.navbar').removeClass('navbar-fixed');
        }
    });
});