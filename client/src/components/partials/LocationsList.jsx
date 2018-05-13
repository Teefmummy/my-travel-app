import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';

export default class LocationsList extends Component {
  constructor(props) {
    super(props);
    this.state =  {
      locations: [],
      locationsLoaded: false,
      locationHover: false
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
    console.log(this.state.locations[locationObj])
    this.setState({
      locationHover: true
    })
  }
  hoverOff(){
    console.log('off the hover');
    this.setState({
      locationHover: false
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
            <br></br>
            {locale.location}
            <br></br>
            <button>
              View More
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
    return (
        <div>
          <h1>Hello User</h1>
          {this.renderLocations()}
        </div>
    )
  }

}
