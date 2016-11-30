import React, { Component } from 'react';
import PageHeader from './PageHeader.js';

export default class ProfilePage extends Component {
  render() {
    return (
      <div>
      <PageHeader icon="fa fa-user" title="Your Profile" description="(Edit or add some imformation about yourself.)"/>
        <div className="container">
          <h1>Your Profile</h1>
          </div>
      </div>
    );
  }
}
