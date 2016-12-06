export default function pokemon(state = {}, action) {
	switch(action.type) {
		case "NEW_POKEMON":
			return {...state}
		case "GET_NATURES":
			return {...state, natures: action.payload.natures}
		default:
			return state
	}
}
