import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';

import _ from 'lodash'
import { Button, Icon, Empty, Select, Tabs } from 'antd';
import { Bar  } from 'react-chartjs-2';
import { Resizable, ResizableBox } from 'react-resizable';
import 'react-resizable/css/styles.css';

const ButtonGroup = Button.Group;
const Fragment = React.Fragment;
const { TabPane } = Tabs;
const { Option } = Select;

// App component - represents the whole app
class Barchart extends React.Component {

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

  showGraph() {
    let graphData = this.props.data;
    let selectedData = this.state.selectedData;
    let group   = _.uniqBy(graphData, selectedData);
    let labels  = _.map(group, selectedData);
    let dataset = []; //_.meanBy(this.props.data, "YEAR");

    _.forEach(labels, function(label){
      let obj = _.countBy(graphData, function (rec) { return rec[selectedData] == label;});
      dataset.push(obj.true);
    });
    const data = {labels: labels, datasets: [{data: dataset, }]}

    if(!this.state.editMode) return <Bar data={data} options = {this.state.options}/>
  }

  render() {

    let style = { gridColumn: "span 1", gridRow: "span 1" };
    if(this.state.size == "small") { style = { gridColumn: "span 1", gridRow: "span 1" }; } else { style = { gridColumn: "span 2", gridRow: "span 2" }; }
    let title = this.props.title;
    if(title == undefined) title = "Bar chart";
    let selectedData = this.state.selectedData;
    let showGraph, showEdit;
    if(this.state.editMode) { showEdit = {display: "block"}; showGraph = {display: "none"}; } else {showEdit = {display: "none"}; showGraph = {display: "flex"}; }
    return(
      <div className="vis-card-container" style={style}>
        <div className="vis-card-header"><h1>{title}</h1>{this.extraTools()}</div>
        <div className="vis-card-content">
          <Tabs defaultActiveKey="1"  tabBarExtraContent={<Button type="dashed" onClick={(e) => this.toggleEdit()}>OK</Button>} style={showEdit} >
            <TabPane tab="Setup" key="1">
              <Select onChange={(e) => {this.dataChange(e)}} style={{width: "160px"}}>{this.columnSelection()}</Select>
              <Select defaultValue="mean" onChange={this.handleChange}>
                <Option value="mean">mean</Option>
                <Option value="sum">sum</Option>
                <Option value="median">median</Option>
                <Option value="min">min</Option>
                <Option value="max">max</Option>
              </Select>
            </TabPane>
            <TabPane tab="Customize" key="2"></TabPane>
          </Tabs>
          <div className="vis-card-chart" style={showGraph}>{this.showGraph()}</div>
        </div>
      </div>
    );

  } // end of render
} // end of class

export default withTracker((props) => {
  return {

  };
})(Barchart);
