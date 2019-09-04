import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import './style.css';

import {Bar} from 'react-chartjs-2';
// App component - represents the whole app
class Barchart extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="container">
        <h1>{this.props.title}</h1>
        <Bar data={this.props.data} width={100} height={50} options={{ maintainAspectRatio: true,
          scales: {
            xAxes: [{
              scaleLabel:{
                display: true,
                labelString: "Years"
              }
              // stacked: true
            }],
            yAxes: [{
              scaleLabel:{
                display: true,
                labelString: "Available data points"
              }
              // stacked: true
            }]
          }
          // pan: {
          //   enabled: true,
          //   mode: "x",
          //   speed: 10,
          //   threshold: 10
          // },
          // zoom: {
          //   enabled: true,
          //   drag: false,
          //   mode: "x",
          //   limits: {
          //     max: 10,
          //     min: 0.5
          //   }
          // }
        }} />
      </div>
    );

  } // end of render
} // end of class

export default withTracker((props) => {
  return {

  };
})(Barchart);
