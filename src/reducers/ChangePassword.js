import { CHANGE_PASSWORD_START, CHANGE_PASSWORD_SUCCESS, CHANGE_PASSWORD_FAILURE } from '../actions/ChangePassword';

const initialState = {
    pending: false,
    error: ''
}

export const ChangingPassword = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_PASSWORD_START:
            return {
                ...state,
                pending: true,
                error: ''
            }
        case CHANGE_PASSWORD_SUCCESS:
            return {
                ...state,
                pending: false
            }
        case CHANGE_PASSWORD_FAILURE:
            return {
                ...state,
                pending: false,
                error: action.payload
            }
        default:
            return state;
    }
}