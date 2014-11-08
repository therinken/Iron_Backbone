window.onload = app;

// runs when the DOM is loaded
function app() {

    // load some scripts (uses promises :D)
    loader.load({
        
        url: "./bower_components/jquery/dist/jquery.min.js"
    }, {
        url: "./bower_components/lodash/dist/lodash.min.js"
    }, {
        url: "./bower_components/backbone/backbone.js"
    }, {
        url: "./bower_components/pathjs/path.min.js"
    }, {
        url: "./js/views/allTracksView.js"
    }, {
        url: "./js/views/singleTrackView.js"
    }, {
        url: "./js/models/singleTrack.js"
    }, {
        url: "./js/collections/allTracks.js"
    }, {   
        url: "./js/SoundCloudClient.js"
    
    }).then(function() {
        _.templateSettings.interpolate = /{([\s\S]+?)}/g;

    });

}
