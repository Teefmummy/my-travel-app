import React, { Component } from 'react';


export default class Sidebar extends Component {
    constructor(props) {
      super(props);
      this.state = {
      }
    }

  render() {
    return (
        <div className="sidebar">
            <h4>Sidebar</h4>
            {this.test}
        </div>
    )
  }

}
