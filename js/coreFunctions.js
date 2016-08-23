/**
 * Created by Soichiro
 */

$(window).load(function(){
// Mobile optimization for parallax
    if(window.innerWidth < 800) {
        $('.logo').css({'height':'150px'});
        $('.character').css({'height':'100px'});
        $('.parallaxWeekly').css({'background-attachment':'scroll'});
        $('.parallaxWappa').css({'background-attachment':'scroll'});
        $('.parallaxHappy').css({'background-attachment':'scroll'});
    }

//Header
    $('header').height($(window).height() * 0.84);

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


//Menu
    $(window).scroll(function(){
        var windowHeight = $(window).height(),
            windowScrollTop = $(this).scrollTop(),
            menuBoxTop = $('#menuBoxContainer').offset().top,
            menuBoxHeight = $('#menuBoxContainer').outerHeight(),
            menuEventPoint = menuBoxTop + menuBoxHeight - windowHeight,
            weeklyEventPoint = menuEventPoint + menuBoxHeight,
            weeklyHeight = $('#weekly').outerHeight(),
            wappaEventPoint = weeklyEventPoint + weeklyHeight,
            wappaHeight = $('#wappa').outerHeight(),
            happyEventPoint = wappaEventPoint + wappaHeight;

        var menuPanes = $('#menuBoxContainer').find('.menu-pane'),
            weeklyPanes = $('#weekly').find('.weekly-pane'),
            wappaPanes = $('#wappa').find('.wappa-pane'),
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



