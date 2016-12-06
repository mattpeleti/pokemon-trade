import { combineReducers } from 'redux'
import users from './userReducer'
import posts from './postReducer'
import pokemon from './pokemonReducer'

export default combineReducers({ users, posts, pokemon })