var SingleTrackView = Backbone.View.extend({

    tagName: 'li',
    template: _.template($('#trackElement').html()),

    initialize: function() {},

    render: function() {
        var template = this.template(this.model.toJSON());
        this.$el.html(template);
        return this;
    }
});
