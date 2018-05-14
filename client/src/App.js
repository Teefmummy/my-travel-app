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
