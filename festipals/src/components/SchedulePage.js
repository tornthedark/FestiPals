import React, { Component } from 'react';
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
    var attendingPals = ['pal1', 'pal2']; // TO DO: add logic for attending pals here; look through the users pals and select the ones that have this acts {id} in their list of acts.

    return (
      <div>
        <div className="container">
          <h1><span className="glyphicon glyphicon-music" aria-hidden="true"></span> My schedule</h1>
          <p>(Click on an act to see more details)</p>
        </div>
        <div className="container">
        {/* looping through all the acts in the sample data file array to display the acts */}
          {scheduledActs.map(function (act) { return <Acts
                                                        key={act._id}
                                                        id={act._id}
                                                        stage={act.stage}
                                                        name={act.title}
                                                        startTime={act.starts.t}
                                                        endTime={act.ends.t}
                                                        country={act.country}
                                                        date={act.starts.d}
                                                        description={act.description}
                                                        attendingPals={attendingPals}
                                                      /> }) }
        </div>
      </div>
    );
  }
}
