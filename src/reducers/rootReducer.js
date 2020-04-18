import {combineReducers} from 'redux'
import users from './users'
import newUser from './newUser'

export default combineReducers({
    users,
    newUser
})