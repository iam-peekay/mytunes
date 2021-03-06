// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<button class="add-to-playlist">Add to playlist</button><td>(<%= artist %>)</td><td><%= title %></td><td><%= timesPlayed %></td>'),

  events: {
    'click td': function() {
      this.model.enqueue();
    },
    'click button': function() {
      this.model.addToPlaylist();
    }
  },

  initialize: function() {
    this.model.on('ended', this.render, this);
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
