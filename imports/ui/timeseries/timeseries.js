import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import './style.css';

import {Line} from 'react-chartjs-2';
// App component - represents the whole app
class Timeseries extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="container">
        <h1>{this.props.title}</h1>
        <Line data={this.props.data} width={100} height={50} options={{ maintainAspectRatio: true }} />
      </div>
    );

  } // end of render
} // end of class

export default withTracker((props) => {
  return {

  };
})(Timeseries);
