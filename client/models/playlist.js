// SongQueue.js - Defines a backbone model class for the song queue.
var Playlist = Backbone.Model.extend({

  defaults: {
    name: 'New playlist',
    songs: []
  },

  initialize: function() {
  },

  addToPlaylist: function(song) {
    var songsArr = this.get('songs').slice();
    if (!_.contains(songsArr, song)) {
      songsArr.push(song);
      this.set('songs', songsArr);
    }
  },

  playPlaylist: function() {
    this.trigger('playPlaylist', this);
  },

  removeFromPlaylist: function(song) {
    var songsArray = this.get('songs').slice();
    songsArray.splice(songsArray.indexOf(song), 1);
    this.set('songs', songsArray);
  }

});
