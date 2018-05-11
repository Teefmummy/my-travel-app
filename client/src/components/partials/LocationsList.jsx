import React, { Component } from 'react';

export default class LocationsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locations: []
    }
  }
  componentDidMount() {

  }
  render() {
    return (
      <h1>All Favorited Items Here..</h1>
    )
  }

}
