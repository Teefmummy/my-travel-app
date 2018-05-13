import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';

export default class LocationsList extends Component {
  constructor(props) {
    super(props);
    this.state =  {
      locations: [],
      locationsLoaded: false,
      locationHover: false,
      selectedLocation: {}
    }
    this.fetchLocations = this.fetchLocations.bind(this);
    this.renderLocations = this.renderLocations.bind(this);
    this.hoverOn = this.hoverOn.bind(this);
    this.hoverOff = this.hoverOff.bind(this);
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

  hoverOn(e){
    const locationObj = e.target.id
    this.setState({
      locationHover: true,
      selectedLocation: this.state.locations[locationObj]
    })
    return (
      <div>
        <p>How you doing</p>
      </div>
    )
  }
  hoverOff(e){
    console.log(e.target)
    // console.log('off the hover');
    this.setState({
      locationHover: false,
      selectedLocation: {}
    })
  }


  renderLocations() {
    if(this.state.locationsLoaded) {
      return this.state.locations.map((locale) => {
        return (
          <div
            className='destinationDivBox'
            key={locale.id}
            id={locale.id}
            onMouseEnter={this.hoverOn}
            onMouseLeave={this.hoverOff}>
            {locale.location}
            <br></br>
            <button>
              Go here!
            </button>
          </div>
        )
      })
    } else {
      return (<h1>Loading</h1>)
    }
  }
  componentDidMount() {
    this.fetchLocations();
  }
  render() {
    console.log(this.state.locations)
    return (
      <div>
        <h1>Vacation Locations</h1>
          {this.renderLocations()}
      </div>
    )
  }

}
