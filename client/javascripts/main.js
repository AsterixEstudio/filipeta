Meteor.subscribe('cards');

Template.cards.helpers({
  cards: function(){
    return Cards.find({}, { sort: {createdAt: -1} });
  }
});

Template.newCard.events({
  'submit form': function(e){
    e.preventDefault();
    var title = e.target.title.value;
    var text = e.target.text.value;
    e.target.reset();
    Meteor.call('createCard', title, text);
  }
});

Template.registerHelper('formatDate', function(date){
  return moment(date).format('DD/MM/YYYY');
});
