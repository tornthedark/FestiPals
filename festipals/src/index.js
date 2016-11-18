import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Artist from './Artist';
import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

ReactDOM.render(
  <Artist />,
  document.getElementById('Body')
);
