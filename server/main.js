import { Meteor } from 'meteor/meteor';

const Climate = new Mongo.Collection("climate");

Meteor.startup(() => {

  Climate.remove({}); // On startup clean database.

  Papa.parse(Assets.getText('climate.csv'), {
    header: true,
    dynamicTyping: true,
    download: true,
    step: function(row) {
      Climate.insert(row.data[0]);
    }
  });

});
