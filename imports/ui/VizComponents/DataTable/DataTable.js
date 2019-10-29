import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Card, Icon, Table } from 'antd';
import 'antd/dist/antd.css';

// App component - represents the whole app
class DataTable extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <Card title={this.props.title} extra={<Icon type="setting" />} className="viz-container">
      <Table className="data-table" size="small" dataSource={this.props.data} columns={this.props.columns}  pagination={{ pageSize: 100 }} scroll={{ x: true, y: 200 }} />
      </Card>
    );

  } // end of render
} // end of class

export default withTracker((props) => {
  return {

  };
})(DataTable);
