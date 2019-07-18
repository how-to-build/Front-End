import axiosWithAuth from '../axiosAuth';

export const GET_USER_START = 'GET_USER_START';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_FAILURE = 'GET_USER_FAILURE';

export const getUser = username => dispatch => {
    dispatch({ type: GET_USER_START });
    axiosWithAuth.get(`https://frozen-hamlet-77739.herokuapp.com/api/users/${username}`).then(res => {
        dispatch({
            type: GET_USER_SUCCESS,
            payload: res.data
        });
    }).catch(err => {
        dispatch({
            type: GET_USER_FAILURE,
            payload: err.message
        });
    });
}