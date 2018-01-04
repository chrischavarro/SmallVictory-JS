import axios from 'axios';
import { FETCH_USER, FETCH_TAGS, CREATE_PROFILE, FETCH_TRACKS, SELECT_TRACK, FETCH_SUMMARY, FETCH_TASK } from './types';

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');
  dispatch({ type: FETCH_USER, payload: res.data });
  // console.log('User fetched', res.data)
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
  const res = await axios.get('/api/tracks/get');
  dispatch({ type: FETCH_TRACKS, payload: res.data });
}

export const selectTrack = (track, history) => async dispatch => {
  const res = await axios.get(`/api/tracks/select/${track}`);
  dispatch({ type: SELECT_TRACK, payload: res.data });
  history.push('/');
}

export const fetchSummary = () => async dispatch => {
  const res = await axios.get('/api/summary');
  dispatch({ type: FETCH_SUMMARY, payload: res.data });
}

export const fetchTask = (history) => async dispatch => {
  const res = await axios.get('/api/task');
  // dispatch({ type: FETCH_TASK, payload: res.data })
  // history.push('/task/new')
}
