var SingleTrack = Backbone.Model.extend({});
var SingleTrackView = Backbone.View.extend({});
var AllTracksView = Backbone.View.extend({});
var TrackCollection = Backbone.Collection.extend({});


var tracks = new TrackCollection();
tracks.fetch({
  data: {
    url: 'http://api.soundcloud.com/tracks'
    format: 'json',
    client_id: '01176e5bfd8c188335dcc943e52f1f98',
    genres: 'dnb',
    order: 'hotness',
    limit: '5'
  }
});

var app = new AllTracksView({
  collection: tracks
});

$('.tracks').html(app.render().el);
