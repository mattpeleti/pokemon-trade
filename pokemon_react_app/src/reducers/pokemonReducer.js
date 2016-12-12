const default_state = {pokemons: [], natures: [], abilities: [], basePokemons: []}

export default function pokemon(state = default_state, action) {
	switch(action.type) {
		case "NEW_POKEMON":
			return {...state}
		case "GET_POKEMONS":
			return {...state, ...action.payload}
		default:
			return state
	}
}
