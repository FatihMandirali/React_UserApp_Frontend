import axios from 'axios'
import { API_BASE } from '../config/env'

export const FETCH_USERS_PENDING="FETCH_USERS_PENDING"
export const FETCH_USERS_FULFILLED="FETCH_USERS_FULFILLED"
export const FETCH_USERS_REJECTED="FETCH_USERS_REJECTED"
export function fetchUsers() {
    return dispatch => {
        // axios.get(API_BASE + "/user/getUsers")
        //     .then(result =>result.data)
        //     .then(data=>dispatch({
        //         type:FETCH_USERS_FULFILLED,
        //         payload:data
        //     }))
        //     .catch(error => dispatch({
        //         type:FETCHED_USERS_REJECTED,
        //         payload:error
        //     })); // redux-promise-middleware kütüphanesi kullanmadan tam hali ile istekleri atıyoruz.
        dispatch({
            type:'FETCH_USERS',
            payload: axios.get(API_BASE + "/user/getUsers")
                 .then(result =>result.data)  // redux-promise-middleware kütüphanesi kullandığımızda istekleri daha dinamik hale getirdik.
        })
    }
}
