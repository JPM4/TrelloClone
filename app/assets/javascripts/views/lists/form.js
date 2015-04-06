TrelloClone.Views.ListForm = Backbone.CompositeView.extend({
  template: JST['lists/form'],

  events: {
    'click .new-list': 'addListFormSubview'
  },

  addListFormSubview: function () {
    var form = $("<input type='text' name='name'>");
    this.$el.html(form);
  },

  render: function() {
    var renderedContent = this.template;
    this.$el.html(renderedContent);
    return this;
  }
});
