import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import './VizChooser.css';
import { Avatar, Card } from 'antd';
import 'antd/dist/antd.css';

class VizChooser extends Component {

  constructor(props) {
    super(props);
  }

  addComponent(e) {
    this.props.selectedComp(e)
  }

  render() {
    return(
      <Card className="viz-chooser" bordered={false}>
      <Card.Grid onClick={(e) => this.addComponent("area")}       className="grid-card"><Avatar className="icon" shape="square" size="large" icon="area-chart"  /><h1>Area Chart </h1></Card.Grid>
      <Card.Grid onClick={(e) => this.addComponent("pie")}        className="grid-card"><Avatar className="icon" shape="square" size="large" icon="pie-chart"   /><h1>Pie Chart </h1></Card.Grid>
      <Card.Grid onClick={(e) => this.addComponent("bar")}        className="grid-card"><Avatar className="icon" shape="square" size="large" icon="bar-chart"   /><h1>Bar Chart </h1></Card.Grid>
      <Card.Grid onClick={(e) => this.addComponent("scatter")}    className="grid-card"><Avatar className="icon" shape="square" size="large" icon="dot-chart"   /><h1>Scatterplot </h1></Card.Grid>
      <Card.Grid onClick={(e) => this.addComponent("line")}       className="grid-card"><Avatar className="icon" shape="square" size="large" icon="line-chart"  /><h1>Line Chart </h1></Card.Grid>
      <Card.Grid onClick={(e) => this.addComponent("radar")}      className="grid-card"><Avatar className="icon" shape="square" size="large" icon="radar-chart" /><h1>Radar Chart </h1></Card.Grid>
      <Card.Grid onClick={(e) => this.addComponent("datat")}      className="grid-card"><Avatar className="icon" shape="square" size="large" icon="fund"        /><h1>Data Table </h1></Card.Grid>
      <Card.Grid onClick={(e) => this.addComponent("pcoords")}    className="grid-card"><Avatar className="icon" shape="square" size="large" icon="fund"        /><h1>P. Coords </h1></Card.Grid>
      <Card.Grid onClick={(e) => this.addComponent("pcircle")}    className="grid-card"><Avatar className="icon" shape="square" size="large" icon="fund"        /><h1>P. Circle </h1></Card.Grid>
      <Card.Grid onClick={(e) => this.addComponent("timeseries")} className="grid-card"><Avatar className="icon" shape="square" size="large" icon="fund"        /><h1>TimeSeries </h1></Card.Grid>
      <Card.Grid onClick={(e) => this.addComponent("timedata")}   className="grid-card"><Avatar className="icon" shape="square" size="large" icon="fund"        /><h1>TimeData   </h1></Card.Grid>
      <Card.Grid onClick={(e) => this.addComponent("heatmap")}    className="grid-card"><Avatar className="icon" shape="square" size="large" icon="heat-map"    /><h1>HeatMap    </h1></Card.Grid>
      <Card.Grid onClick={(e) => this.addComponent("vega")}    className="grid-card"><Avatar className="icon" shape="square" size="large" icon="fund"    /><h1>VegaLiteDemo    </h1></Card.Grid>

      </Card>
    );
  } // end of render
} // end of class

export default withTracker((props) => {
  return {
    a:"abc",
  };
})(VizChooser);
