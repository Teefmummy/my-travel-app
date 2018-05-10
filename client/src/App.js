import React, { Component } from 'react';
import './App.css';
import { Route, Switch  } from 'react-router-dom';

import Home from './components/Home.jsx';
import MainView from './components/MainView.jsx';
import Sidebar from './components/partials/Sidebar.jsx';
import Nav from './components/partials/Nav.jsx';
import Nav2 from './components/partials/Nav2.jsx';
import MapArea from './components/partials/MapArea.jsx';
import LocationsList from './components/partials/LocationsList.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/Register" component={Register} />
          <Route exact path="/Home" component={Home} data={"test"}/>
          <Route exact path='/map' component={MapArea} />
    </div>
    );
  }
}

export default App;
