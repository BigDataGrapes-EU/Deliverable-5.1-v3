import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';

import { Progress, Card, Icon } from 'antd';

// App component - represents the whole app
class ProgressCircle extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const options = { scales: { yAxes: [{ ticks: { beginAtZero: true } }] } }
    return(
      <Card size="small" title={this.props.title} extra={<Icon type="setting" />} className="viz-container">
        <Progress type="circle" percent={75} />
      </Card>
    );

  } // end of render
} // end of class

export default withTracker((props) => {
  return {

  };
})(ProgressCircle);
