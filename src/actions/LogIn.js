import axios from 'axios';

export const LOGIN_PENDING = "LOGIN_PENDING";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_ERROR = "LOGIN_ERROR";

export const LoggingIn = state => dispatch => {
  dispatch({ type: LOGIN_PENDING, payload: true });

  axios
    .get('https://frozen-hamlet-77739.herokuapp.com/', {
      headers: {
        username: state.username,
        password: state.password
      }
    })
    .then(res => {
      localStorage.setItem('token', res.token);
      dispatch({ type: LOGIN_PENDING, payload: false });

    })
    .catch(err => {
      dispatch({ type: LOGIN_PENDING, payload: false });
      dispatch({ type: LOGIN_ERROR, payload: err });
    })
};