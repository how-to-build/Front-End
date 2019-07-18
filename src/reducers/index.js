import { combineReducers } from 'redux';

import { LoggingIn } from '../reducers/Login';
import { Registering } from '../reducers/Register';
import { getCards } from '../reducers/getCards';
import { AddCard } from '../reducers/AddCard';
import { ChangingPassword } from '../reducers/ChangePassword';
import { GettingUser } from '../reducers/GetUser';

const rootReducer = combineReducers({
  LoggingIn,
  Registering,
  getCards,
  AddCard,
  ChangingPassword,
  GettingUser
})

export default rootReducer;