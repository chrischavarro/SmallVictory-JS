import axios from 'axios';
import { FETCH_USER, FETCH_TAGS, CREATE_PROFILE, FETCH_TRACKS } from './types';

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchTags = () => async dispatch => {
  const res = await axios.get('/api/tags');
  dispatch({ type: FETCH_TAGS, payload: res.data })
};

export const createProfile = (values, history) => async dispatch => {
  const res = await axios.post('/api/profile/create', values)
  dispatch({ type: CREATE_PROFILE, payload: res.data });
  history.push('/select-track')
}

export const fetchTracks = () =>  async dispatch => {
  const res = await axios.get('/api/tracks/get')
  dispatch({ type: FETCH_TAGS, payload: res.data })
}
