import {
    NEW_USER_FULFILLED, NEW_USER_REJECTED, NEW_USER_PENDING,
    FETCH_USER_FULFILLED, FETCH_USER_REJECTED, FETCH_USER_PENDING,
    UPDATE_USER_FULFILLED, UPDATE_USER_REJECTED, UPDATE_USER_PENDING,
} from '../actions/newUser'

const initialState = {
    fetching: false,
    done: false,
    users: [],
    error: {},
    user: {
        fetching:false
    }
}

export default (state = initialState, action) => {
    switch (action.type) {
        case NEW_USER_PENDING:
            return {
                ...state,
				fetching: true,
				done: false
            };
        case NEW_USER_FULFILLED:
            return {
                ...state,
                users: action.payload,
                fetching: false,
                done: true
            };
        case NEW_USER_REJECTED:
            return {
                ...state,
                error: action.payload,
                fetching: false
            };

            //FETCH USER
        case FETCH_USER_PENDING:
            return {
                ...state,
                user:{
                    fetching:true
                }
            };
        case FETCH_USER_FULFILLED:
            return {
                ...state,
                user:{
                    ...action.payload,
                    fetching:false
                }
            };
        case FETCH_USER_REJECTED:
            return {
                ...state,
                user:{
                    fetching:false
                }
            };

              //UPDATE USER
        case UPDATE_USER_PENDING:
            return {
                ...state,
                fetching:true,
                done:false
               
            };
        case UPDATE_USER_FULFILLED:
            return {
                ...state,
                user:{
                    ...action.payload,
                    fetching:false,
                    done:true
                }
            };
        case UPDATE_USER_REJECTED:
            return {
                ...state,
                error: action.payload,
                fetching: false
            };
        default:
            return state;
    }
}