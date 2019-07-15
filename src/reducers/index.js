import { combineReducers } from 'redux';

import { LoggingIn } from '../reducers/Login';
import { Registering } from '../reducers/Register';
import { getCards } from '../reducers/getCards';

const rootReducer = combineReducers({
  LoggingIn,
  Registering,
  getCards
})

export default rootReducer;