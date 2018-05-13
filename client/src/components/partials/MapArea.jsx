import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

const LoadingContainer = (props) => (
  <div>Loading Map!</div>
)

//the rendered listing of nearby places
const Listing = ({ places }) => (
    <div className="listing-div">
      <ul className="nearby-results">
        {/* <h3>Nearby Places List: </h3> */}
            {places && places.map(place =>
            <div className="nearby-div" key={place.id}>
                <img className="nearby-icon" src={place.icon}></img>
                <li key={place.id} className="nearby-result"> {place.name} </li>
              </div>
            )}
        </ul>
    </div>
  );


class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPlace: {},
      places: [],
      showPlaces: true
      // activeMarker: {},
      // selectedPlace: {},
      // showingInfoWindow: false
    }
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.toggleShowPlaces = this.toggleShowPlaces.bind(this);
    // this.getPlaceInfo = this.getPlaceInfo.bind(this);
  }

fetchPlaces = (mapProps, map) => this.searchNearby(map, map.center);

 searchNearby = (map, center) => {
   const { google } = this.props;

   const service = new google.maps.places.PlacesService(map);

   // Specify location, radius and place types for your Places API search.
   const request = {
     location: center,
     radius: '500',
     type: ['food']
   };

   service.nearbySearch(request, (results, status) => {
     if (status === google.maps.places.PlacesServiceStatus.OK)
         console.log('nearbySearch Results: ', results);
         this.setState({ places: results });
   });
 };



 toggleShowPlaces() {
   console.log('showPlaces: ', this.state.showPlaces);

   this.setState(prevState => ({
     showPlaces: !prevState.showPlaces
   }));
 }


 // getPlaceInfo(id) {
 //   const url = `https://maps.googleapis.com/maps/api/place/details/json?placeid=${id}&key=${process.env.REACT_APP_API_KEY}`
 //   fetch(url,
 //     {mode: 'no-cors'})
 //    .then(resp => {
 //      console.log(url)
 //      debugger;
 //      console.log(resp);
 //      return resp.json();
 //    })
 //    // .then(data => console.log(data))
 //
 //    .catch(err => console.log(err))
 // }

  onMarkerClick() {
    console.log('clicked');
    // this.setState({
    //     activeMarker: marker,
    //     selectedPlace: props,
    //     showingInfoWindow: true
    //     });
      }

      componentDidMount() {
        // this.getPlaceInfo('ChIJAQAAAAAA3YgRJbQeU5awSMU')
      }

  render() {
    const style = {
      width: '100%',
      height: '100%'
    }
    return (
      <div>

        <div className="showplaces-toggle-window">
          <button className={`showplaces-button ${this.state.showPlaces === true ? 'places-show' : 'places-hide'}`} onClick={this.toggleShowPlaces}>
              Nearby Places {this.state.showPlaces === true ? '(x)' : ' List'} </button>
        </div>
        {this.state.showPlaces === true ? (
            <Listing places={this.state.places}/>
          ) : this.state.showPlaces}

        <Map
          google={this.props.google}
          style={style}
          onReady={this.fetchPlaces}
          initialCenter={{
              lat: 27.6648274,
              lng: -81.51575350000002
            }}
          zoom={5}>
          <Marker onClick={this.onMarkerClick}
                  name={'Current location'} />

          <InfoWindow onClose={this.onInfoWindowClose}>
              <div>
                <h1>{this.state.selectedPlace.name}</h1>
              </div>
          </InfoWindow>

        </Map>

      </div>
    )
  }}


export default GoogleApiWrapper({
  apiKey: (process.env.REACT_APP_API_KEY),
  LoadingContainer: LoadingContainer,
  libraries: ['places']
})(MapContainer)
