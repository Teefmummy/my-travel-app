import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';

export default class LocationsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locations: [],
      locationsLoaded: false,
      locationHover: false,
      selectedLocation: {}
    }
    this.fetchLocations = this.fetchLocations.bind(this);
    this.renderLocations = this.renderLocations.bind(this);
    this.hoverOn = this.hoverOn.bind(this);
    this.hoverOff = this.hoverOff.bind(this);
    this.DetailView = this.DetailView.bind(this);
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
  }
  hoverOff(e){
    // console.log(e.target)
    // console.log('off the hover');
    this.setState({
      locationHover: false,
      selectedLocation: {}
    })
  }

  DetailView() {
    console.log('here')
    return (<div>Hello</div>)
  }

  renderLocations() {
    // console.log(this.state.selectedLocation)

  //   return this.state.locations.map((locale) => {
  //     return (
  //       <div>
  //     <img src={`/../../../db/images/${locale.img_url}`} className="location-img"></img>
  //     <p><a href="#"> {locale.location} </a></p>
  //   </div>
  //     )
  //   })
  // } else {
  //   return (<h4>* Loading *</h4>)

    if(this.state.locationsLoaded) {
      if(this.state.locationHover) {
        return (this.state.locations.map((locale) => {
          return (
            <div
              className='destinationDivBox'
              key={locale.id}
              id={locale.id}
              onMouseEnter={this.hoverOn}
              onMouseLeave={this.hoverOff}>
              {locale.location}
              <br></br>
              <textarea></textarea>
              <br></br>
              <button>
                Go here!
              </button>
            </div>
          )
        }))
      } else {
        return (this.state.locations.map((locale) => {
          return (
            <div
              className='destinationDivBox'
              key={locale.id}
              id={locale.id}
              onMouseEnter={this.hoverOn}
              onMouseLeave={this.hoverOff}>
              {locale.location}
              <br></br>
              <br></br>
              <button>
                Go here!
              </button>
            </div>
          )
      }))
    }
  } else {
      return (<h1>Loading</h1>)
    }
  }
  componentDidMount() {
    this.fetchLocations();
  }
  render() {
    // console.log(this.state)
    return (
      <div>
        <h1>Vacation Locations</h1>
          {this.renderLocations()}
      </div>
    )
  }

}
