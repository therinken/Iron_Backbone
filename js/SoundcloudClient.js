(function(window, undefined) {
    "use strict";

    var scTrackView = Backbone.View.extend({
        tagName: "div",
        className: "scTracks",
        initialize: function(opts) {
            // 1. Sometimes it will be instantiated without options, so to guard against errors:
            this.options = _.extend(
                {},
                {
                    $container: $('body')
                },
                options
            );

            // 2. Part of putting a view into its initial state is to put its element
            //    into the DOM. Its container should be configurable using an option
            //    so that a) it can be used anywhere in the app and b) it can be
            //    easily unit tested.
            this.options.$container.append(this.el);

            // 3. Render the content of the view
            this.render();
        },
        template: "<h1>{name}</h1><hr><ul><li>{}</li><li>{}</li></ul>",
        render: function(){
            this.el.innerHTML = _.template(this.template, this.options);
        }
    })

    function SoundcloudClient(options) {
        this.options = _.extend({}, options, {
            clientid: "01176e5bfd8c188335dcc943e52f1f98",
            clientkey: "1a3d85a7da1411ecce49d1b403799846"
        });

        this.init();
    }

    SoundcloudClient.prototype.queryAPI = function(search_term, coordinates) {
        <script>
var processTracks = function(tracks) {
  for (var i = 0; i < tracks.length; i++) {
    console.log(track.title);
  }
};
</script>
        var url = [
            "https://api.soundcloud.com/tracks.json",
            "?client_id=",
            this.options.clientid,
            "&client_secret=",
            this.options.clientkey,
            "&callback=",
            search_term
        ];

        return $.get(url.join('')).then(function(){
            return arguments[0];
        });
    };

  /*  SoundcloudClient.prototype.getGeo = function() {
        var promise = $.Deferred();
        navigator.geolocation.getCurrentPosition(function(){
            promise.resolve(arguments[0]);
        });
        return promise;
    };

    SoundcloudClient.prototype.makeSoundcloudRequest = function(coordinates) {
        $.when(
            this.queryAPI("sushi", coordinates)
        ).then(function(){
            if(
                !arguments[0] ||
                !arguments[0].response ||
                !arguments[0].response.venues ||
                !(arguments[0].response.venues instanceof Array)
            ){
                throw new Error("array of venues not piped from queryAPI");
            }

            arguments[0].response.venues.forEach(function(data){
                new fsVenueView(data);
            })

        })
    };

    SoundcloudClient.prototype.init = function() {
        var self = this;
        this.getGeo().then(function(coordinates){

            self.makeFoursquareRequest(coordinates);

        })
    };

    window.SoundcloudClient = SoundcloudClient;
})(window, undefined);
*/