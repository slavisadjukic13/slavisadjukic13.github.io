$(document).ready(function () {

    $('.datepicker').datepicker({
        autoclose: true
    });

    responsiveTable();

});

function responsiveTable(){
    if ( $('.tableWrapper').length ) {

        var target = $('.tableWrapper');
        var table = $('.tableWrapper .table');
        var wrapper = $('.tableWrapper .table-responsive');

        var tableWidth = $(table).css('width');
        var wrapperWidth = $(wrapper).css('width');

        if( tableWidth > wrapperWidth ){

            $(target).addClass('tableMobile');
        }

    }
}