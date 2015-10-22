// SongQueue.js - Defines a backbone model class for the song queue.
var PlayListList = Backbone.Collection.extend({
  model: Playlist,

  addToPlaylist: function(song, playlistName) {
    var targetPlaylist = this.where({name: playlistName});
    if (targetPlaylist.length) {
      targetPlaylist[0].addToPlaylist(song);
    } else {
      this.add(new Playlist( {
        name: playlistName,
        songs: [song]
      }));
    }
  },

  removeFromPlaylist: function(song, playlistName) {
    var targetPlaylist = this.where({name: playlistName});
    targetPlaylist[0].removeFromPlaylist(song);
  }

});
