import React, {Component} from 'react';
import FaveDetail from './partials/FaveDetail.jsx';

export default class Favorites extends Component{
  constructor(props) {
    super(props);
    this.state = {
      locations: [],
      locationsLoaded: false    }
  }

  fetchFavorites() {
    const authToken = localStorage.getItem('authToken');
    fetch('/api/vacations/favorites', {
      'method': 'GET',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${authToken}`
      }
    })
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



  renderFavorites() {

    if(this.state.locationsLoaded) {
      return (this.state.locations.map((locale) => {
        return (
          <FaveDetail info={locale}
            updateLocation={this.props.updateLocation}
            activeid={this.props.activeid}
          />
        )
        }))
      } else {
      return (<h1> ** Loading ** </h1>)
    }
  }


  componentDidMount() {
    this.fetchFavorites();
  }
  render() {
    // console.log(this.state.currentSelection)
    // console.log(this.state)
    return (
      <div>
        <h1> &laquo;   My Favorites   &raquo; </h1>
          { this.renderFavorites() }
      </div>
    )
  }

}
