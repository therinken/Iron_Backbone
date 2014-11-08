window.App = {
  Models: {},
  Collections: {},
  Views: {}
};

App.Collections.Tracks = Backbone.Collection.extend({
  model: App.Models.Track,
  url: 'http://api.soundcloud.com/tracks'
});
