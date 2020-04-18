import axios from 'axios'
import { API_BASE } from '../config/env'

export const NEW_USER_PENDING="NEW_USER_PENDING"
export const NEW_USER_FULFILLED="NEW_USER_FULFILLED"
export const NEW_USER_REJECTED="NEW_USER_REJECTED"

export const FETCH_USER_PENDING="FETCH_USER_PENDING"
export const FETCH_USER_FULFILLED="FETCH_USER_FULFILLED"
export const FETCH_USER_REJECTED="FETCH_USER_REJECTED"

export const UPDATE_USER_PENDING="UPDATE_USER_PENDING"
export const UPDATE_USER_FULFILLED="UPDATE_USER_FULFILLED"
export const UPDATE_USER_REJECTED="UPDATE_USER_REJECTED"

export function newUserSubmit({username,lastname}) {
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
            type:'NEW_USER',
            payload: axios.post(API_BASE + "/user/postAddUser",{userName:username,lastName:lastname})
               .then(result =>console.log(result.data))  // redux-promise-middleware kütüphanesi kullandığımızda istekleri daha dinamik hale getirdik.
        })
    }
}

export function fetchUser(id) {
    console.log(id);
    return dispatch => {
        dispatch({
            type:'FETCH_USER',
            payload: axios.get(API_BASE + "/user/getUser/"+id)
            .then(result=>result.data)
        })
    }
}


export function onUpdateMovieSubmit({id,username,lastname}) {
    console.log(id);
    return dispatch => {
        dispatch({
            type:'UPDATE_USER',
            payload: axios.post(API_BASE + "/user/updateUser/",{id:id,userName:username,lastName:lastname})
            .then(result=>result.data)
        })
    }
}