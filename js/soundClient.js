(function(window, undefined) {
    "use strict";

    var scView = Backbone.View.extend({
        tagName: "div",
        className: "scTrack",
        initialize: function(opts) {
            this.options = _.extend({}, {
                    $container: $('body')
                },
                opts
            );

            this.options.$container.append(this.el);
            this.render();
        },
        template: _.template($('#trackTemplate').html()),
        render: function() {
            this.$el.innerHTML = _.template(this.template, this.options);
        }
    });

    function SoundClient(options) {
        this.options = _.extend({}, options, {
            clientid: "01176e5bfd8c188335dcc943e52f1f98"
        });

    }

    SoundClient.prototype.queryAPI = function(searchMe) {
        var url = [
            "https://api.soundcloud.com/tracks",
            "?client_id=",
            this.options.clientid,
            searchMe
        ];

        return $.get(url.join('')).then(function() {
            return arguments[0];
        });
    };

    SoundClient.prototype.makeRequest = function(Processtracks) {
        $.when(
            this.queryAPI("ambient")
        ).then(function() {
            if (!arguments[0] ||
                !arguments[0].Processtracks ||
                !arguments[0].Processtracks.genre ||
                !(arguments[0].Processtracks.genre instanceof Array)
            ) {
                throw new Error("sumting wrong bra");
            }

            arguments[0].Processtracks.genre.forEach(function(data) {
                new scView(data);
            })
        })
    };

    window.SoundClient = SoundClient;
});
(window, undefined);
