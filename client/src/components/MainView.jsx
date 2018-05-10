import React, { Component } from 'react';
import Sidebar from './partials/Sidebar.jsx';
import MapArea from './partials/MapArea.jsx';

export default class MainView extends Component {
    // constructor(props) {
    //   super(props);
    // }


  // this.state = {
  //
  // }

  render() {
    return (
        <div className="main-container">
            <div><Sidebar /></div>
            <MapArea />
        </div>
    )
  }

}
