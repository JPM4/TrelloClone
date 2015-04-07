TrelloClone.Views.ListForm = Backbone.CompositeView.extend({
  template: JST['lists/form'],

  initialize: function (options) {
    this.model = options.model;
    this.collection = options.collection;
  },

  events: {
    'click .new-list' : 'addListFormSubview',
    'submit form': 'keyEventHandler'
  },

  addListFormSubview: function () {
    var form = $("<form id='form'>");
    form.append($("<input type='text' name='title'>"));
    form.addClass("list-submit");
    this.$el.html(form);
  },

  keyEventHandler: function (event) {
    event.preventDefault();
    var title = $(event.currentTarget).find('input').val();
    this.addList(title);
  },

  addList: function (title) {
    var newList = new TrelloClone.Models.List({
      title: title,
      ord: 1,
      board_id: this.model.id
    });
    newList.save({}, {
      success: function () {
        this.model.lists().add(newList);
      }.bind(this),
      error: function (model, response, options) {
        debugger;
      }
    });
    this.render();
  },

  render: function() {
    var renderedContent = this.template;
    this.$el.html(renderedContent);
    return this;
  }
});
