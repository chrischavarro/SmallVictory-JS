import { FETCH_TASK } from '../actions/types';

export default function(state=null, action) {
  switch (action.type) {
    case FETCH_TASK:
      // console.log('Task reducer', action.payload);
      return action.payload
    default:
      return state;
  }
}
