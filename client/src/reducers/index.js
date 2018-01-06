import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import tagReducer from './tagReducer';
import profileReducer from './profileReducer';
import trackReducer from './trackReducer';
import summaryReducer from './summaryReducer';
import taskReducer from './taskReducer';
import chartReducer from './chartReducer';

export default combineReducers({
  auth: authReducer,
  form: reduxForm,
  tags: tagReducer,
  profile: profileReducer,
  tracks: trackReducer,
  summary: summaryReducer,
  task: taskReducer,
  chartData: chartReducer
});
