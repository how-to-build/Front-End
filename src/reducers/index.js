import { combineReducers } from 'redux';

import { LoggingIn } from '../reducers/Login';
import { Registering } from '../reducers/Register';
import { getCards } from '../reducers/getCards';
import { ChangingPassword } from '../reducers/ChangePassword';

const rootReducer = combineReducers({
  LoggingIn,
  Registering,
  getCards,
  ChangingPassword
})

export default rootReducer;