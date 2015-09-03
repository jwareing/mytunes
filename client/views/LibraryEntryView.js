// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  initialize: function() {
    this.model.on('change', this.render, this);
  },

  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td class="title"><%= title %></td> \
                        <td><%= playCount %></td><td><button id="addToPlaylist">ADD TO PLAYLIST</button></td>'),

  events: {
    'click .title': function() {
      //POINT OF INTEREST!!!!
      console.dir(this);
      // this.model.play();
      this.model.enqueue();
    },

    'click button' : function() {
      this.model.playlistAdd();
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
