var AllTracksView = Backbone.View.extend({
  tagName: 'ol',
  initialize: function() {
    //var model = new App.Models.Track({id: 'asdf'});
    //this.collection.add(model);
    //this.collection.on('add', this.render);

    this.collection.on('sync', this.render, this);
  },
  render: function() {
    this.collection.each(this.addOne, this);
    return this;
  },
  addOne: function(track) {
    var trackView = new SingleTrackView({ model: track });
    this.$el.append(trackView.render().el);
  }
});