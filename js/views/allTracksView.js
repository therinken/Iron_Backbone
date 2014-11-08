var AllTracksView = Backbone.View.extend({
    tagName: 'ol',
    initialize: function() {
        _.bindAll(this, "render");
        var self = this;
        trackster.fetch('/tracks', {
                genres: 'ambient',
                order: 'hotness',
                limit: '5'
            },
            function(tracks, error) {
                if (error) console.log('ERROR: ', error);
                _.each(tracks, function(value, index) {
                    self.collection.add(new SingleTrack(value));
                });
                //var model = new SingleTrack({id: 'asdf'});
                //this.collection.add(model);
                //this.collection.on('add', this.render);

                self.collection.on('sync', this.render, this);
                self.render();
            }

        )

    },
    render: function() {
        this.collection.each(this.addOne, this);
        return this;
    },
    addOne: function(track) {
        var trackView = new SingleTrackView({
            model: track
        });
        this.$el.append(trackView.render().el);
    }
});
