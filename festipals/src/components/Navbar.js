import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';

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
              <li><IndexLink to="/" activeClassName="active">My Schedule</IndexLink></li>
              <li><Link to="pals" activeClassName="active">Pals</Link></li>
              <li><Link to="acts" activeClassName="active">Acts</Link></li>
              <li className="divider" activeClassName="active"></li>
              <li><Link to="profile" activeClassName="active">Profile</Link></li>
              <li><Link to="home" activeClassName="active">Log Out</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
