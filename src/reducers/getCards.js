export const CARDS_PENDING = 'CARDS_PENDING';
export const CARDS_SUCCESS = 'CARDS_SUCCESS';
export const CARDS_ERROR = 'CARDS_ERROR';

const initialState = {
  pending: false,
  cards: '',
  error: ''
}

export const getCards = (state = initialState, action) => {
  switch(action.type) {
    case CARDS_PENDING: 
      return {
        ...state
      }
    case CARDS_SUCCESS:
      return {
        ...state,
        cards: action.payload
      }
    case CARDS_ERROR:
      return {
        ...state,
        error: action.payload
      }
    default:
      return state;
  }
}