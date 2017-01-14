import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/App';
import StartupContainer from './containers/StartupContainer';
import Chat from './components/Chat';
import Settings from './components/Settings';
//import ProfileSearch from './components/ProfileSearch';

export default (
  <Router history={browserHistory}>
    <Route path="/" component={App} >
      <IndexRoute component={StartupContainer}/>
      <Route path="find" component={StartupContainer}/>
      <Route path="chat" component={Chat}/>
      <Route path="settings" component={Settings}/>
    </Route>
  </Router>
);

