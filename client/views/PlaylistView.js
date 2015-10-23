// LibraryView.js - Defines a backbone view class for the music library.
var PlaylistView = Backbone.View.extend({

  tagName: "table",

  events: {
    'click th': function() {
      this.model.playPlaylist();
    }
  },

  initialize: function() {
    this.model.on('change', this.render, this);
    this.render();
  },

  render: function() {
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    this.$el.children().detach();
    this.$el.html('<br><th>' + this.model.get('name') + '</th>').append(
      this.model.get('songs').map(function(song) {
        return new PlaylistEntryView({model: song}).render();
      })
    );
    return this.$el;
  }

});
