import * as types from '../constants/actionTypes';

const profileReducer = (state = [], action) => {

  switch(action.type) {
    case types.ADD_PROFILE:
      return [
        ...state,
        {id:action.id, name:action.name, email:action.email}
      ];
      //return api.saveProfile(action.name, action.email);
    default:
      return state;
  }
};


export default profileReducer;
