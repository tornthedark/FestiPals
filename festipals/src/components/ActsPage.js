import React, { Component } from 'react';
import Acts from './Acts.js';
import PageHeader from './PageHeader.js';
import SampleDataActs from './../sampleData.json';

export default class ActsPage extends Component {
  render() {
    var attendingPals = ['pal1', 'pal2']; // TO DO: add logic for attending pals here; look through the users pals and select the ones that have this acts {id} in their list of acts.
    return (
      <div>
          <PageHeader icon="fa fa-music" title="Acts" description="(Click on an act to see more details)"/>
          <div className="container">
        {/* looping through all the acts in the sample data file array to display the acts */}
          {SampleDataActs.acts.map(function (act) { return <Acts
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
