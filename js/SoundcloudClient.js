var SingleTrack = Backbone.Model.extend({});
var SingleTrackView = Backbone.View.extend({});
var AllTracksView = Backbone.View.extend({});
var TrackCollection = Backbone.Collection.extend({});

SC.initialize({
    client_id: '9f71c1134013b218057ea215865270fc',
    redirect_uri: 'http://k-backbone.herokuapp.com'
});

var trackster = new TrackCollection();

var app = new AllTracksView({
    collection: trackster
});

$('.tracks').html(app.render().el);
