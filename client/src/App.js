import React, { Component } from 'react';
import './App.css';
import { Route, Switch  } from 'react-router-dom';

import Home from './components/Home.jsx';
import MainView from './components/MainView.jsx';
import Nav from './components/partials/Nav.jsx';
import MapArea from './components/partials/MapArea.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';


class App extends Component {
  constructor(props){
    super(props);
      this.handleSubmit= this.handleSubmit.bind(this);
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

  render() {
    return (
      <div className="App">
        <Nav />
        <MainView />
        <Route
          render={() => (<Login onSubmit={this.handleSubmit} />)}
          exact path="/user/login"
          />

        <Route exact path="/user/register" component={Register} />
        <Route exact path="/Home" component={Home} data={"test"}/>
        <Route exact path='/map' component={MapArea} />

    </div>
    );
  }
}

export default App;
