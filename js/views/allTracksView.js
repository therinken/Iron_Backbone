window.App = {
    Models: {},
    Collections: {},
    Views: {}
};


App.Views.Tracks = Backbone.View.extend({
    tagName: 'ol',
    initialize: function() {
        var tracks = new App.Collections.Tracks();
        tracks.fetch({
            data: {
                format: 'json',
                client_id: '9f71c1134013b218057ea215865270fc',
                genres: 'ambient',
                order: 'hotness',
                limit: '5'
            }
        });

        var app = new App.Views.Tracks({
            collection: tracks
        });

        $('.tracks').html(app.render().el);
        //var model = new App.Models.Track({id: 'asdf'});
        //this.collection.add(model);
        //this.collection.on('add', this.render);

        this.collection.on('sync', this.render, this);
    },
    render: function() {
        this.$el.empty();
        console.log('collection: ', this.collection);
        this.collection.each(this.addOne, this);
        return this;
    },
    addOne: function(track) {
        console.log('model: ', track);
        var trackView = new App.Views.Track({
            model: track
        });
        this.$el.append(trackView.render().el);
    }
});
