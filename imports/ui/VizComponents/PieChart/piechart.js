import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';

import { Card, Icon } from 'antd';
import {Pie} from 'react-chartjs-2';
// App component - represents the whole app
class Piechart extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <Card title={this.props.title} extra={<Icon type="setting" />} className="viz-container">
        <Pie data={this.props.data} width={100} height={50} options={{ maintainAspectRatio: true }} />
      </Card>
    );

  } // end of render
} // end of class

export default withTracker((props) => {
  return {

  };
})(Piechart);
