import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import './barchart.css';

import {Bar} from 'react-chartjs-2';
// App component - represents the whole app
class Barchart extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const data = {
      labels: [],
      datasets: []
    };
    return(
      <div className="container">
        <Bar data={data} width={100} height={50} options={{ maintainAspectRatio: false }} />
      </div>
    );

  } // end of render
} // end of class

export default withTracker((props) => {
  return {

  };
})(Barchart);
