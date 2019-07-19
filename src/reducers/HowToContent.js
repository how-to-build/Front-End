export const HOW_TO_CONT_PENDING = 'HOW_TO_CONT_PENDING';
export const HOW_TO_CONT_SUCCESS = 'HOW_TO_CONT_SUCCESS';
export const HOW_TO_CONT_ERROR = 'HOW_TO_CONT_ERROR';

const initialState = {
  pending: false,
  success: false,
  content: {},
  error: ''
}

export const HowToContent = (state = initialState, action) => {
  switch(action.type) {
    case HOW_TO_CONT_PENDING:
      return {
        ...state,
        pending: action.payload
      }
    case HOW_TO_CONT_SUCCESS:
      return {
        ...state,
        success: true,
        content: action.payload
      }
    case HOW_TO_CONT_ERROR:
      return {
        ...state,
        success: action.payload
      }
    default:
      return state
  }
}