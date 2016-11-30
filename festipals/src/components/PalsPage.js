import React, { Component } from 'react';
import PageHeader from './PageHeader.js';

export default class PalsPage extends Component {
  render() {
    return (
      <div>
      <PageHeader icon="fa fa-users" title="Pals" description="(More information about your pals)"/>
        <div className="container">
          <h1>Your Pals</h1>
          </div>
      </div>
    );
  }
}
