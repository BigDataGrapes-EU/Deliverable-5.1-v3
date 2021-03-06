import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';

import 'react-vis/dist/style.css';
import { Button, Icon, Empty, Select, Checkbox } from 'antd';
import { ParallelCoordinates } from 'react-vis';

const ButtonGroup = Button.Group;
const Fragment = React.Fragment;
const { Option } = Select;

// App component - represents the whole app
class Pcoordinates extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      size: "small",
      icon: "fullscreen"
    };
  }

  changeCardSize() {
    if(this.state.size == "small" ) {
      this.setState({ size: "large", icon: "fullscreen-exit"});
    } else {
      this.setState({ size: "small", icon: "fullscreen"});
    }
    // if(this.state.size == "medium") style = { gridColumn: "span 2", gridRow: "span 1" };
  }

  extraTools() {
    return <ButtonGroup>
      <Button type="dashed" size="small" onClick={(e) => this.changeComponentSize()} icon={this.state.icon} />
      <Button type="dashed" size="small" onClick={(e) => this.toggleEdit() } icon="edit"  />
      <Button type="danger" size="small" onClick={(e) => this.removeComponent(e) } icon="close" />
    </ButtonGroup>;
  }

  render() {
    const data = [
      {
        name: 'Mercedes',
        mileage: 7,
        price: 10,
        safety: 8,
        performance: 9,
        interior: 7,
        warranty: 7
      },
      {
        name: 'Honda',
        mileage: 8,
        price: 6,
        safety: 9,
        performance: 6,
        interior: 3,
        warranty: 9,
        style: {
          strokeWidth: 3,
          strokeDasharray: '2, 2'
        }
      },
      {
        name: 'Chevrolet',
        mileage: 5,
        price: 4,
        safety: 6,
        performance: 4,
        interior: 5,
        warranty: 6
      }
    ];
    const stylep = {
      axes: {
        line: {},
        ticks: {},
        text: {}
      },
      labels: {
        fontSize: 10
      },
      line: {
        strokeOpacity: 1
      },
      deselectedLineStyle: {
        strokeOpacity: 0.1
      }
    };
    let style = { gridColumn: "span 1", gridRow: "span 1" };
    if(this.state.size == "small") { style = { gridColumn: "span 1", gridRow: "span 1" }; } else { style = { gridColumn: "span 2", gridRow: "span 2" }; }
    return(
      <div className="vis-card-container" style={style}>
        <div className="vis-card-header"><h1>{this.props.title}</h1>{this.extraTools()}</div>
        <div className="vis-card-content">
      <ParallelCoordinates
      data={data}
      style={stylep}
      margin = {20}
      width  = {380}
      height = {250}
      domains={[
        {name: 'fruity',   domain: [0, 10] },
        {name: 'acid',     domain: [2, 16], getValue: d => d.price},
        {name: 'safety',   domain: [5, 10], getValue: d => d.safety},
        {name: 'astr',     domain: [0, 10], getValue: d => d.performance},
        {name: 'balanced', domain: [0,  7], getValue: d => d.interior},
        {name: 'bitter',   domain: [10, 2], getValue: d => d.warranty}
      ]}
      brushing
      animation
      showMarks
      />
  </div>
  </div>
    );

  } // end of render
} // end of class

export default withTracker((props) => {
  return {

  };
})(Pcoordinates);
