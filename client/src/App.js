import React, { Component } from 'react';
import './App.css';
// import { Route, Switch  } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import MainView from './components/MainView'
import Home from './components/Home.jsx';

import Nav from './components/partials/Nav.jsx';
import MapArea from './components/partials/MapArea.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import jwt from 'jwt-js';

class App extends Component {
constructor(props){
super(props);

  this.state = {
  username: '',
  email: ''
  };

  this.handleLogin = this.handleLogin.bind(this);
}

  handleLogin(credentials) {
    this.loginRequest(credentials);
  }


checkToken() {
    const authToken = localStorage.getItem('authToken');
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
        this.setState({
          validUser: respBody.user
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

  loginAttempt(credentials) {
    console.log('User is trying to login with these credentials - ' + credentials);
    fetch('/api/auth/login', {
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
  }

  componentDidMount() {
    // this.checkToken();
  }

  render() {
    return (
      <div className="App">

            <MainView />
      </div>
    );
  }
}

export default App;
