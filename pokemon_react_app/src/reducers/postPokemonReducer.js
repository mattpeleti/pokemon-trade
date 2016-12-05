export default function postPokemon(state = {posts: []}, action) {
	switch(action.type) {
		case "NEW_POST_POKEMON":
			return {state..., action.payload.post)}
		default:
			return state
	}
}
