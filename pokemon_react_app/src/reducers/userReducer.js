
export default function userReducer(state = {'creatingUser': false, 'current_user': null}, action) {
	switch(action.type) {
		case "CREATING_USER":
			return {...state, 'creatingUser': true}
		case "LOGGING_IN":
			return {...state, 'creatingUser': false, 'current_user': action.payload.current_user}
		case "LOGGING_OUT":
			return {...state, 'creatingUser': false, 'current_user': null}
		default:
			return state
	}
}
