// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  initialize: function() {
    this.set('playCount', 0);
    this.set('playlists',[]);
  },

  play: function() {
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
  },

  enqueue: function(){
    this.trigger('enqueue',this);
  },

  dequeue: function(){
    this.trigger('dequeue',this);
  },

  ended: function(){
    //console.log('Songs end method firing', this);
    this.set('playCount', this.get('playCount') + 1);
    this.trigger('ended',this);
  },

  playlistAdd: function(){
    var newListName = prompt("What playlist would you like to add to?");
    var changingList = this.get('playlists');
    changingList.push(newListName);
    this.set('playlists',changingList);
    this.trigger('playlistAdd',this);
  }



});
