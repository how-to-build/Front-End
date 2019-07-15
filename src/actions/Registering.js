import axios from 'axios';

export const REGISTER_PENDING = "REGISTER_PENDING";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_ERROR = "REGISTER_ERROR";

export const Registering = state => dispatch => {
  dispatch({ type: REGISTER_PENDING, payload: true });
  console.log(state);

  axios
    .post('https://frozen-hamlet-77739.herokuapp.com/api/signup', {
      first_name: state.firstName,
      last_name: state.lastName,
      email: state.email,
      username: state.username,
      password: state.password
    })
    .then(res => {
      console.log(res);

      if (res.token) {
        localStorage.setItem('token', res.token);
      
        dispatch({ type: REGISTER_PENDING, payload: false });
        dispatch({ type: REGISTER_SUCCESS, payload: true });
      }
    })
    .catch(err => {
      dispatch({ type: REGISTER_PENDING, payload: false });
      dispatch({ type: REGISTER_ERROR, payload: err });
    })
};