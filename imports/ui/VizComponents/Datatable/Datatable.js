import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Card, Icon, Table, Button } from 'antd';
import 'antd/dist/antd.css';

const ButtonGroup = Button.Group;
const Fragment = React.Fragment;

// App component - represents the whole app
class Datatable extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      size: "small",
      icon: "fullscreen"
    };
  }

  extraTools() {
    return <ButtonGroup>
      <Button type="dashed" size="small" onClick={(e) => this.changeComponentSize()} icon={this.state.icon} />
      <Button type="dashed" size="small" onClick={(e) => this.toggleEdit() } icon="edit"  />
      <Button type="danger" size="small" icon="close" />
    </ButtonGroup>;
  }

  toggleEdit() {
    console.log("to:do");
  }

  changeComponentSize() {
    if(this.state.size == "small" ) {
      this.setState({ size: "large", icon: "fullscreen-exit"});
    } else {
      this.setState({ size: "small", icon: "fullscreen"});
    }
    // if(this.state.size == "medium") style = { gridColumn: "span 2", gridRow: "span 1" };
  }

  render() {
    let style = { gridColumn: "span 1", gridRow: "span 1" };
    if(this.state.size == "small") { style = { gridColumn: "span 1", gridRow: "span 1" }; } else { style = { gridColumn: "span 2", gridRow: "span 2" }; }
    return(
      <div className="vis-card-container" style={style}>
        <div className="vis-card-header"><h1>{this.props.title}</h1>{this.extraTools()}</div>
        <div className="vis-card-content" style={{display: "block"}}>
          <Table className="data-table" size="small" rowKey="_id" dataSource={this.props.data} columns={this.props.columns}  pagination={{ pageSize: 100 }} scroll={{ x: true, y: 200 }} />
      </div>
      </div>
    );

  } // end of render
} // end of class

export default withTracker((props) => {
  return {

  };
})(Datatable);
