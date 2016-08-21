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

    $('#headerTitle').delay(1000).addClass('comingDown2s');

    $('header').backstretch([
        "img/header.jpg",
        "img/sashimi.jpg",
        "img/wappa4.jpg",
        "img/robata.jpg",
        "img/udon.jpg"
    ], {
        fade: 1000,
        duration: 3000
    });


//Menu Section

/*
    $('#menuBoxContainer').addClass('hidden');
*/

    $(window).scroll(function(){
        var windowHeight = $(window).height(),
            windowScrollTop = $(this).scrollTop(),
            menuBoxTop = $('#menuBoxContainer').offset().top,
            menuBoxHeight = $('#menuBoxContainer').outerHeight(),
            menuEventPoint = menuBoxTop + menuBoxHeight - windowHeight,
            weeklyEventPoint = menuEventPoint + menuBoxHeight,
            weeklyHeight = $('#weekly').outerHeight(),
            wappaEventPoint = weeklyEventPoint + weeklyHeight,
            wappaHeight = $('#wappaSection').outerHeight(),
            happyEventPoint = wappaEventPoint + wappaHeight;


        var menuPanes = $('#menuBoxContainer').find('.menu-pane'),
            weeklyPanes = $('#weekly').find('.weekly-pane'),
            wappaPanes = $('#wappaSection').find('.wappa-pane'),
            happyPanes = $('#happyHour').find('.happy-pane');


        if (windowScrollTop > menuEventPoint){
            var x=1;
            menuPanes.each(function(){
                $(this).addClass('comingDown'+x+'s');
                x += 1;
            });
        }
        if (windowScrollTop > weeklyEventPoint){
            var x=1;
            weeklyPanes.each(function(){
                $(this).addClass('comingDown'+x+'s');
                x += 1;
            });
        }
        if (windowScrollTop > wappaEventPoint){
            var x=1;
            wappaPanes.each(function(){
                $(this).addClass('comingDown'+x+'s');
                x += 1;
            });
        }
        if (windowScrollTop > happyEventPoint){
            var x=1;
            happyPanes.each(function(){
                $(this).addClass('comingDown'+x+'s');
                x += 1;
            });
        }
    });


//Wappa
    $('#wappaImages').backstretch([
        "img/wappa2.jpg",
        "img/wappa3.jpg",
        "img/wappa4.jpg",
        "img/wappa5.jpg",
        "img/wappa6.jpg",
    ], {
        fade: 1000,
        duration: 2000
    });


//Map
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
            map: map
        });
    }
    initMap();

});



