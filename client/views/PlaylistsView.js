var PlayListsView = Backbone.View.extend({

  tagName: 'div',
  initialize: function(){

    this.allPlaylists = [];

    this.render();

    var context = this;
    debugger;

    this.collection.on('playlistAdd', function(song){
      //check if playlists of current song contain something
      console.dir(song.get('playlists'));
      var grumpyGuses = song.get('playlists');
      var existingPlaylists = context.allPlaylists;
      for (var i = 0; i < grumpyGuses.length; i++){
        if (existingPlaylists.indexOf(grumpyGuses[i]) === -1){
          existingPlaylists.push(grumpyGuses[i]);
          debugger;
          context.render();
        }
      }
    })

  },

  // var newView = new PlaylistView({collection: this.model.get('library'), 
  //   playlistName: existingPlaylists[i]})




  render: function() {
    this.$el.children().detach();
    var context = this;


    this.$el.html('<div>All Playlists</div>').append(
      this.allPlaylists.map(function(name) {
        return new PlaylistView({collection: context.collection, playlistName: name}).render();
      })
    );
  }

});