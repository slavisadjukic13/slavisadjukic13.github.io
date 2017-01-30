$(document).ready(function() {

    $('.nav-toggle').on('click', function () {
        $(this).toggleClass('active');
        $('.icon-bar').toggleClass('rotated');
        $('#main-menu').toggleClass('slideOutUp');
        $('#main-menu').toggleClass('slideInDown');

        $('.header .nav-toggle .opened').toggleClass('fadeInDown').toggleClass('fadeOut');
        $('.header .nav-toggle .closed').toggleClass('fadeInDown').toggleClass('fadeOut');


        $('#main-menu .main-menu-search-area').toggleClass('fadeInDown');
        $('#main-menu .links-area').toggleClass('fadeInRight');

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


    // $('.featured-controls a').click(function (e) {
    //
    //
    //     var setViewMode = $(this).attr("data-controls");
    //
    //     // $('.featured-controls a.active').removeClass('active');
    //     // $(this).addClass('active');
    //
    //     // $('.featured-list-item').addClass(setViewMode);
    //     // $('.featured-list-item').removeClass('grid').removeClass('gridlg').removeClass('list').addClass(setViewMode);
    //
    //     // $('.featured-list').slick('unslick');
    //     // $('.featured-list').slick('unslick');
    //     // $('.featured-list').slick('slickSetOption',"autoplaySpeed: 3000,autoplay: true,arrows: false,dots: false,infinite: true,mobileFirst: this,pauseOnHover: true,slidesToShow: 2,slidesToScroll: 1");
    //     // $('.featured-list').slick('slickSetOption',"autoplaySpeed","100","rows","3","slidesPerRow","2");
    //     $('.featured-list').slick('slickSetOption',"slidesToShow","3");
    //     // $('.featured-list').slick('slickSetOption',"slidesPerRow","2");
    //     // $('.featured-list').slick('slickSetOption',"refresh",true);s
    //
    //     console.log(
    //         $(this).attr("data-controls")
    //     );
    //
    //     e.preventDefault();
    //     }
    // );


    $('.featured-list').slick({
        // setting-name: setting-value
        // autoplaySpeed: 1000,
        // autoplay: true,
        arrows: false,
        dots: true,
        infinite: true,
        mobileFirst: this,
        // pauseOnHover: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    // autoplaySpeed: 5000,
                    slidesToShow: 2,
                    slidesToScroll: 1
                    // centerMode: true,
                    // centerPadding: '100px'
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
    })



    $(window).scroll(function() {


        // console.log($(".hero-search-area").position().top);

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
    // $('.intro p').removeClass('notshown').addClass('fadeIn');
    // $('.button').removeClass('notshown').addClass('fadeIn');
    //
    //
    // $(window).scroll(function() {
    //
    //     $('.image-wrapper-bg').css('left',(-$(window).scrollTop()/2)+10);
    //
    //
    //     $(".chattitle-target").each(function(){
    //         if( $(this).position().top - $(window).scrollTop() <=250 ) {
    //             $(this).children('.chattitle').addClass('bounceIn').removeClass('notshown')
    //         }
    //     });
    //
    //     $(".nata-chat-target").each(function(){
    //         if( $(this).position().top - $(window).scrollTop() <=250 ) {
    //             $(this).children('.nata').addClass('bounceInLeft').removeClass('notshown')
    //         }
    //     });
    //
    //     $(".sla-chat-target").each(function(){
    //         if( $(this).position().top - $(window).scrollTop() <=250 ) {
    //             $(this).children('.sla').addClass('bounceInRight').removeClass('notshown')
    //         }
    //     });
    //
    //     $(".dotted-target").each(function(){
    //         if( $(this).position().top - $(window).scrollTop() <=250 ) {
    //             $(this).children('.dotted').addClass('fadeIn').removeClass('notshown')
    //         }
    //     });
    //
    //     $(".icon-target").each(function(){
    //         if( $(this).position().top - $(window).scrollTop() <=250 ) {
    //             $(this).children('img').addClass('flipInX').removeClass('notshown')
    //         }
    //     });
    //
    //     $(".subtitle-holder").each(function(){
    //         if( $(this).position().top - $(window).scrollTop() <=250 ) {
    //
    //             $(this).children('.subtitle').addClass('fadeIn').removeClass('notshown');
    //             $(this).children('img').addClass('fadeIn').removeClass('notshown');
    //         }
    //     });
    //
    //     if($(window).scrollTop() + $(window).height() == $(document).height()) {
    //         $('.image-wrapper').addClass('on');
    //         $('#img1').addClass('zoomIn').removeClass('notshown');
    //
    //     }
    //     else {
    //         $('.image-wrapper').removeClass('on');
    //     }
    //
    // });
    //
    // $('.image-wrapper').scroll(function() {
    //     $(".img-target").each(function(){
    //         if( $(this).position().top <=250 ) {
    //             $(this).addClass('zoomIn').removeClass('notshown')
    //         }
    //     });
    //     if ( $('.end-trigger').position().top <= $(window).height() ) {
    //         $('.end').addClass('on');
    //     } else {
    //         $('.end').removeClass('on');
    //     }
    // });

});