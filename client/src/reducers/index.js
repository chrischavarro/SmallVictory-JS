import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import tagReducer from './tagReducer';
import profileReducer from './profileReducer';
import trackReducer from './trackReducer';
import summaryReducer from './summaryReducer';

export default combineReducers({
  auth: authReducer,
  form: reduxForm,
  tags: tagReducer,
  profile: profileReducer,
  tracks: trackReducer,
  summary: summaryReducer
});
