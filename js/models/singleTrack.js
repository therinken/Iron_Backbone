var SingleTrack = Backbone.Model.extend({
    validate: function(attrs) {
        if (!$.trim(attrs.title)) {
            return 'A Track requires a valid title, buddy.';
        }
    },
    initialize: function() {
        var self = this;
    }
});
