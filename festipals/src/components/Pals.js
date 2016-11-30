import React, { Component } from 'react';

export default class Pals extends Component {

  render() {


    return (
      <div>
      <div className="panel panel-default">
        <div className="panel-body">
          <div className="col-xs-3 palIcon">
            <span className="fa fa-user fa-3x"></span>
          </div>
          <div className="col-xs-9">
            <h3> Friend&rsquo;s Name</h3>
            <p> common acts</p>
          </div>
        </div>
      </div>

      </div>
    );
  }
}
