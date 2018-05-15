import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import '../App.css';

import Home from './Home.jsx';
import Nav from './partials/Nav.jsx';
import MapArea from './partials/MapArea.jsx';
import LocationsList from './partials/LocationsList.jsx';
import Login from './Login.jsx';
import Favorites from './Favorites.jsx';
import Register from './Register.jsx';
import jwt from 'jwt-js';
import jwtDecode from 'jwt-decode';

export default class MainView extends Component {
  constructor(props){
  super(props);
  this.state = {
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
    this.checkToken = this.checkToken.bind(this);
    this.createFave = this.createFave.bind(this);
    this.editFave = this.editFave.bind(this);
    // this.handlePlaceToggle = this.handlePlaceToggle.bind(this);

  }
  checkToken() {
    const authToken = localStorage.getItem('authToken');
    console.log(authToken);
    fetch('/auth', {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${authToken}`
      }
    })
      .then(resp => {
        if (!resp.ok) throw new Error(resp.message);
        return resp.json()
      })
      .then(respBody => {
        console.log(respBody);
        this.setState({
          validUser: respBody.data
        })
      })
      .catch(err => {
        console.log('not logged in');
        localStorage.removeItem('authToken');
        this.setState({
          validUser: null
        });
      })
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
      // console.log('handlelocationchange: ', this.state.activeid)
      // console.log('locObj: ', locationobj)
      this.setState({
            latitude: locationobj.latitude,
            longitude: locationobj.longitude,
            activeid: locationobj.id
      })
    }

    createFavorite(obj){
      const authToken = localStorage.getItem('authToken');
      const object = {
        method: 'POST',
        'body': JSON.stringify(obj),
        headers: {
          'content-type' : 'application/json',
          'Authorization' : `Bearer ${authToken}`
        }
      }
      fetch('/api/vacations/favorites', object)
        .then(resp => {
          if (!resp.ok) throw new Error(resp.message);
          return resp.json()
        })
        .then()
    }

    createFave(faveObj) {
      console.log('faveObj', faveObj)
      this.createFavorite(faveObj)
    }

    deleteFave(obj) {
      console.log('deleting getting here')
      const authToken = localStorage.getItem('authToken');
      const object = {
        method: 'DELETE',
        'body': JSON.stringify(obj),
        headers: {
          'content-type' : 'application/json',
          'Authorization' : `Bearer ${authToken}`
        }
      }
      fetch('/api/vacations/favorites', object)
        .then(resp => {
          if (!resp.ok) throw new Error(resp.message);
          return resp.json()
        })
        .then()
    }


    componentDidMount() {
      this.checkToken();
    }


    updateFavorite(obj){
      const authToken = localStorage.getItem('authToken');
      const object = {
        method: 'PUT',
        'body': JSON.stringify(obj),
        headers: {
          'content-type' : 'application/json',
          'Authorization' : `Bearer ${authToken}`
        }
      }
      fetch('/api/vacations/favorites', object)
        .then(resp => {
          if (!resp.ok) throw new Error(resp.message);
          return resp.json()
        })
        .then()
    }

    editFave(faveObj) {
      console.log('faveObj', faveObj)
      this.updateFavorite(faveObj)
    }


    componentDidMount() {
      this.checkToken();
    }


  render() {
    return (

      <div className="App">

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
                      create_fave={this.createFave}
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
              <Route
                exact path='/favorites'
                render={() => (<Favorites
                  user={this.state.validUser}
                  updateLocation={this.handleLocationChange}
                  updateFavorite={this.editFave}
                  deleteFave={this.deleteFave}
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
