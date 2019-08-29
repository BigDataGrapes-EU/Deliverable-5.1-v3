import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import '/imports/ui/App.css';

import { Climate } from '/imports/api/tasks.js';

import {Bar} from 'react-chartjs-2';


Chart.defaults.global.responsive = true;

const data = {
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

// App component - represents the whole app
class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const chartData = {
      labels: [],
      datasets: []
    };
    return(<div className="myChart">
    <Bar
    data={data}
    width={100}
    height={50}
    options={{
      maintainAspectRatio: false
    }}
    />
    Wind:
    Temperature:
    Humidity:
    Soil:
    </div>);
  } // end of render
} // end of class

export default withTracker(() => {
  return {};
})(App);
