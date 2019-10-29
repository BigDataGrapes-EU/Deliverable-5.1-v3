import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import Dropzone from 'react-dropzone'
import './DataDrop.css';
import { Spin } from 'antd';
import 'antd/dist/antd.css';

class DataDrop extends Component {

  constructor(props) {
    super(props);
    this.state = {
      fileName: "",
      fileSize: 0,
      isDataReady: false,
      isDataLoading: false,
      numRows: 0,
    };
  }

  processFiles(file) {
    let self = this;
    this.setState({isDataReady: false, isDataLoading: true, fileName: file[0].name, fileSize: (file[0].size/1000/1000).toFixed(1)});
    const reader = new FileReader();
    reader.onload = () => {
      Papa.parse(reader.result, {
        complete: function(results) {
          Meteor.call('load.data', results.data, (error, d) => {
            self.setState({numRows: results.data.length, isDataReady: true, isDataLoading: false});
          });
        },
        header: true,
      });
    }
    reader.readAsBinaryString(file[0]);
  }

  render() {
    let render = "";
    if(this.state.isDataReady) {
      render = <div className="file-details">
      <h1>{this.state.fileName}</h1>
      <div className="file-subtitle">{this.state.numRows} records - {this.state.fileSize} Mb</div>
      render = <Spin spinning={this.state.isDataLoading} tip="Loading...">
      <Dropzone onDrop={acceptedFiles => this.processFiles(acceptedFiles)}>
      {({getRootProps, getInputProps}) => (
        <section className="dd-content">
        <div {...getRootProps()}>
        <input {...getInputProps()} />
        <p>Drag and drop a <b>new</b> CSV file here, or click to select a <b>new</b> file.</p>
        </div>
        </section>
      )}
      </Dropzone>
      </Spin>
      </div>;
    } else {
      render = <Spin spinning={this.state.isDataLoading} tip="Loading...">
      <Dropzone onDrop={acceptedFiles => this.processFiles(acceptedFiles)}>
      {({getRootProps, getInputProps}) => (
        <section className="dd-content">
        <div {...getRootProps()}>
        <input {...getInputProps()} />
        <p>No data, drag and drop a CSV file here, or click to select a file.</p>
        </div>
        </section>
      )}
      </Dropzone>
      </Spin>
    }
    return(render);} // end of render
  } // end of class

  export default withTracker((props) => {
    return {
      a:"abc",
    };
  })(DataDrop);
