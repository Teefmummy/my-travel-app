import React, { Component } from 'react';

import Sidebar from './partials/Sidebar.jsx';
import LocationsList from './partials/LocationsList.jsx';
const image = require('../assets/mapbkgrd1.jpeg');

// *** Home renders when logged in, LocationsList is showing



class Home extends Component {
  render() {


    return (
      <div>

        <h1>Welcome <br />to <br /> Online Travel Concierge (OTC)</h1>

<h5>This site provides vacation information services. <br />
 Select a vacation location and view available vacation spots in that area as well as amenities
 <br /> such as restaurants, hotels and various activities.</h5>

          <h3> &laquo; Home &raquo; </h3>

          <Sidebar />

          <LocationsList />

        </div>

    )
  }
}

export default Home;
      // <h3> &laquo; Home &raquo; </h3>

     // <img className="Home" src={image} />
