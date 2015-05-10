Meteor.subscribe('cards');

Template.newCard.events({
  'submit form': function(e){
    e.preventDefault();
    var title = e.target.title.value;
    var text = e.target.text.value;
    Meteor.call('createCard', title, text);
  }
});
