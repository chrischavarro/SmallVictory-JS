import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import tagReducer from './tagReducer';
import profileReducer from './profileReducer';

export default combineReducers({
  auth: authReducer,
  form: reduxForm,
  tags: tagReducer,
  profile: profileReducer
});
