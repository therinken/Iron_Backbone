var SingleTrack = Backbone.Model.extend({});
var SingleTrackView = Backbone.View.extend({});
var AllTracksView = Backbone.View.extend({});
var TrackCollection = Backbone.Collection.extend({});

SC.initialize({
    client_id: '01176e5bfd8c188335dcc943e52f1f98'
});

window.template = function(id) {
    return _.template($('#' + id).html());
};

var trackster = new TrackCollection();

var app = new AllTracksView({
    collection: trackster
});

$('.tracks').html(app.render().el);
