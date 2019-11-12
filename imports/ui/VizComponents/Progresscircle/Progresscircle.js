import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';

import { Progress, Card, Icon } from 'antd';

// App component - represents the whole app
class Progresscircle extends React.Component {

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

  render() {
    const options = { scales: { yAxes: [{ ticks: { beginAtZero: true } }] } }
    let style = { gridColumn: "span 1", gridRow: "span 1" };
    if(this.state.size == "small") { style = { gridColumn: "span 1", gridRow: "span 1" }; } else { style = { gridColumn: "span 2", gridRow: "span 2" }; }
    return(
      <div className="vis-card-container" style={style}>
        <div className="vis-card-header"><h1>{this.props.title}</h1>{this.extraTools()}</div>
        <div className="vis-card-content">
        <Progress type="circle" percent={75} />
      </div>
    </div>
    );

  } // end of render
} // end of class

export default withTracker((props) => {
  return {

  };
})(Progresscircle);
