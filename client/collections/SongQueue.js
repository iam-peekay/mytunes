// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function() {
    this.on('add', this.checkAdd, this);
    this.on('ended', this.removeFirst, this);
    this.on('reset', this.checkReset, this);
    this.on('dequeue', function(song) {
      this.removeClicked(song);
    }, this);
  },

  checkAdd: function() {
    if (this.length === 1) {
      this.playFirst();
    }
  },

  checkReset: function() {
    if (this.length >= 1) {
      this.playFirst();
    }
  },

  removeFirst: function() {
    this.remove(this.at(0));
    if (this.length > 0) {
      this.playFirst();
    }
  },

  removeClicked: function(song) {
    this.remove(song);
    if (this.length > 0) {
      this.playFirst();
    }
  },

  playFirst: function() {
    this.at(0).play();
  }

});
