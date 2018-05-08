import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';

import Home from './components/Home.jsx';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">

            <h1>Hello</h1>

            <Route exact path="/" component={Home} data={"test"}/>

        </header>

      </div>
    );
  }
}

export default App;
