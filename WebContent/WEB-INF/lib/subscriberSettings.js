( function( red5prosdk ) {
    'use strict';

    var rtcSubscriber = new red5prosdk.RTCSubscriber();
    var config = {
        protocol: 'ws',
        host: 'localhost',
        port: 8081,
        app: 'rocketapp',
        streamName: 'rocketstream',
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