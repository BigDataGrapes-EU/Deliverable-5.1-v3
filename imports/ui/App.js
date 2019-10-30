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
      dataReady: false,
      visComponents: [],
      columns: [],
    };
  }

  addComponent = (name) => {
    // this.setState({message: childData})
    let list = this.state.visComponents;
    switch (name) {
      case "area":       list.push(<AreaChart     />); break;
      case "pie":        list.push(<Piechart      />); break;
      case "bar":        list.push(<Barchart      />); break;
      case "scatter":    list.push(<Scatterplot   />); break;
      case "line":       list.push(<LineChart     />); break;
      case "radar":      list.push(<Radarchart    />); break;
      case "pcircle":    list.push(<ProgressCircle/>); break;
      case "timeseries": list.push(<Timeseries    />); break;
      case "timedata":   list.push(<TimeData      />); break;
      case "heatmap":    list.push(<Heatmap       />); break;
      case "datat":      list.push(<DataTable data = {this.props.Dataset} columns = {this.state.columns} title="Data Explorer" />); break;
      case "pcoords":    list.push(<ParallelCoordinate />); break;
    }
    /** Temp logic **/
    this.setState({visComponents: list});
    if(!_.isEmpty(this.props.Dataset)) {
      _.forEach(_.keys(this.props.Dataset[0]), function(name,i){
        if(name != "_id") columns.push({ title: name, dataIndex: name, key: name, width: 100 });
      });
      this.setState({columns: columns})
    }
    /** Temp logic **/
  }

  renderComponents() {
    return this.state.visComponents;
  }

  render() {
    return(
      <Fragment>
        <div className="data-sider"><DataDrop/> <VizChooser selectedComp = {this.addComponent }/></div>
        <div className="component-container">{this.renderComponents()}</div>
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
