import { FETCH_TASK, FAILED_TASK, COMPLETED_TASK } from '../actions/types';

export default function(state=null, action) {
  switch (action.type) {
    case FETCH_TASK:
      // console.log('Task reducer', action.payload);
      return action.payload;
    case FAILED_TASK:
      // console.log('Failed task in reducer!', action.payload);
      return action.payload;
    case COMPLETED_TASK:
      return action.payload;
    default:
      return state;
  }
}
