import { combineReducers } from 'redux';

import { LoggingIn } from '../reducers/Login';
import { Registering } from '../reducers/Register';
import { GetCards } from '../reducers/GetCards';
import { AddCard } from '../reducers/AddCard';
import { ChangingPassword } from '../reducers/ChangePassword';
import { GettingUser } from '../reducers/GetUser';
import { HowToContent } from '../reducers/HowToContent';

const rootReducer = combineReducers({
  LoggingIn,
  Registering,
  GetCards,
  AddCard,
  ChangingPassword,
  GettingUser,
  HowToContent
})

export default rootReducer;