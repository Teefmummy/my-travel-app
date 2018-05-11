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

  render() {
    return (
      <div className="App">
        <body class="HolyGrail">
          <header>
            <Nav />
          </header>
          <div class="HolyGrail-body">
            <main class="HolyGrail-content">
              <MapArea />
            </main>
            <aside class="HolyGrail-nav">
              <Route
                exact path='/destination'
                component={LocationsList}
              />
              <Route
                exact path='/login'
                component={Login}
                onSubmit={this.handleSubmit}
              />
            </aside>
          </div>
          <footer>…</footer>
        </body>
      </div>
    );
  }
}
