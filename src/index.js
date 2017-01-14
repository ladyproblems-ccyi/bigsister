import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import routes from './routes';
import configureStore from './store/configureStore';
require('./favicon.ico');
import './styles/skeleton.scss';


const store = configureStore();

render(
  <Provider store={store}>
    <Router routes={routes}/>
  </Provider>, document.getElementById('app')
);

