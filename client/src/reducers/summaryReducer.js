import { FETCH_SUMMARY } from '../actions/types';

export default function(state=null, action) {
  switch (action.type) {
    case FETCH_SUMMARY:
      // console.log('Summary reducer', action.payload)
      return action.payload;
    default:
      return state;
  }
}
