import { combineReducers } from 'redux';

import { LoggingIn } from '../reducers/Login';
import { Registering } from '../reducers/Register';

const rootReducer = combineReducers({
  LoggingIn,
  Registering
})

export default rootReducer;