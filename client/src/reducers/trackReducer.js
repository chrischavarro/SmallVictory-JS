import { FETCH_TRACKS } from '../actions/types';

export default function(state=null, action) {
  switch (action.type) {
    case FETCH_TRACKS:
      console.log('Tracks reducer', action.payload)
      return action.payload
    default:
      return state;
  }
}
