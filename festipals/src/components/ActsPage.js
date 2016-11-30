import React, { Component } from 'react';
import Acts from './Acts.js';
import PageHeader from './PageHeader.js';
import SampleDataActs from './../sampleData.json';

export default class ActsPage extends Component {
  render() {
    return (
      <div>
          <PageHeader icon="fa fa-music" title="Acts" description="(Click on an act to see more details)"/>
          <div className="container">
        {/*} looping through all the acts in the sample data file array to display the acts */}
          {SampleDataActs.acts.map(function (act) { return <Acts key={act._id} id={act._id} stage={act.stage} allActs={SampleDataActs} name={act.title} startTime={act.starts.t} date={act.starts.d} /> }) }
        </div>
      </div>
    );
  }
}
