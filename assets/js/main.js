$(document).ready(function() {
    $(function() {
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
    });

    initializeGoogleMap();

});

function initializeGoogleMap() {
    var lat = $('.map-wrapper').attr("data-lat");
    var lng = $('.map-wrapper').attr("data-lng");

    var myLatlng = new google.maps.LatLng(lat,lng);
    var mapOptions = {
        zoom: 15,
        center: myLatlng,
        //disableDefaultUI: true,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);



    //
    //
    //
    //
    //      OVDJE UBACUJES OISNI TEKST KOJI SE POJAVLJUJE NA MAPI KADA SE KLIKNE NA LOKACIJU
    //      SVI OVI KARAKTERI (<P>, +, ' MORAJU OSTATI TAKVI KAKVI JESU, SAMO MJENJAJ SAM TEKST, TJ. RENT.. SLA... 7920... REP... )
    //
    //
    //
    //
    var contentString = '<div id="content">'+
         '<div id="siteNotice">'+
         '</div>'+
         '<h3 id="firstHeading" class="firstHeading">Rent-a-Car Prijedor-Kozarac</h3>'+    // OVDJE MJENJAS NASLOV
         '<div id="bodyContent">'+
         '<p>Slaviše Djukića 13,</p>' +             // OVDJE PRVI RED
         '<p>79203 Omarska,</p>'+                   // OVDJE DRUGI RED
         '<p>Republika Srpska :)</p>'+              // OVDJE TRECI RED
         '</div>'+
         '</div>';

    var infowindow = new google.maps.InfoWindow({
         content: contentString
    });

    var image = {
        url: 'assets/img/gm_marker.png',
        size: new google.maps.Size(40, 64),
        // The origin for this image is 0,0.
        origin: new google.maps.Point(0,0),
        // The anchor for this image is the base of the flagpole at 0,32.
        anchor: new google.maps.Point(20, 54)
    };

    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: 'Searchresult BV - online marketing',
        icon: image
    });

    //google.maps.event.addListener(marker, 'click', function() {
    //     infowindow.open(map,marker);
    //});
}