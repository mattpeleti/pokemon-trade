const default_state = {posts: [], requestedPokemon: [], showShiny: false}

export default function posts(state = default_state, action) {
	switch(action.type) {
		case "CREATE_POST":
			return {...state, posts: state.posts.concat(action.payload)}
		case "GET_USER_POSTS":
			return {...state, posts: action.payload}
		// case "INITIALIZE_POST":
		// 	return {...state, new_post_id: action.payload}
		case "SET_SHOW_SHINY":
			return {...state, showShiny: action.payload}
		case "CREATE_REQUESTED_POKEMON":
			return {...state}
		default:
			return state
	}
}
