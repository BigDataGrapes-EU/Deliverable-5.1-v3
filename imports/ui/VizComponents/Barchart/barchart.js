import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';

import { Card, Icon } from 'antd';
import { Bar  } from 'react-chartjs-2';
import { Resizable, ResizableBox } from 'react-resizable';
import 'react-resizable/css/styles.css';

const Fragment = React.Fragment;

// App component - represents the whole app
class Barchart extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      size: "small",
      icon: "fullscreen"
    };
  }

  changeCardSize() {
    if(this.state.size == "small" ) {
      this.setState({ size: "large", icon: "fullscreen-exit"});
    } else {
      this.setState({ size: "small", icon: "fullscreen"});
    }
  }

  extraTools() {
    return <Fragment>
      <Icon onClick={(e) => this.changeCardSize()} type={this.state.icon} />
      <Icon onClick={(e) => this.changeCardSize()} type={this.state.icon} />
      <Icon onClick={(e) => this.changeCardSize()} type={this.state.icon} />
      <Icon onClick={(e) => this.changeCardSize()} type={this.state.icon} />
      <Icon onClick={(e) => this.changeCardSize()} type={this.state.icon} />
    </Fragment>
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
    let style = { gridColumn: "span 1", gridRow: "span 1" };
    if(this.state.size == "small") { style = { gridColumn: "span 1", gridRow: "span 1" }; } else { style = { gridColumn: "span 2", gridRow: "span 2" }; }
    return(
      <Card className="viz-container" size="small" title={this.props.title} extra={this.extraTools()} style={style}>
        <Bar data={data} options = {options} />
      </Card>
    );

  } // end of render
} // end of class

export default withTracker((props) => {
  return {

  };
})(Barchart);
