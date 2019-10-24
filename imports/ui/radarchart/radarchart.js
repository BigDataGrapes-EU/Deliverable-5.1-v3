import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import './style.css';

import { Card, Icon } from 'antd';
import {Radar} from 'react-chartjs-2';
// App component - represents the whole app
class Radarchart extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <Card title={this.props.title} extra={<Icon type="setting" />} className="viz-container">
        <Radar data={this.props.data} options={{ maintainAspectRatio: true }} />
      </Card>
    );

  } // end of render
} // end of class

export default withTracker((props) => {
  return {

  };
})(Radarchart);
