import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

const LoadingContainer = (props) => (
  <div>Loading Map!</div>
)

const Listing = ({ places }) => (
    <div className="listing-div">
      <ul className="nearby-results">
        <h3>Nearby Places: </h3>
            {places && places.map(p =>
            <div className="nearby-div" key={p.id}>
                <img className="nearby-icon" src={p.icon}></img>
                <li key={p.id} className="nearby-result"> {p.name} </li>
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
      places: []
      // activeMarker: {},
      // selectedPlace: {},
      // showingInfoWindow: false
    }
    this.onMarkerClick = this.onMarkerClick.bind(this);
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

  onMarkerClick() {
    console.log('clicked');
    // this.setState({
    //     activeMarker: marker,
    //     selectedPlace: props,
    //     showingInfoWindow: true
    //     });
      }

  render() {
    const style = {
      width: '100%',
      height: '100%'
    }
    return (
      <div>

        <Listing places={this.state.places} />

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
    );
  }
}

export default GoogleApiWrapper({
  apiKey: (process.env.REACT_APP_API_KEY),
  // apiKey: ('AIzaSyDH3owHdfUOCFpYzjbepu7RZpEovaz0NV4'),
  LoadingContainer: LoadingContainer,
  libraries: ['places']
})(MapContainer)
