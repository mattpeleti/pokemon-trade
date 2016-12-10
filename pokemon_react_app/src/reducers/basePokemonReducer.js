const default_state = {base_pokemon: {}, abilities: [], natures: []}

export default function basePokemon(state = default_state, action) {
	switch(action.type) {
		case "GET_BASE_POKEMON":
			return {...state, base_pokemon: action.payload}
		case "GET_ABILITIES":
			return {...state, abilities: action.payload}
		case "GET_NATURES":
			return {...state, natures: action.payload}
		default:
			return state
	}
}
