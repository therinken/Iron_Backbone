var SingleTrackView = Backbone.View.extend({

  tagName: 'li',
  template: _.template($('#trackElement').html()),


  render: function() {
	var trackTemplate = this.template(this.model.toJSON());
    this.$el.html(trackTemplate);
    return this;
  }
});