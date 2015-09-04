// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var PlaylistEntryView = Backbone.View.extend({

  initialize: function() {
    this.render();
    this.model.on('change', this.render, this);
  },

  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td class="title"><%= title %></td> \
                        <td><%= playCount %></td><td><button id="removeFromPlaylist">Remove</button></td>'),

  events: {
    'click .title': function() {
      //POINT OF INTEREST!!!!
      console.dir(this);
      // this.model.play();
      this.model.enqueue();
    },
    'click .#removeFromPlaylist': function() {
      //POINT OF INTEREST!!!!
      console.dir(this);
      // this.model.play();
      var currentLists = this.model.get('playlists');
      var cutPoint = currentLists.indexOf()
    }
  },

  render: function(){
    // debugger;
    return this.$el.html(this.template(this.model.attributes));
  }

});
