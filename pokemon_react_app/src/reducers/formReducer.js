const default_state = {}

export default function forms(state = default_state, action) {
	switch(action.type) {
		case "FORM_UPDATE_VALUE":
			return {...state, values: {...state.values, [action.payload.name]: action.payload.value}}
		case "UPDATE_REQUESTED_POKEMON_VALUES":
			return {...state, requestedPokemonValues: action.payload}
		default:
			return state
	}
}
