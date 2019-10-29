import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';

import { Card, Icon } from 'antd';
import { Bar  } from 'react-chartjs-2';
// App component - represents the whole app
class Histogram extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const data = {
      labels: [
        'Red',
        'Blue',
        'Yellow'
      ],
      datasets: [{
        data: [300, 50, 100],
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56'
        ],
        hoverBackgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56'
        ]
      }]
    };
    const options = { scales: { yAxes: [{ ticks: { beginAtZero: true } }] } }
    return(
      <Card size="small" title={this.props.title} extra={<Icon type="setting" />} className="viz-container">
      <Bar data={data} options = {options} />
      </Card>
    );

  } // end of render
} // end of class

export default withTracker((props) => {
  return {

  };
})(Histogram);
