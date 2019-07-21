import axios from 'axios';

export const LOGIN_PENDING = "LOGIN_PENDING";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_ERROR = "LOGIN_ERROR";

export const LoggingIn = state => dispatch => {
  dispatch({ type: LOGIN_PENDING, payload: true });

  axios
    .post('https://frozen-hamlet-77739.herokuapp.com/api/login', {
        email: state.email.toLowerCase(),
        password: state.password
    })
    .then(res => {
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('username', res.data.username);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data.username });
    })
    .catch(err => {
      dispatch({ type: LOGIN_PENDING, payload: false });
      dispatch({ type: LOGIN_ERROR, payload: err });
    })
};