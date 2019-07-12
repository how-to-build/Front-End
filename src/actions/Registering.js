import axios from 'axios';

export const REGISTER_PENDING = "REGISTER_PENDING";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_ERROR = "REGISTER_ERROR";

export const Registering = state => dispatch => {
  dispatch({ type: REGISTER_PENDING, payload: true });

  axios
    .get('https://frozen-hamlet-77739.herokuapp.com/', {
      headers: {
        firstName: state.firstName,
        lastName: state.lastName,
        email: state.email,
        username: state.username,
        password: state.password
      }
    })
    .then(res => {
      if (res.token) {
        localStorage.setItem('token', res.token);
      
        dispatch({ type: REGISTER_PENDING, payload: false });
        dispatch({ type: REGISTER_SUCCESS, payload: true });
      }
    })
    .catch(err => {
      setTimeout(() => {
        dispatch({ type: REGISTER_PENDING, payload: false });
        dispatch({ type: REGISTER_ERROR, payload: err });
      }, 3000);
    })
};