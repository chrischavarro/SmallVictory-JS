import { FETCH_REP_DATA } from '../actions/types'

export default function(state=null, action) {
  switch (action.type) {
    case FETCH_REP_DATA:
      return action.payload;
    default:
      return state;
  }
}
