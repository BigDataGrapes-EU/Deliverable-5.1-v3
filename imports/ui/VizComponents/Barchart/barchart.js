import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';

import { Button, Card, Icon } from 'antd';
import { Bar  } from 'react-chartjs-2';
import { Resizable, ResizableBox } from 'react-resizable';
import 'react-resizable/css/styles.css';

const ButtonGroup = Button.Group;
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

  changeComponentSize() { if(this.state.size == "small" ) { this.setState({ size: "large", icon: "fullscreen-exit"}); } else { this.setState({ size: "small", icon: "fullscreen"});}}
  editComponent()   {}
  removeComponent() {}

  extraTools() {
    return <ButtonGroup>
      <Button type="dashed" size="small" onClick={(e) => this.changeComponentSize()} icon={this.state.icon} />
      <Button type="dashed" size="small" icon="edit"  />
      <Button type="danger" size="small" icon="close" />
    </ButtonGroup>;
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
    let title = this.props.title;
    if(title == undefined) title = "This is a bar chart.";
    return(
      <Card className="viz-container" bordered={false} size="small" extra={this.extraTools()} title={title} style={style}>

        <Bar data={data} options = {options} />
      </Card>
    );

  } // end of render
} // end of class

export default withTracker((props) => {
  return {

  };
})(Barchart);
