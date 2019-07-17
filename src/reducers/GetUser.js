import { GET_USER_START, GET_USER_SUCCESS, GET_USER_FAILURE } from '../actions/GetUser';

const initialState = {
    pending: false,
    user: {},
    error: ''
}

export const GettingUser = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER_START:
            return {
                ...state,
                pending: true,
                error: ''
            }
        case GET_USER_SUCCESS:
            return {
                ...state,
                pending: false,
                user: action.payload
            }
        case GET_USER_FAILURE:
            return {
                ...state,
                pending: false,
                error: action.payload
            }
        default:
            return state;
    }
}