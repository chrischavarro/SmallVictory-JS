import axios from 'axios';
import { FETCH_USER, FETCH_TAGS } from './types';

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchTags = () => async dispatch => {
  const res = await axios.get('/api/tags');
  dispatch({ type: FETCH_TAGS, payload: res.data })
};
