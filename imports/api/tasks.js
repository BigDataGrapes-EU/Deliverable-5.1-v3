
import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check, Match} from 'meteor/check';

export const Climate = new Mongo.Collection("climate");

Meteor.methods({
  // 'load.data'(vac){
  //   check(vac, Object);
  //   let data = new ServerHelpers().getVacatures(vac);
  //   //dispatch(fetchSavesServer()); // We'll do the "Saves" feature later.
  //   Coordinates["lat"] = vac.geo[0].replace(/\n|\r/g, "");
  //   Coordinates["lng"] = vac.geo[1].replace(/\n|\r/g, "");
  //   // Insert data into collection.
  //   // TODO: This must go inside ASYNC cascade callbacks, to avoid locking the thread.
  //   _.forEach(data.vacatures, function(d){
  //     try{Vacatures.insert(d);} catch(e){}
  //   });
  //   _.forEach(data.generalCompetenceList, function(d){
  //     try{Competences.insert(d);} catch(e){}
  //   });
  //   _.forEach(data.postcodes, function(c){
  //     try{Postcodes.insert(c);} catch(e){}
  //   });
  //   _.forEach(data.ervaring, function(c){
  //     try{Ervaring.insert(c);} catch(e){}
  //   });
  //   _.forEach(data.contract, function(c){
  //     try{Contract.insert(c);} catch(e){}
  //   });
  //   _.forEach(data.regime, function(c){
  //     try{Regime.insert(c);} catch(e){}
  //   });
  //   _.forEach(data.diploma, function (c) {
  //     try{Diploma.insert(c);} catch(e){}
  //   })
  //
  // },
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
