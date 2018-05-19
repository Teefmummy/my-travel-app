import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Detail from './Detail';
import '../../App.css';

export default class LocationsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
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

  onChange(str) {
    alert(`this ${str} was selected`)
    console.log(this.state.currentSelection);
    // console.log(e.target)
    // console.log('off the hover');
    // this.setState({
    //   locationSelected: false,
    //   currentSelection: {}
    // })
  }

  // clickedOn(e) {
  //   console.log(e.target)
  //   const locationObj = e.target.id
  //   this.setState({
  //     locationSelected: true,
  //     currentSelection: locationObj
  //   })
  //   this.onChange(locationObj)
  // }


  renderLocations() {

    if(this.state.locationsLoaded) {
      return (this.state.locations.map((locale) => {
        return (
          <Detail info={locale}
            updateLocation={this.props.updateLocation}
            activeid={this.props.activeid}
            create_fave={this.props.create_fave}
          />
        )
        }))
      } else {
      return (<h2>* Loading * </h2>)
    }
  }


  componentDidMount() {
    this.fetchLocations();
  }
  render() {
    // console.log(this.state.currentSelection)
    // console.log(this.state)
    return (
      <div class="location-list">
        <h1 class="title">Vacation Locations</h1>
          { this.renderLocations() }
      </div>
    )
  }

}
