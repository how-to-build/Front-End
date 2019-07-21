import axiosAuth from '../axiosAuth';

import { HOW_TO_CONT_PENDING, HOW_TO_CONT_SUCCESS, HOW_TO_CONT_ERROR } from '../reducers/HowToContent';

export const HowToContent = id => dispatch => {
  dispatch({ type: HOW_TO_CONT_PENDING, payload: true });

  axiosAuth()
    .get(`https://frozen-hamlet-77739.herokuapp.com/api/howTos/all/${id}`)
    .then(res => {      
      dispatch({ type: HOW_TO_CONT_SUCCESS, payload: res.data.howTos });
      dispatch({ type: HOW_TO_CONT_PENDING, payload: false });
    })
    .catch(err => {
      dispatch({ type: HOW_TO_CONT_PENDING, payload: false });
      dispatch({ type: HOW_TO_CONT_ERROR, payload: err.message });
    })
};