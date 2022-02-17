import { SIGN_IN, SIGN_OUT } from '../actions/types';

const INITIAL_STATE = {
  userId: null,
  isSignedIn: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        userId: action.payload,
        isSignedIn: true };

    case SIGN_OUT:
      return {
        ...state,
        userId: null,
        isSignedIn: false
      };

    default:
      return state;
  }
};
