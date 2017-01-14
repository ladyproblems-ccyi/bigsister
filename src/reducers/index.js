import { combineReducers } from 'redux';
import profileReducer from './profileReducer';
import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
  /*
  * the keys of the objects here correspond to the fields of the state object
  *  that the rootReducer will manage
  */
  athletes: profileReducer,
  routing: routerReducer
});


export default rootReducer;
