TrelloClone.Views.BoardsIndex = Backbone.View.extend({
  initialize: function(options) {
    this.listenTo(this.collection, 'sync', this.render.bind(this));
  },

  template: JST['boards/index'],

  tagName: 'ul',

  render: function() {
    var content = this.template({ boards: this.collection });
    this.$el.html(content);
    return this;
  }


});
