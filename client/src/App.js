import React, { Component } from 'react';
import './App.css';
// import { Route, Switch  } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import MainView from './components/MainView'

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
  this.checkToken = this.checkToken.bind(this);
  // this.handleLogin = this.handleLogin.bind(this);
}

  // handleLogin(credentials) {
  //   this.loginAttempt(credentials);
  // }


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



  componentDidMount() {
    this.checkToken();
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
