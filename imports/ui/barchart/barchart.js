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
        <Bar data={this.props.data} width={100} height={50} options={{ maintainAspectRatio: true,scales: {
            xAxes: [{
              stacked: true
            }],
            yAxes: [{
              stacked: true
            }]
          } }} />
      </div>
    );

  } // end of render
} // end of class

export default withTracker((props) => {
  return {

  };
})(Barchart);
