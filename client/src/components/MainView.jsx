import React, { Component } from 'react';
import Sidebar from './partials/Sidebar.jsx';

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

          <h3>MainView</h3>

            <Sidebar />

        </div>
    )
  }

}
