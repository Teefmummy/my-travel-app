import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
      <div>
        <nav className= "App-Nav">
            <div className= "App-nav-obj"><Link to="/">Home</Link></div>
            <div className= "App-nav-obj"><Link to="/user/login">Login</Link></div>
            <div className= "App-nav-obj"><Link to="/user/register">Register</Link></div>
            <div className= "App-nav-obj"><Link to="/favorites">Favorites</Link></div>
        </nav>
      </div>
    );
  };
}

export default Nav;
