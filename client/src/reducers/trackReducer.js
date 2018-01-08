import { FETCH_TRACKS, SELECT_TRACK } from '../actions/types';

export default function(state=null, action) {
  switch (action.type) {
    case FETCH_TRACKS:
      // console.log('Tracks reducer', action.payload);
      return action.payload;
    case SELECT_TRACK:
      // console.log('Track selected in reducer', action.payload);
      return action.payload;
    default:
      return state;
  }
}
