( function( red5prosdk ) {
    'use strict';

    var rtcPublisher = new red5prosdk.RTCPublisher();
    var config = {
        protocol: 'ws',
        host: '18.218.165.114',
        port: 8081,
        app: 'rocketApp',
        streamName: getParameterByName('name', 'rocketStream'),
        iceServers: [{ urls: 'stun:stun2.l.google.com:19302' }]
    };
    
    rtcPublisher.init( config )
        .then( function() {
            return rtcPublisher.publish();
        } )
        .then( function() {
            console.log( 'Publishing!' );
        } )
        .catch( function( err ) {
            console.error( 'Could not publish: ' + err );
        } );

}( window.red5prosdk ) );