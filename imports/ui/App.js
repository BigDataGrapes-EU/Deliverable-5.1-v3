import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import '/imports/ui/App.css';;
import Barchart    from '/imports/ui/barchart/barchart.js'
/* Import React Components */
import { Climate } from '/imports/api/tasks.js';

class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.Climate);
    return(
    <div className="container">
    <Barchart></Barchart>
    <h1>Wind:</h1>
    <h1>Temperature:</h1>
    <h1>Humidity:</h1>
    <h1>Soil:</h1>
    </div>);
  } // end of render
} // end of class

export default withTracker((props) => {
  return {
    Climate: Climate.find({}).fetch()
  };
})(App);
