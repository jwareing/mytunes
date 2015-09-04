// PlaylistView.js - Defines a backbone view class for a playlist.
var PlaylistView = Backbone.View.extend({

  tagName: "table",

  initialize: function() {
    //debugger;
    this.render();
    this.on('all',this.render,this);

  },

  render: function() {
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    var context = this;
    this.$el.children().detach();

    this.$el.html('<th>AHASFHASJKFHSFKJF</th>').append(
      
      context.collection.map(function(song) {
        //debugger;
        if (_.contains(song.get('playlists'),context.options.playlistName)){
          return new PlaylistEntryView({model: song}).render();
        }
      })
    );
  }

});
