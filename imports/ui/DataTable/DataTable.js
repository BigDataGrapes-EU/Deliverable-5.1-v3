import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import './style.css';

import { Card, Icon, Table } from 'antd';

// App component - represents the whole app
class DataTable extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <Card title={this.props.title} extra={<Icon type="setting" />} className="viz-container">
      <Table dataSource={this.props.data} columns={this.props.columns} />
      </Card>
    );

  } // end of render
} // end of class

export default withTracker((props) => {
  return {

  };
})(DataTable);
