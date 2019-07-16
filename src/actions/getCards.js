import axios from 'axios';

import { CARDS_PENDING, CARDS_SUCCESS, CARDS_ERROR } from '../reducers/getCards.js';

const cards = [{
  id: 12,
  title: "test",
  description: "test",
  likes: 0,
  user_id: 14
},
{
  id: 14,
  title: "test555",
  description: "test",
  likes: 0,
  user_id: 25
}];


const getCards = () => dispatch => {
  dispatch({ type: CARDS_PENDING, payload: true });

  axios
    .get('https://frozen-hamlet-77739.herokuapp.com/api/howTos/')
    .then(res => {
      dispatch({ type: CARDS_SUCCESS, payload: cards });
      dispatch({ type: CARDS_PENDING, payload: false });
    })
    // .then(res => dispatch({ type: CARDS_SUCCESS, payload: res.data.allHowTos }))
    .catch(err => dispatch({ type: CARDS_ERROR, payload: err.message }))
}

export default getCards;