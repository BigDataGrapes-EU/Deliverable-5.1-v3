import React, { Component } from 'react';
import '/imports/ui/App.css';
import _ from 'lodash'

const Fragment = React.Fragment;
import Barchart    from '/imports/ui/barchart/barchart.js';
import Radarchart  from '/imports/ui/radarchart/radarchart.js';
import Scatterplot from '/imports/ui/scatterplot/scatterplot.js';
import Piechart    from '/imports/ui/piechart/piechart.js';
import Timeseries  from '/imports/ui/timeseries/timeseries.js';
import DataTable   from '/imports/ui/DataTable/DataTable.js';

import ParallelCoordinate from '/imports/ui/ParallelCoordinate/ParallelCoordinate.js';

import DataDrop    from '/imports/ui/DataDrop/DataDrop.js'
import VizChooser  from '/imports/ui/VizChooser/VizChooser.js'
import { withTracker } from 'meteor/react-meteor-data';
import { Divider } from 'antd';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { fileName: ""};
  }

  render() {
    const data = [
      {
        key: '1',
        name: 'Mike',
        age: 32,
        address: '10 Downing Street',
      },
      {
        key: '2',
        name: 'John',
        age: 42,
        address: '10 Downing Street',
      },
    ];

    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
      },
      {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
      },
    ];
    let content = <Fragment>
                  <DataTable data = {data} columns = {columns} title="Climate Dataset" />
                  <ParallelCoordinate title="meh" />
                  </Fragment>
                  // <Barchart    title="Climate Dataset" />
                  // <Radarchart  title="Climate Dataset" />
                  // <Scatterplot title="Climate Dataset" />
                  // <Piechart    title="Climate Dataset" />
                  // <Timeseries  title="Climate Dataset" />

    return(
      <Fragment>
      <DataDrop/>
      <VizChooser/>
      <Divider/>
      {content}
      </Fragment>
    );
  } // end of render
} // end of class

export default withTracker((props) => {
  return {
    a:"abc",
  };
})(App);
