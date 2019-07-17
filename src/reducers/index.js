import { combineReducers } from 'redux';

import { LoggingIn } from '../reducers/Login';
import { Registering } from '../reducers/Register';
import { getCards } from '../reducers/getCards';
import { AddCard } from '../reducers/AddCard';

const rootReducer = combineReducers({
  LoggingIn,
  Registering,
  getCards,
  AddCard
})

export default rootReducer;