window.App = {
  Models: {},
  Collections: {},
  Views: {}
};

App.Views.Track = Backbone.View.extend({
  tagName: 'li',
  template: _.template($('#trackTemplate').html()),
  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  }
});
