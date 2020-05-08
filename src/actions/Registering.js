import axios from 'axios';

export const REGISTER_PENDING = "REGISTER_PENDING";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_ERROR = "REGISTER_ERROR";

export const Registering = state => dispatch => {
  dispatch({ type: REGISTER_PENDING, payload: true });

  axios
    .post(`${process.env.REACT_APP_REQ_URL}/api/signup`, {
      // first_name: state.firstName,
      // last_name: state.lastName,
      email: state.email,
      username: state.username,
      password: state.password
    })
    .then(res => {
      dispatch({ type: REGISTER_PENDING, payload: false });
      dispatch({ type: REGISTER_SUCCESS, payload: true });
    })
    .catch(err => {
      dispatch({ type: REGISTER_PENDING, payload: false });
      dispatch({ type: REGISTER_ERROR, payload: err });
    })
};