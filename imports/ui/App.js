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
    const BarData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'My First dataset',
          backgroundColor: 'rgba(255,99,132,0.2)',
          borderColor: 'rgba(255,99,132,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(255,99,132,0.4)',
          hoverBorderColor: 'rgba(255,99,132,1)',
          data: [65, 59, 80, 81, 56, 55, 40]
        }
      ]
    };
    return(
    <div className="container">
    <Barchart data={BarData}></Barchart>
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
