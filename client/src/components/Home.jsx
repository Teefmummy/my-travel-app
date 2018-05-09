import React, { Component } from 'react';
import Sidebar from './partials/Sidebar.jsx';
import LocationsList from './partials/LocationsList.jsx';

// *** Home renders when logged in, LocationsList is showing

class Home extends Component {
  // constructor(props);
  // super(props);
  //
  // this.state = {
  //
  // }

  render() {
    return (
      <div>
          <h3> &laquo; Home &raquo; </h3>

          <Sidebar />

          <LocationsList />

    </div>
    )
  }
}

export default Home;
