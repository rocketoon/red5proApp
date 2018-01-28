( function( red5prosdk ) {
    'use strict';

    var rtcSubscriber = new red5prosdk.RTCSubscriber();
    var config = {
        protocol: 'ws',
        host: '192.168.1.119',
        port: 8081,
        app: 'rocketApp',
        streamName: getParameterByName('name', 'rocketStream'),
        iceServers: [{ urls: 'stun:stun2.l.google.com:19302' }]
    };

    rtcSubscriber.init( config )
        .then( function() {
            return rtcSubscriber.subscribe();
        } )
        .then( function() {
            console.log( 'Playing!' );
        } )
        .catch( function( err ) {
            console.log( 'Could not play: ' + err );
        } );

}( window.red5prosdk ) );