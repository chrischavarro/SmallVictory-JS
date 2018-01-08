import { CREATE_PROFILE } from '../actions/types';

export default function(state=null, action) {
  switch (action.type) {
    case CREATE_PROFILE:
    // console.log('Profile reducer payload', action.payload)
      return action.payload
    default:
      return state
  }
}
