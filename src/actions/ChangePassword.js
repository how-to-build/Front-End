import axiosWithAuth from '../axiosAuth';

export const CHANGE_PASSWORD_START = 'CHANGE_PASSWORD_START';
export const CHANGE_PASSWORD_SUCCESS = 'CHANGE_PASSWORD_SUCCESS';
export const CHANGE_PASSWORD_FAILURE = 'CHANGE_PASSWORD_FAILURE';

export const changePassword = (username, oldPassword, newPassword) => dispatch => {
    dispatch({ type: CHANGE_PASSWORD_START });
    axiosWithAuth().put(`https://frozen-hamlet-77739.herokuapp.com/api/users/${username}`, {
        oldPassword: oldPassword,
        newPassword: newPassword
    }).then(res => {
        dispatch({
            type: CHANGE_PASSWORD_SUCCESS,
            payload: res.data
        });
    }).catch(err => {
        dispatch({
            type: CHANGE_PASSWORD_FAILURE,
            payload: err.message
        });
    });
}