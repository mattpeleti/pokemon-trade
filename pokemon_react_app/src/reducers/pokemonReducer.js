const default_state = {pokemons: [], natures: []}

export default function pokemon(state = default_state, action) {
	switch(action.type) {
		case "NEW_POKEMON":
			return {...state}
		case "GET_NATURES":
			return {...state, natures: action.payload}
		default:
			return state
	}
}
