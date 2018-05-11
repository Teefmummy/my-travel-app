import React, { Component } from 'react';
import './App.css';
import { Route, Switch  } from 'react-router-dom';

import MainView from './components/MainView'
import Home from './components/Home.jsx';

import Nav from './components/partials/Nav.jsx';
import MapArea from './components/partials/MapArea.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';


class App extends Component {

  render() {
    return (
      <div className="App">
            <MainView />
      </div>
    );
  }
}

export default App;
