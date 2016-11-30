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
              <li><IndexLink to="/" activeClassName="active"><span className="fa fa-calendar"></span> My Schedule</IndexLink></li>
              <li><Link to="pals" activeClassName="active"><span className="fa fa-users"></span> Pals</Link></li>
              <li><Link to="acts" activeClassName="active"><span className="fa fa-music"></span> Acts</Link></li>
              <li className="divider" activeClassName="active"></li>
              <li><Link to="profile" activeClassName="active"><span className="fa fa-user"></span> Profile</Link></li>
              <li><Link to="home" activeClassName="active"><span className="fa fa-sign-out"></span> Log Out</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
