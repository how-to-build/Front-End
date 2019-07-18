import axios from 'axios';

import { CARDS_PENDING, CARDS_SUCCESS, CARDS_ERROR } from '../reducers/GetCards.js';

const GetCards = () => dispatch => {
  dispatch({ type: CARDS_PENDING, payload: true });

  axios
    .get('https://frozen-hamlet-77739.herokuapp.com/api/howTos/')
    .then(res => {      
      dispatch({ type: CARDS_SUCCESS, payload: res.data.allHowTos });
      // dispatch({ type: CARDS_SUCCESS, payload: cards });
      dispatch({ type: CARDS_PENDING, payload: false });
    })
    .catch(err => dispatch({ type: CARDS_ERROR, payload: err.message }))
}

export default GetCards;