import React, { Component } from 'react';

export default class LocationsList extends Component {
  constructor(props) {
    super(props);
    this.state =  {
      locations: [],
      locationsLoaded: false
    }
    this.fetchLocations = this.fetchLocations.bind(this);
    this.renderLocations = this.renderLocations.bind(this);
  }
  fetchLocations() {
    fetch('/api/vacations/')
    .then((resp) => {
      if(!resp.ok) throw new Error(resp.statusMessage);
      return resp.json();
    })
    .then((respBody) => {
      this.setState({
        locations: respBody.data,
        locationsLoaded: true
      })
    })
  }
  renderLocations() {
    if(this.state.locationsLoaded) {
      return this.state.locations.map((locale) => {
        return (<h1>{locale.location}</h1>)
      })
    } else {
      return (<h1>Loading</h1>)
    }
  }
  componentDidMount() {
    this.fetchLocations();
  }
  render() {
    return (
      <div>
      <h1>hey there</h1>
      {this.renderLocations()}
      </div>
    )
  }

}
