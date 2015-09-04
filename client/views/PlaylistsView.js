var PlayListsView = Backbone.View.extend({

  tagName: 'table',
  initialize: function(){

    this.allPlaylists = [];

    this.render();

    var context = this;

    this.collection.on('playlistAdd', function(song){
      //check if playlists of current song contain something
      console.dir(song.get('playlists'));
      var grumpyGuses = song.get('playlists');
      var existingPlaylists = context.allPlaylists;
      for (var i = 0; i < grumpyGuses.length; i++){
        if (existingPlaylists.indexOf(grumpyGuses[i]) === -1){
          existingPlaylists.push(grumpyGuses[i]);
          context.render();
        }
      }
    },this);


  },

  // var newView = new PlaylistView({collection: this.model.get('library'), 
  //   playlistName: existingPlaylists[i]})




  render: function() {
    this.$el.children().detach();
    var context = this;


    this.$el.html('<th>All Playlists</th>').append(
      this.allPlaylists.map(function(name) {
        return new PlaylistView({collection: context.collection, playlistName: name}).render();
      })
    );
    return this.$el;
  }

});