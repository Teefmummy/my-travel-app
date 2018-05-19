import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

const LoadingContainer = (props) => (
  <div> <h3> * Loading Map * </h3> </div>
)

//the rendered listing of nearby places
const Listing = ({ places }) => (
    <div className="listing-div">
      <ul className="nearby-results">
        {/* <h3>Nearby Places List: </h3> */}
            {places && places.map(place =>
            <div className="nearby-div" key={place.id} >
                <img className="nearby-icon" src={place.icon}></img>
                <li key={place.id} className="nearby-result">
                    <a href={`https://www.google.com/search?q=${place.name}+${place.vicinity}`} target="_blank" onClick={this.handleAddPlace}> {place.name} </a> </li>
              </div>
            )}
        </ul>
    </div>
  )



class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPlace: {},
      // places: [],
      showingPlaces: false,
      // activeMarker: {},
      // selectedPlace: {},
      showingInfoWindow: true
    }

    this.toggleShowPlaces = this.toggleShowPlaces.bind(this);
    // this.handleAddPlace = this.handleAddPlace.bind(this);
    this.onMarkerClick = this.onMarkerClick.bind(this);
    // this.getPlaceInfo = this.getPlaceInfo.bind(this);
  }

fetchPlaces = (mapProps, map) => this.searchNearby(map, map.center);

 searchNearby = (map, center) => {
   const { google } = this.props;

   const service = new google.maps.places.PlacesService(map);

   // Specify location, radius and place types for your Places API search.
   const request = {
     location: center,
     radius: '35'
     // type: ['food']
   };

   service.nearbySearch(request, (results, status) => {
     if (status === google.maps.places.PlacesServiceStatus.OK)
         console.log('nearbySearch Results: ', results);
         this.setState({ places: results });
   });
 };



 toggleShowPlaces() {
     this.setState(prevState => ({
       showingPlaces: !prevState.showingPlaces
     }));
     // console.log('showingPlaces: ', this.state.showingPlaces);
   }

 // handleAddPlace(e) {
 //   console.log('adding place ', e.target)
 //    this.props.onPlaceToggle(e.target.value)
 // }



 // getPlaceInfo(id) {
 //   const url = `https://maps.googleapis.com/maps/api/place/details/json?placeid=${id}&key=${process.env.REACT_APP_API_KEY}`;
 //   fetch(url, {
 //     mode: 'no-cors'
 //        })
 //    .then(resp => {
 //      console.log(url)
 //      // debugger;
 //      // console.log(resp);
 //      resp.json({resp})
 //    })
 //    .then(function(response) {
 //      console.log(response);
 //      return response;
 //    })
 //    // .then(data => console.log(data))
 //    .catch(err => console.log(err))
 // }

  onMarkerClick() {
    console.log('Marker clicked');
  //   this.setState({
  //       activeMarker: marker,
  //       selectedPlace: props,
  //       showingInfoWindow: true
  //       });
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

          <Map
            google={this.props.google}
            style={style}
            onReady={this.fetchPlaces}
            onClick={this.fetchPlaces}
            // initialCenter={{
            //     lat: this.state.initlatitude,
            //     lng: this.state.initlongitude
            //   }}
            center={{
              lat: this.props.latitude,
              lng: this.props.longitude
            }}
            zoom={9}
            mapTypeId='satellite'>
            <Marker onClick={this.onMarkerClick}
                    name={'Current location'} />

            <InfoWindow onClose={this.onInfoWindowClose}>
                <div>
                  <h1>{this.state.selectedPlace.name}</h1>
                </div>
            </InfoWindow>

          </Map>


          {/*  ** RENDERED NEARBY PLACES LIST **  */}
        <div className="showplaces-toggle-window">
          <button className={`showplaces-button ${this.state.showingPlaces === true ? 'places-show' : 'places-hide'}`} onClick={this.toggleShowPlaces}>
               {this.state.showingPlaces ? 'Nearby Places (x)' : 'Show Nearby Places'} </button>
        </div>
        {this.state.showingPlaces === true ? (
            <Listing places={this.state.places}/>
          ) : this.state.showingPlaces}

      </div>
    )
  }}


export default GoogleApiWrapper({
  apiKey: (process.env.REACT_APP_API_KEY),
  LoadingContainer: LoadingContainer,
  libraries: ['places']
})(MapContainer)
