import { FETCH_USERS_FULFILLED, FETCH_USERS_REJECTED,FETCH_USERS_PENDING } from '../actions/users'

const initialState = {
    fetching: false,
    users: [],
    error: {}
}

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS_PENDING:
            return {
                ...state,
                fetching:true
            };
        case FETCH_USERS_FULFILLED:
            return {
                ...state,
                users: action.payload,
                fetching:false
            };
        case FETCH_USERS_REJECTED:
            return {
                ...state,
                error: action.payload,
                fetching:false
            };
        default:
            return state;
    }
}