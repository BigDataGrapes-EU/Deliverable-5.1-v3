
import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';

import _ from 'lodash'
import { Button, Icon, Empty, Select, Tabs } from 'antd';
import { Bar  } from 'react-chartjs-2';
import { TwitterPicker } from 'react-color';

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
      selectedData: "",
      colorPickerButton: "white",
      data: {},
      displayColorPicker: false,
      options: { scales: { yAxes: [{ ticks: { beginAtZero: true } }] }, legend: { display: false }, tooltips: { callbacks: { label: function(tooltipItem) { return tooltipItem.yLabel; } } } },
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

  addField() {}

  operationSelection() {
    const options = ["mean", "sum", "median", "min","max"];
    const list = [];
    _.forEach(options, function(e){
      list.push(<Option value={e} key={e}>{e}</Option>);
    });
    return list;
  }

  handleColorClick() {
    this.setState({ displayColorPicker: !this.state.displayColorPicker });
  }

  handleColorClose = () => {
    this.setState({ displayColorPicker: false })
  };

  handleColorChangeComplete = (color, event) => {
    this.setState({ colorPickerButton: color.hex });
    this.setState({ displayColorPicker: false });
  };

  render() {
    const popover = { position: 'absolute', zIndex: '2', top: '44px', right: '60px'}
    const cover   = { position: 'fixed', top: '0px', right: '0px', bottom: '0px', left: '0px',}

    let style = { gridColumn: "span 1", gridRow: "span 1" };
    if(this.state.size == "small") { style = { gridColumn: "span 1", gridRow: "span 1" }; } else { style = { gridColumn: "span 2", gridRow: "span 2" }; }
    let selectedData = this.state.selectedData;
    let showGraph, showEdit;
    if(this.state.editMode) { showEdit = {display: "block"}; showGraph = {display: "none"}; } else {showEdit = {display: "none"}; showGraph = {display: "flex"}; }
    return(
      <div className="vis-card-container" style={style}>
        <div className="vis-card-header"><h1>{this.props.title}</h1>{this.extraTools()}</div>
        <div className="vis-card-content">
          <Tabs defaultActiveKey="1"  tabBarExtraContent={<Button type="dashed" onClick={(e) => this.toggleEdit()}>OK</Button>} style={showEdit} >
            <TabPane tab="Setup" key="1">
              <div className="vis-card-tab-content">
                <div className="vis-card-data-aggregate">
                  <div className="vis-card-tab-title">Aggregate Column:</div>
                  <Select onChange={(e) => {this.dataChange(e)}} style={{width: "160px"}}>{this.columnSelection()}</Select>
                </div>
                <div className="vis-card-data-field">
                  <div className="vis-card-tab-title">Data from columns:</div>
                  <div className="vis-card-tab-inputs">
                    <Select onChange={(e) => {this.dataChange(e)}}>{this.columnSelection()}</Select>
                    <Select defaultValue="mean" onChange={this.handleChange}>{this.operationSelection()}</Select>
                    <Button shape="circle" icon="bg-colors" style={{background: this.state.colorPickerButton}} onClick={(e) => this.handleColorClick(e) }/>
                    { this.state.displayColorPicker ? <div className="color-picker-popover" style={ popover }>
                    <div style={ cover } onClick={(e) => this.handleColorClose() } />
                    <TwitterPicker triangle="top-right" onChangeComplete={ this.handleColorChangeComplete } />
                  </div> : null }
                </div>
              </div>
            </div>
            <Button type="dashed" onClick={this.addField} style={{ width: '60%' }}><Icon type="plus" /> Add field</Button>
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
