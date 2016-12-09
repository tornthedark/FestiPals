import React, { Component } from 'react';

export default class ActsSorter extends Component {
  render() {
    return (
      <div>
      <div className="container">
        <div className="btn-group col-xs-12">
          <button type="button" className="btn btn-default" data-toggle="collapse"
            href="#actsDays" aria-expanded="false" aria-controls="actsDays">
            <span className="fa fa-calendar-o fa-3x" aria-hidden="true"></span>
            <h3>Days</h3>
          </button>
          <button type="button" className="btn btn-default" data-toggle="collapse"
          href="#actsSorterButtons" aria-expanded="false" aria-controls="actsSorterButtons">
            <span className="fa fa-clone fa-rotate-270 fa-3x" aria-hidden="true"></span>
            <h3>Filtering</h3>
          </button>
          <button type="button" className="btn btn-default">
            <span className="fa fa-times fa-3x" aria-hidden="true"></span>
            <h3>Reset</h3>
          </button>
        </div>

        <div className="collapse" id="actsDays">
          <div className="panel panel-default">
            <div className="panel-body">
              <h3>Select Days</h3>
              <select className="selectpicker">
                <option>Monday ##/## 2017</option>
                <option>Tuesday ##/## 2017</option>
                <option>Wednesday ##/## 2017</option>
                <option>Thursday ##/## 2017</option>
                <option>Friday ##/## 2017</option>
                <option>Saturday ##/## 2017</option>
                <option>Sunday ##/## 2017</option>
              </select>
            </div>
          </div>
        </div>

        <div className="collapse" id="actsSorterButtons">
          <div className="card card-block">
            <div className="btn-group col-xs-12">
              <button type="button" className="btn btn-default">
                <span className="fa fa-globe fa-3x" aria-hidden="true"></span>
                <h3>Country</h3>
              </button>
              <button type="button" className="btn btn-default" data-toggle="collapse"
              href="#actsSorterButtons" aria-expanded="false" aria-controls="actsSorterButtons">
              <span className="fa fa-home fa-3x" aria-hidden="true"></span>
              <h3>Filtering</h3>
              </button>
              <button type="button" className="btn btn-default">
                <span className="fa fa-times fa-3x" aria-hidden="true"></span>
                <h3>Reset</h3>
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>

    );
  }
}
