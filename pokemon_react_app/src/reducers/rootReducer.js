import { combineReducers } from 'redux'
import users from './userReducer'
import posts from './postReducer'
import pokemon from './pokemonReducer'
import forms from './formReducer'
import basePokemon from './basePokemonReducer'

export default combineReducers({ users, posts, pokemon, basePokemon, forms })