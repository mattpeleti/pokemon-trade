export default function postPokemon(state = {posts: []}, action) {
	switch(action.type) {
		case "NEW_POST_POKEMON":
			return {...state, post_id: action.payload.post_id}
		default:
			return state
	}
}
