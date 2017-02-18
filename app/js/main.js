$(document).ready(function() {

    $('.nav-toggle').on('click', function () {
        $(this).toggleClass('active');
        $('.nav-toggle .icon-bar').toggleClass('rotated');
        $('#main-menu').toggleClass('slideOutUp');
        $('#main-menu').toggleClass('slideInDown');

        $('.header .nav-toggle .opened').toggleClass('fadeInDown').toggleClass('fadeOut');
        $('.header .nav-toggle .closed').toggleClass('fadeInDown').toggleClass('fadeOut');


        // $('#main-menu .main-menu-search-area').toggleClass('fadeInDown');
        // $('#main-menu .links-area').toggleClass('fadeInRight');

    });

    $('.account-menu-toggle').on('click', function () {
        $('#account-menu-toggle').toggleClass('active');
        $('#account-menu-toggle .icon-bar').toggleClass('rotated');
        $('#account-menu').toggleClass('slideOutUp');
        $('#account-menu').toggleClass('slideInDown');

        $('.header .account-menu-toggle .opened').toggleClass('fadeInDown').toggleClass('fadeOut');
        $('.header .account-menu-toggle .closed').toggleClass('fadeInDown').toggleClass('fadeOut');


        // $('#account-menu .main-menu-search-area').toggleClass('fadeInDown');
        // $('#account-menu .links-area').toggleClass('fadeInRight');

    });

    $('.cta-message').removeClass('fadeOut').addClass('fadeInLeft');
    $('.cta-btn').removeClass('fadeOut').addClass('fadeInRight');
    //cta-message

    $("#hero-price").ionRangeSlider({
        type: "double",
        min: 100,
        max: 500000,
        from: 25000,
        to: 240000,
        postfix: " KM"
    });
    $("#hero-area").ionRangeSlider({
        type: "double",
        min: 20,
        max: 1000,
        from: 20,
        to: 500,
        postfix: " m&sup2"
    });

    $("#main-menu-search-price").ionRangeSlider({
        type: "double",
        min: 100,
        max: 500000,
        from: 25000,
        to: 240000,
        postfix: " KM"
    });
    $("#main-menu-search-area").ionRangeSlider({
        type: "double",
        min: 20,
        max: 1000,
        from: 20,
        to: 500,
        postfix: " m&sup2"
    });



    $('.footer-most-viewed-list').slick({
        // setting-name: setting-value
        autoplay: false,
        arrows: false,
        dots: false,
        infinite: true,
        mobileFirst: this,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    autoplaySpeed: 2000,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 992,
                settings: {
                    autoplaySpeed: 2000,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    autoplaySpeed: 2000,
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },

            {
                breakpoint: 0,
                settings: {
                    autoplaySpeed: 2000,
                    slidesToShow: 1,
                    slidesToScroll: 1
                    // centerMode: true,
                    // centerPadding: '10px'
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

    $('.partners-list').slick({
        // setting-name: setting-value
        autoplay: true,
        arrows: false,
        dots: false,
        infinite: true,
        mobileFirst: this,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    autoplaySpeed: 1000,
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 992,
                settings: {
                    autoplaySpeed: 2000,
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    autoplaySpeed: 3000,
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },

            {
                breakpoint: 0,
                settings: {
                    autoplaySpeed: 5000,
                    slidesToShow: 2,
                    slidesToScroll: 1
                    // centerMode: true,
                    // centerPadding: '10px'
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });


    $('.new-controls a').click(function (e) {
            var setViewMode = $(this).attr("data-controls");
            $('.new-controls a.active').removeClass('active');
            $(this).addClass('active');
            $('.new-list-item').removeClass('grid').removeClass('gridlg').removeClass('list').addClass(setViewMode);
            e.preventDefault();
    });


    $('.featured-list').slick({
        autoplaySpeed: 1000,
        autoplay: true,
        arrows: false,
        dots: false,
        infinite: true,
        mobileFirst: this,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 992,
                settings: {
                    autoplaySpeed: 2000,
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    autoplaySpeed: 3000,
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },

            {
                breakpoint: 0,
                settings: {
                    autoplaySpeed: 2000,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });



    $('#hero-search-area').on('show.bs.collapse', function () {

        $('html, body').animate({
            scrollTop: $(".hero-search-area").position().top - 60
        }, 400);
    });

    $('#account-menu-register').on('show.bs.collapse', function () {
        $('#account-menu').animate({
            scrollTop: $("#account-menu-register").position().top - 60
        }, 400);
    });

    $('#account-menu-login').on('show.bs.collapse', function () {
        $('#account-menu').animate({
            scrollTop: $("#account-menu-login").position().top - 60
        }, 400);
    });


    $(window).scroll(function() {
        if ($(window).scrollTop()>100){
            $('.header').removeClass('top');
            $('#main-menu').removeClass('top');
            $('.logo').removeClass('fadeOutUp').addClass('fadeInDown');
        }
        else {
            $('.header').addClass('top');
            $('#main-menu').addClass('top');
            $('.logo').removeClass('fadeInDown').addClass('fadeOutUp');
        }
    });
});