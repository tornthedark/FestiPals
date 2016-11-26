import React, { Component } from 'react';
import SampleData from './../sampleData.json';

export default class Acts extends Component {

  render() {
    const addedActs = SampleData.user.acts;
    const { name, startTime, id, stage } = this.props;
    var alreadyAdded = addedActs.indexOf(id) > -1;

    return (
      <div>
        <div className="panel panel-default">
          <div className="panel-body">
            <div className="col-xs-3 startingTime">
              {startTime}
            </div>
            <div className="col-xs-6">
              <h3>{name}</h3>
              <p>Stage {stage}</p>
            </div>
            <div className="col-xs-3 palIcon">
              <div className="pull-right">
                <span className="glyphicon glyphicon-user"></span> 0
              </div>
            </div>
            {alreadyAdded
              ? <a href="#" type="button" className="btn btn-default col-xs-12">
                <span className="glyphicon glyphicon-plus"></span> Add to my acts
              </a>
              : null
            }
          </div>
        </div>
      </div>
    );
  }
}
