import { combineReducers } from 'redux'
import users from './userReducer'
import posts from './postReducer'
import pokemon from './pokemonReducer'
import forms from './formReducer'
import basePokemon from './basePokemonReducer'

const appReducer = combineReducers({
	users, posts, pokemon, basePokemon, forms
})

const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT') {
    state = undefined
  }

  return appReducer(state, action)
}

export default rootReducer