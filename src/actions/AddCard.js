import axiosAuth from '../axiosAuth';

export const ADD_CARD_PENDING = 'ADD_CARD_PENDING';
export const ADD_CARD_SUCCESS = 'ADD_CARD_SUCCESS';
export const ADD_CARD_ERROR = 'ADD_CARD_ERROR';

export const AddCard = state => dispatch => {
  dispatch({ type: ADD_CARD_PENDING, payload: true });

  axiosAuth()
    .post('https://frozen-hamlet-77739.herokuapp.com/api/howTos', {
      title: state.title,
      description: state.description,
      user_id: state.user_id
    })
    .then(res => {
      dispatch({ type: ADD_CARD_PENDING, payload: false});
      dispatch({ type: ADD_CARD_SUCCESS, payload: true});
    })
    .catch(err => {
      dispatch({ type: ADD_CARD_PENDING, payload: false});
      dispatch({ type: ADD_CARD_ERROR, payload: err});
    })
}