import React, { Component } from 'react';

export default class Pals extends Component {

  render() {
    const { firstName, lastName, email} = this.props;

    return (
      <div>
        <div className="panel panel-default">
          <div className="panel-body">
            <div className="col-xs-3 col-sm-1 palIcon">
              <span className="fa fa-user fa-2x"></span>
            </div>
            <div className="col-xs-9 col-sm-11">
              <h4>{firstName} {lastName}</h4>
              <p>{email}</p>
            </div>
          </div>
        </div>

      </div>
    );
  }
}
