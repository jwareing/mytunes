// PlaylistView.js - Defines a backbone view class for a playlist.
var PlaylistView = Backbone.View.extend({

  tagName: "tr",

  initialize: function() {
    //debugger;
    this.render();
    this.collection.on('all',this.render,this);

  },

  events: {
    'click #PlayPlaylist': function() {
      var context = this;
      console.dir(this);
      // this.model.play();
      context.collection.models.forEach(function(thing){
        if (_.contains(thing.get('playlists'),context.options.playlistName)) {
          thing.enqueue();
        }
      });
    }
  },

  render: function() {
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    var context = this;
    this.$el.children().detach();

    this.$el.html('<th class="hoverable">'+context.options.playlistName+'</th><td><button id="PlayPlaylist">PLAY ALL</button></td>').append(
      
      context.collection.map(function(song) {
        //debugger;
        if (_.contains(song.get('playlists'),context.options.playlistName)){
          return new PlaylistEntryView({model: song}).render();
        }
      })
    );
    return this.$el;
  }

});
