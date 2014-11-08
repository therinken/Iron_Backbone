var TrackCollection = Backbone.Collection.extend({

  model: SingleTrack,
  url: 'http://api.soundcloud.com/tracks'
  
});