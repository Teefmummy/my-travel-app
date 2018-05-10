import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

const LoadingContainer = (props) => (
  <div>Loading container!</div>
)


export class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPlace: {}
    }
    this.onMarkerClick = this.onMarkerClick.bind(this);
  }
  onMarkerClick() {
    console.log('hey');
  }

  render() {
    const style = {
      width: '100%',
      height: '100%'
    }
    return (
      <Map
        google={this.props.google}
        style={style}
        onReady={this.fetchPlaces}
        initialCenter={{
            lat: 40.854885,
            lng: -88.081807
          }}
        zoom={8}>
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />

        <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
        </InfoWindow>

      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: (process.env.API_KEY),
  LoadingContainer: LoadingContainer,
  libraries: ['Places']
})(MapContainer)
