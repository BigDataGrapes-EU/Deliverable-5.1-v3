import React, { Component } from 'react';
import './App.css';
import './VizComponents/Components.css';
import _ from 'lodash'
/****** ------------------ ******/
const Fragment = React.Fragment;
import Barchart           from './VizComponents/Barchart/barchart.js';
import Histogram          from './VizComponents/Histogram/Histogram.js';
import Radarchart         from './VizComponents/Radarchart/radarchart.js';
import Scatterplot        from './VizComponents/Scatterplot/scatterplot.js';
import Piechart           from './VizComponents/Piechart/piechart.js';
import Timeseries         from './VizComponents/Timeseries/timeseries.js';
import DataTable          from './VizComponents/DataTable/DataTable.js';
import LineChart          from './VizComponents/LineChart/LineChart.js'
import Heatmap            from './VizComponents/Heatmap/Heatmap.js'
import ProgressCircle     from './VizComponents/ProgressCircle/ProgressCircle.js'
import ParallelCoordinate from './VizComponents/ParallelCoordinate/ParallelCoordinate.js';
/****** ------------------ ******/
import DataDrop    from '/imports/ui/DataDrop/DataDrop.js'
import VizChooser  from '/imports/ui/VizChooser/VizChooser.js'
import { Dataset } from '/imports/api/tasks.js';
import { withTracker } from 'meteor/react-meteor-data';
import { Divider, Layout, Sider } from 'antd';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      fileName: "",
      dataReady: false
    };
  }

  render() {

    let columns = [];
    let content = "";
    if(!_.isEmpty(this.props.Dataset)) {
      _.forEach(_.keys(this.props.Dataset[0]), function(name){
        columns.push({ title: name, dataIndex: name, key: name, width: 100 });
      });
      content = <div className="component-container">
                <DataTable data = {this.props.Dataset} columns = {columns} title="Data Explorer" />
                <Heatmap title="HeatMap"/>
                <ProgressCircle title="Progress Circle"/>
                <ParallelCoordinate title="Parallel Coordinates"/>
                <Barchart           title="Bar Chart" />
                <Radarchart         title="Radar Chart" />
                <Scatterplot        title="Scartterplot" />
                <Piechart           title="Pie Chart" />
                <Timeseries         title="Timeseries" />
                <LineChart          title="Line Chart" />
                </div>;
    }
    // <VizChooser/>
    // </Fragment>
    return(
      <Fragment>
      <div className="data-sider">
      <DataDrop/>
      <VizChooser/>
      </div>
      {content}
      <div className="options-sider"></div>
      </Fragment>
    );
  } // end of render
} // end of class

export default withTracker((props) => {
  return {
    Dataset: Dataset.find({}).fetch(),
  };
})(App);
