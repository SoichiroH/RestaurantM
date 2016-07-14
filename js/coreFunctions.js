/**
 * Created by Soichiro on 6/11/2016.
 */

$(window).load(function(){
/*    if ($(window).height() > $(window).width()) {
        var ratio = $('.parallax').width() / $('.parallax').height();
        $('.parallax img').css('height', ($(window).height()) + 'px');
        $('.parallax img').css('width', $('.parallax').height() * ratio + 'px');
    }*/

//Header
    //Header initial height
    $('header').height($(window).height() * 0.84);

    // Window resize height
    $(window).resize(function() {
        $('header').height($(window).height()* 0.84);
    });

    //Scroll Down
    $('#scrollDownIcon').on('click', function(){
        var windowHeight = $(window).height();
        $('body').not(':animated').animate({scrollTop: windowHeight}, 'slow');
    });


    var map;
    function initMap() {
        var myLatLng = {lat: 37.8639302, lng: -122.2686306};

        map = new google.maps.Map(document.getElementById('map'), {
            center: myLatLng,
            zoom: 15,
            scrollwheel: false
        });
        var marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
        });
    }
    initMap();

});



