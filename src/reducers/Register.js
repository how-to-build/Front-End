import { REGISTER_PENDING, REGISTER_SUCCESS, REGISTER_ERROR } from '../actions/Registering';

const initialState = {
  pending: false,
  success: false,
  error: ''
}

export const Registering = (state = initialState, action) => {
  console.log(action.payload)

  switch(action.payload) {
    case REGISTER_PENDING:
      return {
        ...state,
        pending: action.payload
      }
    case REGISTER_SUCCESS:
      return {
        ...state,
        success: action.payload
      }
    case REGISTER_ERROR:
      return {
        ...state,
        error: action.payload
      }
    default:
      return state;
  }
}