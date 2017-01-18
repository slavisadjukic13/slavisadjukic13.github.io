$(document).ready(function() {

    $('.nav-toggle').on('click', function () {
        $(this).toggleClass('active');
        $('.icon-bar').toggleClass('rotated');
        $('#main-menu').toggleClass('slideOutUp');
        $('#main-menu').toggleClass('slideInDown');

        $('.header .nav-toggle .opened').toggleClass('fadeInDown').toggleClass('fadeOut');
        $('.header .nav-toggle .closed').toggleClass('fadeInDown').toggleClass('fadeOut');

        $('.logo').toggleClass('top');

        $('#main-menu .search-area').toggleClass('fadeInDown');
        $('#main-menu .links-area').toggleClass('fadeInRight');

    });


    $('.your-class').slick({
        centerMode : true
    });


    $(window).scroll(function() {
        if ($(window).scrollTop()>100){
            $('.header').removeClass('top');
            $('#main-menu').removeClass('top');
        }
        else {
            $('.header').addClass('top');
            $('#main-menu').addClass('top');
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