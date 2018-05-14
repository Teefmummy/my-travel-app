import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';

export default class LocationsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locations: [],
      locationsLoaded: false,
      locationSelected: false,
      currentSelection: {}
    }
    this.fetchLocations = this.fetchLocations.bind(this);
    this.renderLocations = this.renderLocations.bind(this);
    this.clickedOn = this.clickedOn.bind(this);
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

  clickedOn(e){
    console.log(e.target)
    const locationObj = e.target.id
    this.setState({
      locationSelected: true,
      currentSelection: [locationObj]
    })
  }
  hoverOff(e){
    // console.log(e.target)
    // console.log('off the hover');
    this.setState({
      locationSelected: false,
      currentSelection: {}
    })
  }

  DetailView() {
    console.log('here')
    return (<div>Hello</div>)
  }

  renderLocations() {

    if(this.state.locationsLoaded) {
      return (this.state.locations.map((locale) => {
        // console.log(this.state.currentSelection)
        // if (this.state.selectedLocation) {
        //   return (
        //     console.log(this.state.currentSelection)
        //   )
        // }
        return (
          <div
            className='destinationDivBox'
            key={locale.id}
            id={locale.id}
            onClick={this.clickedOn}>
            {locale.location}
            <br></br>
            <textarea></textarea>
            <br></br>
            {/* <button onClick={this.props.updateLocation(locale)}> */}
            <button>
              Go here!
            </button>
            <br/>
          </div>
        )
        }))
      } else {
      return (<h1>Loading</h1>)
    }
  }


  componentDidMount() {
    this.fetchLocations();
  }
  render() {
    console.log(this.state.currentSelection)
    // console.log(this.state)
    return (
      <div>
        <h1>Vacation Locations</h1>
          {this.renderLocations()}
      </div>
    )
  }

}
