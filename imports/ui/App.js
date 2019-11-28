import React, { Component } from 'react';
import './App.css';
import './VizComponents/Components.css';
import _ from 'lodash'
/****** ------------------ ******/
const Fragment = React.Fragment;
import Barchart           from './VizComponents/Barchart/Barchart.js';
import Histogram          from './VizComponents/Histogram/Histogram.js';
import Radarchart         from './VizComponents/Radarchart/Radarchart.js';
import Scatterplot        from './VizComponents/Scatterplot/Scatterplot.js';
import Piechart           from './VizComponents/Piechart/Piechart.js';
import AreaChart          from './VizComponents/Areachart/Areachart.js';
import Timeseries         from './VizComponents/Timeseries/Timeseries.js';
import DataTable          from './VizComponents/Datatable/Datatable.js';
import Linechart          from './VizComponents/Linechart/Linechart.js'
import Heatmap            from './VizComponents/Heatmap/Heatmap.js'
import TimeData           from './VizComponents/Timedata/Timedata.js'
import ProgressCircle     from './VizComponents/Progresscircle/Progresscircle.js'
import ParallelCoordinate from './VizComponents/Pcoordinates/Pcoordinates.js';

import VegaLiteDemo from './VizComponents/Vegalitedemo/Vegalitedemo.js'

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

  removeComponent(key) {
    let array = this.state.visComponents;
    let items = _.remove(array, function(item){ return item.key === key });
    this.setState({visComponents: items});
  }

  addComponent = (name) => {

    /** Temp logic **/
    let columns = [];
    if(!_.isEmpty(this.props.Dataset)) {
      _.forEach(_.keys(this.props.Dataset[0]), function(name,i){
        if(name != "_id") columns.push({ title: name, dataIndex: name, key: name, width: 100 });
      });
      this.setState({columns: columns})
    }
    /** Temp logic **/

    let list = this.state.visComponents;
    switch (name) {
      case "area":       list.push(<AreaChart   title="Area Chart"  data = {this.props.Dataset} columns = {columns} />); break;
      case "pie":        list.push(<Piechart    title="Pie Chart"  data = {this.props.Dataset} columns = {columns} />); break;
      case "bar":        list.push(<Barchart    id={"vc"+list.length} key={"vc"+list.length} removeComponent={this.removeComponent.bind(this) } title="Bar Chart"  data = {this.props.Dataset} columns = {columns} />); break;
      case "scatter":    list.push(<Scatterplot title="Scatterplot"  data = {this.props.Dataset} columns = {columns} />); break;
      case "line":       list.push(<Linechart   title="Line Chart"  data = {this.props.Dataset} columns = {columns} />); break;
      case "radar":      list.push(<Radarchart  title="Radar Chart"  data = {this.props.Dataset} columns = {columns} />); break;
      case "pcircle":    list.push(<ProgressCircle title="Progress"  data = {this.props.Dataset} columns = {columns} />); break;
      case "timeseries": list.push(<Timeseries     title="Timeseries"  data = {this.props.Dataset} columns = {columns} />); break;
      case "timedata":   list.push(<TimeData       title="Data overtime"  data = {this.props.Dataset} columns = {columns} />); break;
      case "heatmap":    list.push(<Heatmap        title="Heatmap"  data = {this.props.Dataset} columns = {columns} />); break;
      case "datat":      list.push(<DataTable data = {this.props.Dataset} columns = {columns} title="Data Explorer" />); break;
      case "pcoords":    list.push(<ParallelCoordinate title="Parallel Coordinates" data = {this.props.Dataset} columns = {columns} />); break;
      case "vega":  list.push(<VegaLiteDemo data = {this.props.Dataset} columns = {columns} title="Vega-Lite Demo" />); break;
    }
    this.setState({visComponents: list});
  }

  renderComponents() {
    return this.state.visComponents;
  }

  render() {
    // <div className="options-sider"></div>
    console.log(this.state.visComponents);
    return(
      <Fragment>
        <div className="data-sider"><DataDrop/><VizChooser selectedComp = {this.addComponent }/></div>
        <div className="component-container">{this.renderComponents()}</div>
      </Fragment>
    );
  } // end of render
} // end of class

export default withTracker((props) => {
  return {
    Dataset: Dataset.find({}).fetch(),
  };
})(App);
