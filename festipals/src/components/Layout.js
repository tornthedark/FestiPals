import React, { Component } from 'react';
import Navbar from './Navbar.js';
import ActsPage from './ActsPage.js';
import SchedulePage from './SchedulePage.js';

export default class Layout extends Component {
  render() {
    return (
      <div className="layout">
        <Navbar />
        <ActsPage />
        <SchedulePage />
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
      </div>
    );
  }
}
