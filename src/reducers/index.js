import { combineReducers } from 'redux';

import { LoggingIn } from '../reducers/Login';
import { Registering } from '../reducers/Register';
import { getCards } from '../reducers/getCards';
import { ChangePassword } from '../reducers/ChangePassword';

const rootReducer = combineReducers({
  LoggingIn,
  Registering,
  getCards,
  ChangePassword
})

export default rootReducer;