$(document).ready(function () {
    // Menu toggle effect
    $('.navbar-toggle').on('click', function () {
        $(this).toggleClass('active');
        $('.main-menu').toggleClass('active');
        $('.icon-bar').toggleClass('rotated');
    });

    $('.main-menu li a').on('click', function () {
        $(this).toggleClass('active');
        $('.main-menu').toggleClass('active');
        $('.icon-bar').toggleClass('rotated');
    });




    /*
    $('.question').on('click', function (e) {
        e.preventDefault();

        var question = $(this);
        var answer = $(this).closest('.answer');
        var parent = $(this).closest('.panel-group');

        var h = answer.outerHeight();


        console.log(h);
        if ( $(this).attr("aria-expanded") == 'false' ) {
            $(this).closest('.panel').addClass('in');
            $('<div id="proba" style="height:' + h + 'px" class="panel-replacement"></div>').appendTo(parent);
            console.log("sdasd");
        }
        else {
            console.log("asd");
            $(this).closest('.panel').removeClass('in');
            $('div').remove('#proba');
        }


    });
    */

    $.getJSON( "mydata.json", function( data ) {
        var items = [];
        $.each( data, function( key, val ) {
            items.push( "<li id='" + key + "'>" + val + "</li>" );
        });

        $( "<ul/>", {
            "class": "my-new-list",
            html: items.join( "" )
        }).appendTo( "body" );
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
