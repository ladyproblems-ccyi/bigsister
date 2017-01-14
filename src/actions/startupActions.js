import * as types from '../constants/actionTypes';

export const addNewProfile = profileData => {
  return {
    type: types.ADD_PROFILE,
    name: profileData.name,
    email: profileData.email
  };
};

