Cards = new Mongo.Collection('cards');

Meteor.methods({
  createCard: function(title, text){
    Cards.insert({ title: title, text: text, createdAt: new Date() });
  }
});
