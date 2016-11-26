import React, { Component } from 'react';
import Acts from './Acts.js';
import SampleDataActs from './../sampleData.json'

export default class ActsPage extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="page-header">
            <div className="container text-center">
              <h1><span className="glyphicon glyphicon-music" aria-hidden="true"></span> Acts</h1>
              <p>(Click on an act to see more details)</p>
            </div>
          </div>
        </div>
        <div className="container">
        {/*} looping through all the acts in the sample data file array to display the acts */}
          {SampleDataActs.acts.map(function (act) { return <Acts key={act._id} id={act._id} stage={act.stage} allActs={SampleDataActs} name={act.title} startTime={act.starts.t} date={act.starts.d} /> }) }
        </div>
      </div>
    );
  }
}
