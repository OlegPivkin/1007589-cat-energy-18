(function () {
    var nav = document.querySelector('.main-nav');
    var toggle = nav.querySelector('.main-nav__burger');

    nav.classList.remove('main-nav--nojs');

    var onClickToggle = function (evt) {
        evt.preventDefault();
        nav.classList.toggle('main-nav--opened');
    };
    toggle.addEventListener('click', onClickToggle);
})();

(function () {
    ymaps.ready(init);
    function init(){
        var mapCenter = [59.938631, 30.323055];
        if (window.innerWidth > 1280) {
            mapCenter = [59.938631, 30.320168];
        }
        var myMap = new ymaps.Map("map", {
                center: mapCenter,
                zoom: 17
            }, {
                autoFitToViewport: 'always'
            }),
            myPlacemark = new ymaps.Placemark([59.938631, 30.323055], {}, {
                iconLayout: 'default#image',
                iconImageHref: '../img/map-pin.png',
                iconImageSize: [124, 106],
                iconImageOffset: [-80, -106]
            });
        myMap.geoObjects.add(myPlacemark);
        window.addEventListener('resize', function() {
            myMap.setCenter([59.938631, 30.323055]);
            if (window.innerWidth > 1280) {
                myMap.setCenter([59.938631, 30.320168]);
            }
        });
    }
})();
