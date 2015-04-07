TrelloClone.Routers.BoardRouter = Backbone.Router.extend({
  initialize: function(options) {
    this.$el = options.element;
    this.collection = options.collection;
  },

  routes: {
    '' : 'boardsIndex',
    'api/boards/new' : 'new',
    'api/boards/:id' : 'show'
  },

  boardsIndex: function () {
    var index = new TrelloClone.Views.BoardsIndex({
      collection: this.collection
    });
    this.collection.fetch();
    this.$el.html(index.render().$el);
  },

  new: function () {
    var newBoard = new TrelloClone.Models.Board();
    var formView = new TrelloClone.Views.BoardForm({
      collection: this.collection,
      model: newBoard
    });

    this._swapView(formView);
  },

  show: function (id) {
    var board = this.collection.getOrFetch(id);
    var showView = new TrelloClone.Views.BoardShow({
      model: board, collection: this.collection
    });
    this._swapView(showView);
  },

  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$el.html(view.render().$el);
  }
});
