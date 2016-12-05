
export default function posts(state = {posts: []}, action) {
	switch(action.type) {
		case "CREATE_POST":
			return {...state, posts: state.posts.concat(action.payload.post)}
		case "INITIALIZE_POST":
			return {...state, new_post_id: action.payload}
		default:
			return state
	}
}
