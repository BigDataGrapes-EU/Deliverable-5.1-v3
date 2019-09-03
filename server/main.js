import { Meteor } from 'meteor/meteor';

const Climate = new Mongo.Collection("climate");
const SensoryAnalysis = new Mongo.Collection('sensoryAnalysis')

Meteor.startup(() => {

  Climate.remove({}); // On startup clean database.
  SensoryAnalysis.remove({});

  Papa.parse(Assets.getText('climate.csv'), {
    header: true,
    dynamicTyping: true,
    download: true,
    step: function(row) {
      Climate.insert(row.data[0]);
    }
  });

  Papa.parse(Assets.getText('sensory_analysis.csv'), {
    header: true,
    dynamicTyping: true,
    download: true,
    step: function(row) {
      SensoryAnalysis.insert(row.data[0]);
    }
  });

});
