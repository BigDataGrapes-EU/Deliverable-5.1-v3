import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import '/imports/ui/App.css';
// App component - represents the whole app
class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(<div>Hello World!</div>);
  } // end of render
} // end of class

export default withTracker(() => {
  return {};
})(App);
