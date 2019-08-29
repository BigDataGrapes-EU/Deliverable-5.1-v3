import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import '/imports/ui/App.css';

import {Bar} from 'react-chartjs-2';

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
    <Bar data={data} width={100} height={50} options={{ maintainAspectRatio: false }} />
    </div>);
  } // end of render
} // end of class

export default withTracker(() => {
  return {};
})(App);
