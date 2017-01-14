import {createStore} from 'redux';
import rootReducer from '../reducers';
import initialData from './initialDataState';

export default function configureStore(initialState = initialData) {
  return createStore(rootReducer, initialState);
}
