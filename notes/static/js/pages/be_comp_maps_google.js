

var BeCompMapsGoogle = function() {
    

    
    var initMapSearch = function(){
        if ( jQuery('#js-map-search').length ) {
            
            var mapSearch = new GMaps({
                div: '#js-map-search',
                lat: 20,
                lng: 0,
                zoom: 2,
                scrollwheel: false
            });

            
            jQuery('.js-form-search').on('submit', function(){
                var inputGroup = jQuery('.js-search-address').parent('.input-group');

                GMaps.geocode({
                    address: jQuery('.js-search-address').val().trim(),
                    callback: function (results, status) {
                        if ((status === 'OK') && results) {
                            var latlng = results[0].geometry.location;

                            mapSearch.removeMarkers();
                            mapSearch.addMarker({ lat: latlng.lat(), lng: latlng.lng() });
                            mapSearch.fitBounds(results[0].geometry.viewport);

                            inputGroup.siblings('.form-text').remove();
                        } else {
                            inputGroup.after('<div class="form-text text-danger text-xs-center animated fadeInDown">Address not found!</div>')
                        }
                    }
                });

                return false;
            });
        }
    };

    
    var initMapSat = function(){
        if ( jQuery('#js-map-sat').length ) {
            new GMaps({
                div: '#js-map-sat',
                lat: 20,
                lng: 0,
                zoom: 2,
                scrollwheel: false
            }).setMapTypeId(google.maps.MapTypeId.SATELLITE);
        }
    };

    
    var initMapTer = function(){
        if ( jQuery('#js-map-ter').length ) {
            new GMaps({
                div: '#js-map-ter',
                lat: 20,
                lng: 0,
                zoom: 2,
                scrollwheel: false
            }).setMapTypeId(google.maps.MapTypeId.TERRAIN);
        }
    };

    
    var initMapOverlay = function(){
        if ( jQuery('#js-map-overlay').length ) {
            new GMaps({
                div: '#js-map-overlay',
                lat: 35,
                lng: 139,
                zoom: 6,
                scrollwheel: false
            }).drawOverlay({
                lat: 35,
                lng: 139,
                content: '<div class="alert alert-info text-xs-center"><h4 class="alert-heading mt-5 mb-15">Message</h4><p class="font-size-h5 mb-0">You can overlay messages on your maps!</p></div>'
            });
        }
    };

    
    var initMapMarkers = function(){
        if ( jQuery('#js-map-markers').length ) {
            new GMaps({
                div: '#js-map-markers',
                lat: 35.652832,
                lng: 139.839478,
                zoom: 11,
                scrollwheel: false
            }).addMarkers([
                {lat: 35.65, lng: 139.83, title: 'Map Marker #1', animation: google.maps.Animation.DROP, infoWindow: {content: 'Map Marker #1'}},
                {lat: 35.71, lng: 139.89, title: 'Map Marker #2', animation: google.maps.Animation.DROP, infoWindow: {content: 'Map Marker #2'}},
                {lat: 35.68, lng: 139.80, title: 'Map Marker #3', animation: google.maps.Animation.DROP, infoWindow: {content: 'Map Marker #3'}},
                {lat: 35.63, lng: 139.88, title: 'Map Marker #4', animation: google.maps.Animation.DROP, infoWindow: {content: 'Map Marker #4'}},
                {lat: 35.70, lng: 139.85, title: 'Map Marker #5', animation: google.maps.Animation.DROP, infoWindow: {content: 'Map Marker #5'}}
            ]);
        }
    };

    
    var initMapStreet = function(){
        if ( jQuery('#js-map-street').length ) {
            new GMaps.createPanorama({
                el: '#js-map-street',
                lat: 35.6429793,
                lng: 139.8069035,
                pov: { heading: 355, pitch: 9 },
                scrollwheel: false
            });
        }
    };

    return {
        init: function () {
            
            initMapSearch();

            
            initMapSat();
            initMapTer();
            initMapOverlay();
            initMapMarkers();
            initMapStreet();
        }
    };
}();


jQuery(function(){ BeCompMapsGoogle.init(); });