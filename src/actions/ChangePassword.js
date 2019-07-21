import axiosWithAuth from '../axiosAuth';

export const CHANGE_PASSWORD_START = 'CHANGE_PASSWORD_START';
export const CHANGE_PASSWORD_SUCCESS = 'CHANGE_PASSWORD_SUCCESS';
export const CHANGE_PASSWORD_FAILURE = 'CHANGE_PASSWORD_FAILURE';

export const changePassword = (username, password, newPassword) => dispatch => {
    dispatch({ type: CHANGE_PASSWORD_START });
    axiosWithAuth().get(`https://frozen-hamlet-77739.herokuapp.com/api/users/${username}`).then(res => {
        console.log(res);

        axiosWithAuth().put(`https://frozen-hamlet-77739.herokuapp.com/api/users/${res.data.user.id}`, {
            password: password,
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
    }).catch(err => {
        dispatch({
            type: CHANGE_PASSWORD_FAILURE,
            payload: err.message
        });
    });
}