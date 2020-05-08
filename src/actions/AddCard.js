import axiosAuth from '../axiosAuth';

export const ADD_CARD_PENDING = 'ADD_CARD_PENDING';
export const ADD_CARD_SUCCESS = 'ADD_CARD_SUCCESS';
export const ADD_CARD_ERROR = 'ADD_CARD_ERROR';

export const AddCard = state => dispatch => {
  dispatch({ type: ADD_CARD_PENDING, payload: true });

  axiosAuth()
    .post(`${process.env.REACT_APP_REQ_URL}/api/howTos`, {
      title: state.title,
      description: state.description,
      user_id: state.user_id
    })
    .then(res => {

      axiosAuth()
        .post(`${process.env.REACT_APP_REQ_URL}/api/steps`, {
          howtoId: res.data.addedHowTo[0].id,
          steps: state.steps
        })
        .then(res => {
          dispatch({ type: ADD_CARD_PENDING, payload: false});
          dispatch({ type: ADD_CARD_SUCCESS, payload: true});
          setTimeout(() => dispatch(revertSuccess()), 6500);
        })
        .catch(err => console.log(err));
    })
    .catch(err => {
      dispatch({ type: ADD_CARD_PENDING, payload: false});
      dispatch({ type: ADD_CARD_ERROR, payload: err});
    })
}

const revertSuccess = () => {
  return { type: ADD_CARD_SUCCESS, payload: false }
}