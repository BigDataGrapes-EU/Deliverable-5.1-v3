import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import './style.css';

import {Line} from 'react-chartjs-2';

import 'chartjs-plugin-zoom';
// import * as zoom from 'chartjs-plugin-zoom'

// App component - represents the whole app
class Timeseries extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let plugins = {
      zoom: {
        pan: {
          enabled: true,
          mode: 'xy'
        },
        zoom: {
          enabled: true,
          mode: 'xy'
        }
      }

      // zoom: {
      //   pan: {
      //     enabled: true,
      //         mode:'xy'
      //   },
      //   zoom: {
      //     enabled: true,
      //         mode:'xy'
      //   }
      // }
    }
    return(
      <div className="container">
        <h1>{this.props.title}</h1>
        <Line data={this.props.data} width={100} height={50} options={{ maintainAspectRatio: true, plugins:{
            zoom: {
              pan: {
                enabled: false,
                mode: 'xy'
              },
              zoom: {
                enabled: true,
                drag: true,
                // drag: {
                // 	 borderColor: 'rgba(225,225,225,0.3)'
                // 	 borderWidth: 5,
                // 	 backgroundColor: 'rgb(225,225,225)'
                // },
                mode: 'x'
              }
            }
          }}} />
      </div>
    );

  //options={{ maintainAspectRatio: true}}

  } // end of render
} // end of class

export default withTracker((props) => {
  return {

  };
})(Timeseries);
