import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';

import _ from 'lodash'
import { Button, Icon, Empty, Select, Checkbox } from 'antd';
import { Bar  } from 'react-chartjs-2';
import { TwitterPicker } from 'react-color';

import { Resizable, ResizableBox } from 'react-resizable';
import 'react-resizable/css/styles.css';
import 'antd/dist/antd.css';

const ButtonGroup = Button.Group;
const Fragment = React.Fragment;
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
      colorPickerButton: "#52A1E5",
      colorPickerButtonAgg: "#52A1E5",
      data: {},
      extraColumnFields: [],
      displayColorPicker: false,
      displayColorPickerAgg: false,
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

  removeComponent(e) {
    this.props.removeComponent(this.props.id);
  }

  extraTools() {
    return <ButtonGroup>
      <Button type="dashed" size="small" onClick={(e) => this.changeComponentSize()} icon={this.state.icon} />
      <Button type="dashed" size="small" onClick={(e) => this.toggleEdit() } icon="edit"  />
      <Button type="danger" size="small" onClick={(e) => this.removeComponent(e) } icon="close" />
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
    const data = {labels: labels, datasets: [{backgroundColor: this.state.colorPickerButtonAgg , data: dataset, }]}
    if(!this.state.editMode) return <Bar data={data} options = {this.state.options}/>
  }


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

  handleColorClickAgg() {
    this.setState({ displayColorPickerAgg: !this.state.displayColorPickerAgg });
  }

  handleColorCloseAgg = () => {
    this.setState({ displayColorPickerAgg: false })
  };

  handleColorChangeComplete = (color, event) => {
    this.setState({ colorPickerButton: color.hex });
    this.setState({ displayColorPicker: false });
  };

  handleColorChangeCompleteAgg = (color, event) => {
    this.setState({ colorPickerButtonAgg: color.hex });
    this.setState({ displayColorPickerAgg: false });
  };

  onAggregateBoxChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }

  addField() {
    let old = this.state.extraColumnFields;
    let array = _.concat(old, <Checkbox key={"chb"+old.length} className="vis-card-checkbox" onChange={this.onAggregateBoxChange}>
    <Select onChange={(e) => {this.dataChange(e)}} style={{minWidth: "80px"}}>{this.columnSelection()}</Select>
    <Select className="vg-select-function-btn" defaultValue="mean" onChange={this.handleChange}>{this.operationSelection()}</Select>
    <Button shape="circle" className="vg-color-picker-btn" icon="bg-colors" style={{background: this.state.colorPickerButton}} onClick={(e) => this.handleColorClick(e) }/>
    { this.state.displayColorPicker ? <div className="color-picker-popover" style={ popover }>
    <div style={ cover } onClick={(e) => this.handleColorClose() } />
    <TwitterPicker triangle="hide" onChangeComplete={ this.handleColorChangeComplete } />
    </div> : null }
    <Button type="dashed" shape="circle"><Icon type="close" /></Button>
    </Checkbox>);
    this.setState({extraColumnFields: array});
  }

  render() {
    const popover = { position: 'absolute', zIndex: '2', top: '40px', left: '160px'}
    const cover   = { position: 'fixed', top: '0px', right: '0px', bottom: '0px', left: '0px',}

    let style = { gridColumn: "span 1", gridRow: "span 1" };
    if(this.state.size == "small") { style = { gridColumn: "span 1", gridRow: "span 1" }; } else { style = { gridColumn: "span 2", gridRow: "span 2" }; }
    let selectedData = this.state.selectedData;
    let showGraph, showEdit;
    if(this.state.editMode) { showEdit = {display: "grid"}; showGraph = {display: "none"}; } else {showEdit = {display: "none"}; showGraph = {display: "grid"}; }
    console.log(this.state.extraColumnFields);
    return(
      <div className="vis-card-container" style={style}>
        <div className="vis-card-header"><h1>{this.props.title}</h1>{this.extraTools()}</div>
        <div className="vis-card-content">

          <div className="vis-card-tab-content" style={showEdit}>

            <div className="vis-card-data-title">Edit</div>

            <div className="vis-card-data-aggregate">
              <div className="vis-card-tab-title">Aggregate:</div>
              <Checkbox onChange={this.onAggregateBoxChange}>
                <Select onChange={(e) => {this.dataChange(e)}} style={{width: "160px"}}>{this.columnSelection()}</Select>
                  <Button shape="circle" className="vg-color-picker-btn" icon="bg-colors" style={{background: this.state.colorPickerButtonAgg}} onClick={(e) => this.handleColorClickAgg(e) }/>
                  { this.state.displayColorPickerAgg ? <div className="color-picker-popover-agg" style={ popover }>
                  <div style={ cover } onClick={(e) => this.handleColorCloseAgg() } />
                  <TwitterPicker triangle="hide" onChangeComplete={ this.handleColorChangeCompleteAgg } />
                </div> : null }
              </Checkbox>
            </div>

            <div className="vis-card-data-columns">
              <div className="vis-card-tab-title">Data from columns:</div>
              <div className="vis-card-tab-inputs">
                {this.state.extraColumnFields}
                <Checkbox className="vis-card-checkbox" onChange={this.onAggregateBoxChange}>
                  <Select onChange={(e) => {this.dataChange(e)}} style={{minWidth: "80px"}}>{this.columnSelection()}</Select>
                  <Select className="vg-select-function-btn" defaultValue="mean" onChange={this.handleChange}>{this.operationSelection()}</Select>
                  <Button shape="circle" className="vg-color-picker-btn"  icon="bg-colors" style={{background: this.state.colorPickerButton}} onClick={(e) => this.handleColorClick(e) }/>
                  { this.state.displayColorPicker ? <div className="color-picker-popover" style={ popover }>
                  <div style={ cover } onClick={(e) => this.handleColorClose() } />
                  <TwitterPicker triangle="hide" onChangeComplete={ this.handleColorChangeComplete } />
                </div> : null }
                <Button type="dashed" onClick={(e) => this.addField()}><Icon type="plus" /></Button>
              </Checkbox>
            </div>
          </div>
          <Button type="dashed" onClick={(e) => this.toggleEdit()}>View Graph</Button>
        </div>
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
