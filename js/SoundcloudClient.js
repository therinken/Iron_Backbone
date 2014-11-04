(function(window, undefined) {
    "use strict";

    var fsVenueView = Backbone.View.extend({
        tagName: "div",
        className: "fsVenue",
        initialize: function(opts) {
            // 1. Sometimes it will be instantiated without options, so to guard against errors:
            this.options = _.extend(
                {},
                {
                    $container: $('body')
                },
                opts
            );

            // 2. Part of putting a view into its initial state is to put its element
            //    into the DOM. Its container should be configurable using an option
            //    so that a) it can be used anywhere in the app and b) it can be
            //    easily unit tested.
            this.options.$container.append(this.el);

            // 3. Render the content of the view
            this.render();
        },
        template: "<h1>{name}</h1><hr><ul><li>{location.lat}</li><li>{location.lng}</li></ul>",
        render: function(){
            this.el.innerHTML = _.template(this.template, this.options);
        }
    })

    function FoursquareClient(options) {
        this.options = _.extend({}, options, {
            clientid: "NLZAOKRUP1KFSRFHA1SQO3DH2214LAF0QV4UTEGMBHQG020Y",
            clientkey: "UUCRXDQ2R1YITE04WPG0CAS40UBYREIAZTX0D0JZ0A2TEUX5"
        });

        this.init();
    }

    FoursquareClient.prototype.queryAPI = function(search_term, coordinates) {
        var url = [
            "https://api.foursquare.com/v2/venues/search",
            "?client_id=",
            this.options.clientid,
            "&client_secret=",
            this.options.clientkey,
            "&v=20130815",
            "&ll=",
            coordinates.coords.latitude,
            ',',
            coordinates.coords.longitude,
            "&query=",
            search_term
        ];

        return $.get(url.join('')).then(function(){
            return arguments[0];
        });
    };

    FoursquareClient.prototype.getGeo = function() {
        var promise = $.Deferred();
        navigator.geolocation.getCurrentPosition(function(){
            promise.resolve(arguments[0]);
        });
        return promise;
    };

    FoursquareClient.prototype.makeFoursquareRequest = function(coordinates) {
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

    FoursquareClient.prototype.init = function() {
        var self = this;
        this.getGeo().then(function(coordinates){

            self.makeFoursquareRequest(coordinates);

        })
    };

    window.FoursquareClient = FoursquareClient;
})(window, undefined);
