import { FETCH_VICTORY_DATA } from '../actions/types'

export default function(state=null, action) {
  switch (action.type) {
    case FETCH_VICTORY_DATA:
      // console.log('CHART DATA REDUCER', action.payload);
      return action.payload;
    default:
      return state;
  }
}
