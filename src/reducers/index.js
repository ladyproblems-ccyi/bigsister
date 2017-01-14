import { combineReducers } from 'redux';
import profileReducer from './profileReducer';

const rootReducer = combineReducers({
  /*
  * the keys of the objects here correspond to the fields of the state object
  *  that the rootReducer will manage
  */
  //badges: badesReducer,
  profiles: profileReducer
});


export default rootReducer;
