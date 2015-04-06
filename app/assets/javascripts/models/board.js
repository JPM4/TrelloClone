TrelloClone.Models.Board = Backbone.Model.extend({
  urlRoot: '/api/boards',

  lists: function () {
    // uses this._lists, or creates it if it doesn't exist
    if (!this._lists) {
      this._lists = new TrelloClone.Collections.Lists();
    }

    return this._lists;
  },

  parse: function (payload) {
    // pulls out lists data and sets the collection
    if (payload.lists) {
      this.lists().set(payload.lists);
      delete payload.lists;
    }

    return payload;
  }
});
