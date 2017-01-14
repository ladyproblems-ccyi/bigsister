// This file merely configures the store for hot reloading.

// With Redux, the actual stores are in /reducers.

import {createStore, compose} from 'redux';
import rootReducer from '../reducers';
import initialData from './initialDataState';

export default function configureStore(initialState = initialData) {

  console.log('   =======   Initial State data ');
  console.log( initialData);

  const store = createStore(rootReducer, initialState, compose(
    // Add other middleware on this line...
    window.devToolsExtension ? window.devToolsExtension() : f => f // add support for Redux dev tools
    )
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers').default; // eslint-disable-line global-require
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
