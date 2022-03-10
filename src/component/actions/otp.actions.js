import {
  FETCH_BY_SEARCH,
  FETCH_ALL,
  FETCH_POST,
  CREATE,
  UPDATE,
  DELETE,
  LIKE,
  START_LOADING,
  END_LOADING,
  COMMENT,
  CLEAR_POST,
} from '../constants/actionTypes';

// import * as api from '../api/index';
import api from '../helpers/axios.js';

// export const clearPost = () => {
//   return {type: CLEAR_POST};
// };

// export const getPosts = () => async dispatch => {
//   try {
//     dispatch({type: START_LOADING});
//     // const { data } = await api.fetchPosts(page);
//     const data = await api.get('/getQrdata');
//     // const alldata = data;
//     // console.log('dataaaaa', data);
//     dispatch({type: FETCH_ALL, payload: data});
//     dispatch({type: END_LOADING});
//   } catch (error) {
//     console.log(error.message);
//   }
// };

export const createPost = (otp, history) => async dispatch => {
  try {
    // const { data } = await api.createPost(post);
    // const data = await api.post('/posts', post);
    dispatch({type: CREATE, payload: otp});
    console.log('create otp', otp);
    // history.push(`posts/${data._id}`);
  } catch (error) {
    console.log(error.message);
  }
};
