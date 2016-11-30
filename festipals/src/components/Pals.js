import React, { Component } from 'react';
import samplePals from './../samplePals.json';

export default class Pals extends Component {

  render() {

    var pals = samplePals.user.pals;

    pals.foreach(function(pal) {
    return (
      <div>
      <div className="panel panel-default">
        <div className="panel-body">
          <div className="col-xs-3 palIcon">
            <span className="fa fa-user fa-3x"></span>
          </div>
          <div className="col-xs-9">
            <h3> {pals.first_name} {pal.last_name}</h3>
            <p> common acts</p>
          </div>
        </div>
      </div>
      </div>
    )
  });
  }
}
