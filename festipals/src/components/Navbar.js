import React, { Component } from 'react';

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-inverse navbar-fixed-top" id="test" role="navigation">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">FestiPals</a>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li><a href="#">My Schedule</a></li>
              <li><a href="#">Pals</a></li>
              <li><a href="#">Acts</a></li>
              <li className="divider"></li>
              <li><a href="#">Profile</a></li>
              <li><a href="#">Log Out</a></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
