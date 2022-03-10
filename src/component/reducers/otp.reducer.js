import {
  FETCH_BY_SEARCH,
  FETCH_ALL,
  CREATE,
  FETCH_POST,
  UPDATE,
  DELETE,
  LIKE,
  START_LOADING,
  END_LOADING,
  COMMENT,
  CLEAR_POST,
} from '../constants/actionTypes';
const initState = {
  OtpValid: false,
};

export default (state = initState, action) => {
  if (action.payload?.otp) {
    state.OtpValid = true;
    return state;
  } else {
    return state;
  }
};
