TrelloClone.Views.BoardShow = Backbone.CompositeView.extend({

  template: JST['boards/show'],

  initialize: function(options) {
    this.addSubview("div.new-list-view", new TrelloClone.Views.ListForm({
      collection: this.collection, model: this.model
    }));
    this.listenTo(this.model, 'sync', this.render);
    this.listenTo(this.model.lists(), 'sync', this.render);
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
