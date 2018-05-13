import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
      <div>
        <nav className= "App-Nav">
            <div className= "App-NavHome"><Link to="/">Home</Link></div>
            <div className= "App-NavLogin"><Link to="/user/login">Login</Link></div>
            <div className= "App-NavRegister"><Link to="/user/register">Register</Link></div>
            <div className= "App-NavFavorites"><Link to="/favorites">Favorites</Link></div>
            {/* <div className= "App-NavVacations"><Link to="/vacations">Vacations</Link></div> */}
        </nav>
      </div>
    );
  };
}

export default Nav;
