import React, { Component } from 'react';
import Pals from './Pals.js';
import PageHeader from './PageHeader.js';
import SamplePals from './../samplePals.json';

export default class PalsPage extends Component {
  render() {
    return (
      <div>
      <PageHeader icon="fa fa-users" title="Pals" description="(More information about your pals)"/>
        <div className="container">
        {/*} looping through all the pals in the sample data file array to display the pals */}
          {SamplePals.pals.map(function (pal) { return <Pals key={pal._id} id={pal._id} allPals={SamplePals} firstName={pal.first_name} lastName={pal.last_name} email={pal.e_mail} /> }) }
        </div>
      </div>
    );
  }
}
