
const defaultState = {'creatingUser': false, 'currentUser': null}

export default function users(state = defaultState, action) {
	switch(action.type) {
		case "CREATE_USER":
			return {...state, 'creatingUser': true}
		case "LOG_IN":
			return {
				...state,
				'creatingUser': false,
				'currentUser': action.payload.currentUser
			}
		case "LOG_OUT":
			return {...state, 'creatingUser': false, 'currentUser': null}
		default:
			return state
	}
}
