import React, { Component } from 'react';
import PageHeader from './PageHeader.js';
import Acts from './Acts.js';
import SampleData from './../sampleData.json'

export default class SchedulePage extends Component {
  render() {
    const userActs = SampleData.user.acts;
    var scheduledActs = [];
    for(var i = 0; i < SampleData.acts.length; i++) {
      if(userActs.indexOf(SampleData.acts[i]._id) < 0) {
        scheduledActs.push(SampleData.acts[i]);
      } else {

      }
    }

    return (
      <div>
      <PageHeader icon="fa fa-calendar" title="Schedule" description="(More information about your schedule)"/>
        <div className="container">
          <h1><span className="glyphicon glyphicon-music" aria-hidden="true"></span> My schedule</h1>
          <p>(Click on an act to see more details)</p>
        </div>
        <div className="container">
        {/*} looping through all the acts in the sample data file array to display the acts */}
          {scheduledActs.map(function (act) { return <Acts key={act._id} id={act._id} stage={act.stage} allActs={scheduledActs} name={act.title} startTime={act.starts.t} date={act.starts.d} /> }) }
        </div>
      </div>
    );
  }
}
