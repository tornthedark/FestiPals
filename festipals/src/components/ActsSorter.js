import React, { Component } from 'react';

export default class ActsSorter extends Component {
  constructor(props) {
    super();
    this.state = {daysButtonCollapsed: true}
    this.state = {sortButtonCollapsed: true}
  }

  onCollapse(event) {
    if(this.state.daysButtonCollapsed || this.state.sortButtonCollapsed) {
      this.setState({daysButtonCollapsed: false});
      this.setState({sortButtonCollapsed: false});
    }


  }

  render() {
    return (
      <div>
      <div className="container">
        <div className="btn-group input-group btn-group-justified col-xs-12">
          <div className="btn-group">
            <button type="button" className="btn btn-default" data-toggle="collapse"
              href="#actsDays" aria-expanded="false" aria-controls="actsDays" >
              <span className="fa fa-calendar-o fa-3x" aria-hidden="true"></span>
              <h3>Days</h3>
            </button>
          </div>
          <div className="btn-group">
            <button type="button" className="btn btn-default" data-toggle="collapse"
            href="#actsSorterButtons" aria-expanded="false" aria-controls="actsSorterButtons">
              <span className="fa fa-clone fa-rotate-270 fa-3x" aria-hidden="true"></span>
              <h3>Filtering</h3>
            </button>
          </div>
          <div className="btn-group">
            <button type="button" className="btn btn-default">
              <span className="fa fa-times fa-3x" aria-hidden="true" onClick={this.onCollapse.bind(this)}></span>
              <h3>Reset</h3>
            </button>
          </div>
        </div>

        <div className="collapse" id="actsDays">
          <div className="panel panel-default">
            <div className="panel-body">
              <h3>Select Days</h3>
              <select className="form-control">
                <option>All days</option>
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
            <div className="btn-group input-group btn-group-justified col-xs-12">
              <div className="btn-group">
                <button type="button" className="btn btn-default">
                  <span className="fa fa-globe fa-3x" aria-hidden="true"></span>
                  <h3>Country</h3>
                </button>
              </div>
              <div className="btn-group">
                <button type="button" className="btn btn-default">
                  <span className="fa fa-home fa-3x" aria-hidden="true"></span>
                  <h3>Stage</h3>
                </button>
              </div>
              <div className="btn-group">
                <button type="button" className="btn btn-default">
                  <span className="fa fa-sort-alpha-asc fa-3x" aria-hidden="true"></span>
                  <h3>Name</h3>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>

    );
  }
}
