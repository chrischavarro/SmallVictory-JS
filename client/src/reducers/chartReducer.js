import { FETCH_CHART_DATA } from '../actions/types'

export default function(state=null, action) {
  switch (action.type) {
    case FETCH_CHART_DATA:
      // console.log('CHART DATA REDUCER', action.payload);
      return action.payload;
    default:
      return state;
  }
}
