import React from 'react';
import ActList from '../containers/actlist';
import ActDetails from '../containers/actdetails';

const App = () => (
  <div>
    <h2>Acts</h2>
    <ActList />
    <hr />
    <h2>Act Details</h2>
    <ActDetails />
  </div>
);

export default App;
