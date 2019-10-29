import React, { Component } from 'react';
import './App.css';
import './VizComponents/Components.css';
import _ from 'lodash'
/****** ------------------ ******/
const Fragment = React.Fragment;
import Barchart           from './VizComponents/Barchart/Barchart.js';
import Histogram          from './VizComponents/Histogram/Histogram.js';
import Radarchart         from './VizComponents/Radarchart/radarchart.js';
import Scatterplot        from './VizComponents/Scatterplot/scatterplot.js';
import Piechart           from './VizComponents/Piechart/Piechart.js';
import AreaChart          from './VizComponents/Areachart/Areachart.js';
import Timeseries         from './VizComponents/Timeseries/Timeseries.js';
import DataTable          from './VizComponents/DataTable/DataTable.js';
import LineChart          from './VizComponents/LineChart/LineChart.js'
import Heatmap            from './VizComponents/Heatmap/Heatmap.js'
import TimeData           from './VizComponents/TimeData/TimeData.js'
import ProgressCircle     from './VizComponents/ProgressCircle/ProgressCircle.js'
import ParallelCoordinate from './VizComponents/ParallelCoordinate/ParallelCoordinate.js';
/****** ------------------ ******/
import DataDrop    from './DataDrop/DataDrop.js'
import VizChooser  from './VizChooser/VizChooser.js'
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

      _.forEach(_.keys(this.props.Dataset[0]), function(name,i){
        if(name != "_id") columns.push({ title: name, dataIndex: name, key: name, width: 100 });
      });

      content = <div className="component-container">
                <DataTable data = {this.props.Dataset} columns = {columns} title="Data Explorer" />
                <Heatmap            size="small" title="HeatMap"/>
                <ProgressCircle     size="small" title="Progress Circle"/>
                <ParallelCoordinate size="small" title="Parallel Coordinates"/>
                <Barchart    size="small" title="Bar Chart"   />
                <Histogram   size="small" title="Histogram"   />
                <Radarchart  size="small" title="Radar Chart" />
                <Scatterplot size="small" title="Scartterplot"/>
                <Piechart    size="small" title="Pie Chart"   />
                <Timeseries  size="small" title="Timeseries"  />
                <LineChart   size="small" title="Line Chart"  />
                <AreaChart   size="small" title="Area Chart"  />
                <TimeData    size="small" title="Time Data"   />
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
