import axios from 'axios';

export const ADD_CARD_PENDING = 'ADD_CARD_PENDING';
export const ADD_CARD_SUCCESS = 'ADD_CARD_SUCCESS';
export const ADD_CARD_ERROR = 'ADD_CARD_ERROR';

export const AddCard = state => dispatch => {
  console.log(state); // this is returning correctly

  dispatch({ type: ADD_CARD_PENDING, payload: true });

  axios
    .post('https://frozen-hamlet-77739.herokuapp.com/api/howTos', {
      title: state.title,
      description: state.description,
      user_id: state.user_id,
      token: `${localStorage.getItem('token')}`
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