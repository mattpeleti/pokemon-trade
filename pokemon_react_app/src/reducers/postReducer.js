
export default function posts(state = {posts: [], showShiny: false}, action) {
	switch(action.type) {
		case "CREATE_POST":
			return {...state, posts: state.posts.concat(action.payload.post)}
		case "INITIALIZE_POST":
			return {...state, new_post_id: action.payload}
		case "SET_SHOW_SHINY":
			return {...state, showShiny: action.payload}
		default:
			return state
	}
}
