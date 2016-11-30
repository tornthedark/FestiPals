import React, { Component } from 'react';
import Pals from './Pals';

export default class PalsPage extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="page-header">
            <div className="container text-center">
              <h1><span className="fa fa-user" aria-hidden="true"></span> Pals</h1>
              <p>(Click on an act to see more details)</p>
            </div>
          </div>
        </div>
        <div className="container">
        <h1>Your Pals</h1>
        <p>Click on a Pal's name to see his or her personal schedule</p>
          <Pals />
        </div>
      </div>
    );
  }
}
