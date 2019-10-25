import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';

import { Card, Icon } from 'antd';
import {Scatter} from 'react-chartjs-2';
// App component - represents the whole app
class Scatterplot extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <Card title={this.props.title} extra={<Icon type="setting" />} className="viz-container">
        <Scatter data={this.props.data} width={100} height={50} options={{ maintainAspectRatio: true,
          scales: {
            xAxes: [{
              scaleLabel:{
                display: true,
                labelString: "Penman evapotranspiration (mm)"
              }
              // stacked: true
            }],
            yAxes: [{
              scaleLabel:{
                display: true,
                labelString: "Mean temperature ('C)"
              }
              // stacked: true
            }]
          }
        }} />
    </Card>
    );

  } // end of render
} // end of class

export default withTracker((props) => {
  return {

  };
})(Scatterplot);
