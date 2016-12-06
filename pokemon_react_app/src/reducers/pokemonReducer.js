export default function pokemon(state = {}, action) {
	switch(action.type) {
		case "NEW_POKEMON":
			return {...state}
		default:
			return state
	}
}
