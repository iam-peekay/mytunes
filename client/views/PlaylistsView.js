// LibraryView.js - Defines a backbone view class for the music library.
var PlaylistsView = Backbone.View.extend({

  tagName: "table",

  initialize: function() {
    this.collection.on('change add', this.render, this);
    this.render();
  },

  render: function() {
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    this.$el.children().detach();

    this.$el.html('<th>Playlists</th>').append(
      this.collection.map(function(playlist) {
        return new PlaylistView({model: playlist}).render();
      })
    );
  }

});
