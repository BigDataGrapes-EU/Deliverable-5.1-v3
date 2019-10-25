
import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check, Match} from 'meteor/check';
import _ from 'lodash'

export const Dataset = new Mongo.Collection("Dataset", {connection: null});

Meteor.methods({
  'load.data'(data){
    Dataset.remove({});
    _.forEach(data, function(d){
      try{Dataset.insert(d);} catch(e){}
    });
  },
  // 'setJobRadius'(r){
  //   JobRadius.set(r);
  // },
  // 'SaveState.insert'(insertObject){
  //   SaveState.insert(insertObject);
  // },
  // 'SaveState.remove'(removeName) {
  //   SaveState.remove({saveName: removeName});
  // }
});
