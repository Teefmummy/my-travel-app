import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';

import Home from './components/Home.jsx';
import MainView from './components/MainView.jsx';
import Sidebar from './components/partials/Sidebar.jsx';
import Nav from './components/partials/Nav.jsx';
import MapArea from './components/partials/MapArea.jsx';
import LocationsList from './components/partials/LocationsList.jsx';
import Login from './components/Login.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">

            <h1>Hello</h1>

            <Route exact path="/" component={Home} data={"test"}/>
            <Route exact path="/Login" component={Login} />

        </header>

      </div>
    );
  }
}

export default App;
