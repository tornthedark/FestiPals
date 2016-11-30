import React, { Component } from 'react';
import PageHeader from './PageHeader.js';
import Pals from './Pals.js';
import SampleDataPals from './../samplePals.json';

export default class PalsPage extends Component {
  render() {
    return (
      <div>
      <PageHeader icon="fa fa-users" title="Pals" description="(More information about your pals)"/>
        <div className="container">
          <h1>Your Pals</h1>
          <p>Click on a Pal&rsquo;s name to see his or her personal schedule</p>
          {/*} looping through all the acts in the sample data file array to display the acts */}
            {SampleDataPals.acts.map(function (pal) { return <Pals key={pal._id} id={pal._id} allPals={SampleDataPals} first_name={pal.first_name}  /> }) }
        </div>
      </div>
    );
  }
}
