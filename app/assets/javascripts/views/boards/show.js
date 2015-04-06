TrelloClone.Views.BoardShow = Backbone.CompositeView.extend({


  template: JST['boards/show'],

  initialize: function(options) {
    this.addSubview("div.new-list-view", new TrelloClone.Views.ListForm());
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function () {
    var renderedContent = this.template({
      board: this.model
    });
    this.$el.html(renderedContent);
    this.attachSubviews();
    return this;
  }
});
