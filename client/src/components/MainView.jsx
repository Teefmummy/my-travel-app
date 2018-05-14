import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import '../App.css';

import Home from './Home.jsx';
import Nav from './partials/Nav.jsx';
import MapArea from './partials/MapArea.jsx';
import LocationsList from './partials/LocationsList.jsx';
import Login from './Login.jsx';
import Register from './Register.jsx';
import jwt from 'jwt-js';
import jwtDecode from 'jwt-decode';

export default class MainView extends Component {
  constructor(props){
  super(props);
  this.state = {
  // placesAdded: [],
  username: '',
  email: '',
  validUser: null,
  latitude: 27.6648274,
  longitude: -81.51575350000002,
  activeid: null
  };
    this.handleSubmit= this.handleSubmit.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);

    // this.handlePlaceToggle = this.handlePlaceToggle.bind(this);

  }
  saveToken(respBody) {
    console.log('savingToken', respBody);
    localStorage.setItem('authToken', respBody.token);
    const user = jwtDecode(respBody.token);
    return user;
  }
  createUser(user) {
    fetch('/auth/register', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
          'content-type': 'application/json'
        }
    })
    .then((resp) => {
      if(!resp.ok) throw new Error(resp.statusMessage)
        return resp.json();
    })
    .then(this.saveToken);
  }
  loginAttempt(credentials) {
    console.log('User is trying to login with these credentials - ' + JSON.stringify(credentials));
    fetch('/auth/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(resp => {
      if (!resp.ok) throw new Error(resp.statusMessage);
      return resp.json();
    })
    .then(this.saveToken)
  }
  handleLogin(user) {
    this.loginAttempt(user);
  }
  handleSubmit(user) {
    this.createUser(user);
  }

    handlePlaceToggle(place) { //update state.placesAdded, which goes to locationslist
      console.log('Place toggled: ', place);
    }

    handleLocationChange(locationobj) {
      console.log('handlelocationchange: ', this.state.activeid)
      console.log('locObj: ', locationobj)
      this.setState({
            latitude: locationobj.latitude,
            longitude: locationobj.longitude,
            activeid: locationobj.id
      })
    }


    // onButtonClick() { // ** TEST debug button
    //   this.setState({
    //         latitude: 13.193887000000000,
    //         longitude: -59.543197999999960
    //   })
    // }

  render() {
    return (

      <div className="App">

        {/* <button onClick={this.onButtonClick}>RE-RENDER TEST BUTTON</button> */}

        <div className="HolyGrail">
          <header>
              <Nav />
          </header>
          <div className="HolyGrail-body">
            <main className="HolyGrail-content">
              <MapArea
                onPlaceToggle={this.handlePlaceToggle}
                latitude={this.state.latitude}
                longitude={this.state.longitude}
              />
            </main>
            <aside className="HolyGrail-nav">
              <Route
                exact path='/'
                component={() => (
                  <LocationsList
                      updateLocation={this.handleLocationChange}
                      activeid={this.state.activeid}
                    />)}
              />
              <Route
                exact path='/user/register'
                render={() => (
                  <Register
                    onSubmit={this.handleSubmit} />)}
                  />
              <Route
                exact path='/user/login'
                render={() => (
                  <Login
                    onSubmit={this.handleLogin}
                  />)}
              />
            </aside>
          </div>
          <footer>…</footer>
        </div>
      </div>
    );
  }
}
