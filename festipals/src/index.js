import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import 'bootstrap/dist/css/bootstrap.min.css';
import './css/index.css';

import Layout from './components/Layout';

import ActsPage from './components/ActsPage';
import HomePage from './components/HomePage';
import PalsPage from './components/PalsPage';
import ProfilePage from './components/ProfilePage';
import SchedulePage from './components/SchedulePage';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={Layout}>
      <IndexRoute component={SchedulePage}></IndexRoute>
      <Route path="acts" component={ActsPage}></Route>
      <Route path="home" component={HomePage}></Route>
      <Route path="pals" component={PalsPage}></Route>
      <Route path="profile" component={ProfilePage}></Route>
    </Route>
  </Router>,
  document.getElementById('root')
);
