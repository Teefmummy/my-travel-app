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

export default class MainView extends Component {
  constructor(props){
  super(props);
  this.state = {
  username: '',
  email: '',
  validUser: null
  };
    this.handleSubmit= this.handleSubmit.bind(this);
    this.handleLogin = this.handleLogin.bind(this);

  }

  createUser(user) {
    fetch('/auth/register', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
          'content-type': 'application/json'
        }
    })
  }
   loginAttempt(credentials) {
    console.log('User is trying to login with these credentials - ' + credentials);
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
    .then(respBody => {
      console.log(respBody);
      localStorage.setItem('authToken', respBody.token)
      this.setState({
        validUser: jwt.decodeToken(respBody.token).payload
      })
    })
    .catch()
  }
  handleLogin(user) {
    this.loginAttempt(user);
  }
  handleSubmit(user) {
    this.createUser(user);
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
              <MapArea />
            </main>
            <aside className="HolyGrail-nav">
              <Route
                exact path='/destination'
                component={LocationsList}
              />
              <Route
                exact path='/user/register'
                render={() => (<Register onSubmit={this.handleSubmit} />)}
              />
              <Route
                exact path='/user/login'
                render={() => (<Login onSubmit={this.handleLogin} />)}
              />
            </aside>
          </div>
          <footer>…</footer>
        </div>
      </div>
    );
  }
}
