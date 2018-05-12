import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import '../App.css';

import Home from './Home.jsx';
import Nav from './partials/Nav.jsx';
import MapArea from './partials/MapArea.jsx';
import LocationsList from './partials/LocationsList.jsx';
import Login from './Login.jsx';
import Register from './Register.jsx';

export default class MainView extends Component {
  constructor(props){
  super(props);

    this.state = {
      // places: []
    }

    this.handleSubmit= this.handleSubmit.bind(this);
    this.handlePlacesToggle = this.handlePlacesToggle.bind(this);
  }

  createUser(user) {
    fetch('/user/register', {
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

    handlePlacesToggle() {
      console.log('show Places toggled');
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
              <MapArea onPlacesToggle={this.handlePlacesToggle} />
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
                render={() => (<Login onSubmit={this.handleSubmit} />)}
              />
            </aside>
          </div>
          <footer>…</footer>
        </div>
      </div>
    );
  }
}
