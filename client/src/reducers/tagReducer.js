import { FETCH_TAGS } from '../actions/types';

export default function(state=null, action) {
  switch (action.type) {
    case FETCH_TAGS:
    // console.log('Reducer payload', action.payload)
      return action.payload
    default:
      return state;
  }
}
