$(document).ready(function() {

    $(function () {
        $('[data-toggle="popover"]').popover()
    });

    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    });



    $('#slider').slick({
        autoplaySpeed: 2000,
        autoplay: true,
        arrows: false,
        dots: false,
        infinite: true,
        mobileFirst: this
    });

    $.fn.modal.Constructor.prototype.enforceFocus = function () {};
});