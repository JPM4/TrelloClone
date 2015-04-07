TrelloClone.Views.BoardsIndex = Backbone.View.extend({
  initialize: function(options) {
    this.listenTo(this.collection, 'sync remove reset', this.render.bind(this));
  },

  events: {
    'click .delete' : 'destroyBoard'
  },

  template: JST['boards/index'],

  tagName: 'ul',

  render: function() {
    var content = this.template({ boards: this.collection });
    this.$el.html(content);
    return this;
  },

  destroyBoard: function(event) {
    var $target = $(event.currentTarget);
    var board = this.collection.get($target.attr("data-id"));
    board.destroy();
  }


});
