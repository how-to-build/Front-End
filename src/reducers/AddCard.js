import { ADD_CARD_PENDING, ADD_CARD_SUCCESS, ADD_CARD_ERROR } from '../actions/AddCard';

const initialState = {
  pending: false,
  success: false,
  error: ''
}

export const AddCard = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CARD_PENDING:
      return{
        ...state,
        pending: action.payload
      }
    case ADD_CARD_SUCCESS:
      return{
        ...state,
        success: action.payload
      }
    case ADD_CARD_ERROR:
      return{
        ...state,
        error: action.payload
      }
    default:
      return state;
  }
}