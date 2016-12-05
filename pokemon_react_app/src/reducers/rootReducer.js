import { combineReducers } from 'redux'
import users from './userReducer'
import posts from './postReducer'
import postPokemon from './postPokemonReducer'

export default combineReducers({ users, posts, postPokemon })