// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var PlaylistEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<button class="remove-from-playlist">Remove from playlist</button><td>(<%= artist %>)</td><td><%= title %></td>'),

  events: {
    'click td': function() {
      this.model.enqueue();
    },
    'click button': function() {
      this.model.removeFromPlaylist();
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
