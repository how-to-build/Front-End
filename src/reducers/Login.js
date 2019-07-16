import { LOGIN_PENDING, LOGIN_SUCCESS, LOGIN_ERROR } from '../actions/LogIn';

const initialState = {
  pending: false,
  success: false,
  error: ''
}

export const LoggingIn = (state = initialState, action) => {
  switch(action.type) {
    case LOGIN_PENDING:
      return {
        ...state,
        pending: true
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        pending: false,
        success: true
      }
    case LOGIN_ERROR:
      return {
        ...state,
        pending: false,
        error: action.payload
      }
    default:
      return state;
  }
}