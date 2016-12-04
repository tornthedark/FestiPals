import React, { Component } from 'react';

export default class Pals extends Component {

  render() {
    const { firstName, lastName, email} = this.props;

    return (
      <div>
        <div className="panel panel-default">
          <div className="panel-body">
            <div className="col-xs-3 palIcon">
              <span className="fa fa-user fa-3x"></span>
            </div>
            <div className="col-xs-9">
              <h3>{firstName} {lastName}</h3>
              <h4>{email}</h4>



            </div>
          </div>
        </div>

      </div>
    );
  }
}
