import React, { Component } from 'react';
import './App.css';
import { Route, Switch  } from 'react-router-dom';

import MainView from './components/MainView'
import Home from './components/Home.jsx';
import Nav from './components/partials/Nav.jsx';
import MapArea from './components/partials/MapArea.jsx';
import LocationsList from './components/partials/LocationsList.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';


class App extends Component {
constructor(props){
super(props);
  this.handleSubmit= this.handleSubmit.bind(this);
}

createUser(user) {
  fetch('/user', {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
        'content-type': 'application/json'
      }
  })
}

  handleSubmit(user) {
    this.createUser(user);
  }

  render() {
    return (
      <div className="App">
          <header>
            {/* <Nav /> */}
          </header>
          <body>
            <MainView />
          </body>
      </div>
    );
  }
}

export default App;
