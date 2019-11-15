import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';

import _ from 'lodash'
import { Button, Icon, Empty, Select, Tabs } from 'antd';
import { Resizable, ResizableBox } from 'react-resizable';
import 'react-resizable/css/styles.css';
import 'babel-polyfill';

const ButtonGroup = Button.Group;
const Fragment = React.Fragment;
const { TabPane } = Tabs;
const { Option } = Select;

import VegaLite from 'react-vega-lite';

// App component - represents the whole app
class Vegalitedemo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      size: "small",
      icon: "fullscreen",
      editMode: true,
      selectedData: this.props.columns[0].title,
      data: {},
      options: { scales: { yAxes: [{ ticks: { beginAtZero: true } }] }, legend: { display: false }, tooltips: { callbacks: { label: function(tooltipItem) { return tooltipItem.yLabel; } } } },
    };
  }

  isEmpty(obj) {
    return Object.keys(obj).length === 0;
  }

  changeComponentSize() { if(this.state.size == "small" ) { this.setState({ size: "large", icon: "fullscreen-exit"}); } else { this.setState({ size: "small", icon: "fullscreen"});}}

  dataChange(e) { console.log(e); this.setState({selectedData: e}); }

  handleChange() {}
  toggleEdit(){ this.setState({editMode: !this.state.editMode}); }

  columnSelection() {
    const children = [];
    _.forEach(this.props.columns, function(e){
      children.push(<Option key={e.title}>{e.title}</Option>);
    });
    return children;
  }

  showContent() {
    let graph = "";
    if(this.state.editMode) {
    } else {

    }
    return graph;
  }

  extraTools() {
    return <ButtonGroup>
      <Button type="dashed" size="small" onClick={(e) => this.changeComponentSize()} icon={this.state.icon} />
      <Button type="dashed" size="small" onClick={(e) => this.toggleEdit() } icon="edit"  />
      <Button type="danger" size="small" icon="close" />
    </ButtonGroup>;
  }



  render() {
    let style = { gridColumn: "span 1", gridRow: "span 1" };
    if(this.state.size == "small") { style = { gridColumn: "span 1", gridRow: "span 1" }; } else { style = { gridColumn: "span 2", gridRow: "span 2" }; }
    let selectedData = this.state.selectedData;
    let showGraph, showEdit;
    if(this.state.editMode) { showEdit = {display: "block"}; showGraph = {display: "none"}; } else {showEdit = {display: "none"}; showGraph = {display: "flex"}; }

    const spec = {
      "description": "A simple bar chart with embedded data.",
      "mark": "bar",
      "encoding": {
        "x": {"field": "a", "type": "ordinal"},
        "y": {"field": "b", "type": "quantitative"}
      }
    };

    const barData = {
      "values": [
        {"a": "A","b": 20}, {"a": "B","b": 34}, {"a": "C","b": 55},
        {"a": "D","b": 19}, {"a": "E","b": 40}, {"a": "F","b": 34},
        {"a": "G","b": 91}, {"a": "H","b": 78}, {"a": "I","b": 25}
      ]
    };

    return(
      <div className="vis-card-container" style={style}>
        <div className="vis-card-header"><h1>{this.props.title}</h1>{this.extraTools()}</div>
        <div className="vis-card-content">
          <VegaLite spec={spec} data={barData} />
        </div>
      </div>
    );

  } // end of render
} // end of class

export default withTracker((props) => {
  return {

  };
})(Vegalitedemo);
