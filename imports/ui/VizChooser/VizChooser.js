import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import './VizChooser.css';
import { Avatar, Card } from 'antd';
import 'antd/dist/antd.css';

class VizChooser extends Component {

  constructor(props) {
    super(props);
    this.state = {
      nam: "",
    };
  }

  render() {
    return(
      <Card className="viz-chooser">
      <Card.Grid className="grid-card"><Avatar className="icon" shape="square" size="large" icon="area-chart"  /><h1>Area Chart </h1></Card.Grid>
      <Card.Grid className="grid-card"><Avatar className="icon" shape="square" size="large" icon="pie-chart"   /><h1>Pie Chart  </h1></Card.Grid>
      <Card.Grid className="grid-card"><Avatar className="icon" shape="square" size="large" icon="bar-chart"   /><h1>Bar Chart  </h1></Card.Grid>
      <Card.Grid className="grid-card"><Avatar className="icon" shape="square" size="large" icon="dot-chart"   /><h1>Dot Chart  </h1></Card.Grid>
      <Card.Grid className="grid-card"><Avatar className="icon" shape="square" size="large" icon="line-chart"  /><h1>Line Chart </h1></Card.Grid>
      <Card.Grid className="grid-card"><Avatar className="icon" shape="square" size="large" icon="radar-chart" /><h1>Radar Chart</h1></Card.Grid>
      <Card.Grid className="grid-card"><Avatar className="icon" shape="square" size="large" icon="heat-map"    /><h1>Heat Map   </h1></Card.Grid>
      </Card>
    );
  } // end of render
} // end of class

export default withTracker((props) => {
  return {
    a:"abc",
  };
})(VizChooser);
