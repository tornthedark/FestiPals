import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-inverse navbar-fixed-top" id="test" role="navigation">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#collapsing-navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link className="navbar-brand" to="home">FestiPals</Link>
          </div>
          <div className="collapse navbar-collapse" id="collapsing-navbar">
            <ul className="nav navbar-nav">
              <li><Link to="/">My Schedule</Link></li>
              <li><Link to="pals">Pals</Link></li>
              <li><Link to="acts">Acts</Link></li>
              <li className="divider"></li>
              <li><Link to="profile">Profile</Link></li>
              <li><Link to="home">Log Out</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
