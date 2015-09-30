$(document).ready(function () {
    // Menu toggle effect
    $('.navbar-toggle').on('click', function () {
        $(this).toggleClass('active');
        $('.navigation').toggleClass('active');
        $('.icon-bar').toggleClass('rotated');
    });

    $('.main-menu li a').on('click', function () {
        $(this).toggleClass('active');
        $('.main-menu').toggleClass('active');
        $('.icon-bar').toggleClass('rotated');
    });

});


/*$(function() {
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});*/

$(function() {
    $('a[href*=#]:not([data-toggle=collapse])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});
