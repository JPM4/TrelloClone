window.TrelloClone = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var boards = new TrelloClone.Collections.Boards();
    // boards.fetch();
    new TrelloClone.Routers.BoardRouter({
      collection: boards, element: $('#main')
      });
    Backbone.history.start();
  }
};

$(document).ready(function(){
  // if (TrelloClone.loggedIn) {
    TrelloClone.initialize();
  // }
});
