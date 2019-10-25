import React, { Component } from 'react';

import './App.css';
import './Components.css';
import _ from 'lodash'

const Fragment = React.Fragment;
import Barchart    from '/imports/ui/barchart/barchart.js';
import Radarchart  from '/imports/ui/radarchart/radarchart.js';
import Scatterplot from '/imports/ui/scatterplot/scatterplot.js';
import Piechart    from '/imports/ui/piechart/piechart.js';
import Timeseries  from '/imports/ui/timeseries/timeseries.js';
import DataTable   from '/imports/ui/DataTable/DataTable.js';
import LineChart   from '/imports/ui/LineChart/LineChart.js'
import Heatmap     from '/imports/ui/Heatmap/Heatmap.js'
import ProgressCircle from '/imports/ui/ProgressCircle/ProgressCircle.js'
import ParallelCoordinate from '/imports/ui/ParallelCoordinate/ParallelCoordinate.js';

import { Dataset } from '/imports/api/tasks.js';

import DataDrop    from '/imports/ui/DataDrop/DataDrop.js'
import VizChooser  from '/imports/ui/VizChooser/VizChooser.js'

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
        columns.push({ title: name, dataIndex: name, key: name });
      });
      content = <div className="component-container"><DataTable data = {this.props.Dataset} columns = {columns} title="Data Explorer" /><Heatmap title="HeatMap"/><ProgressCircle title="Progress Circle"/><ParallelCoordinate title="Parallel Coordinates"/></div>;
      }
      // <Barchart           title="Bar Chart" />
      // <Radarchart         title="Radar Chart" />
      // <Scatterplot        title="Scartterplot" />
      // <Piechart           title="Pie Chart" />
      // <Timeseries         title="Timeseries" />
      // <LineChart          title="Line Chart" />
      // <VizChooser/>
      // </Fragment>
      return(
        <div className="layout">
          <div className="data-sider">
            <DataDrop/>
            <VizChooser/>
          </div>
          <div className="main-content">
            {content}
          </div>
          <div className="options-sider"></div>
        </div>
      );
    } // end of render
  } // end of class

  export default withTracker((props) => {
    return {
      Dataset: Dataset.find({}).fetch(),
    };
  })(App);
