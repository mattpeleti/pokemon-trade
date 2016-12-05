
export default function posts(state = {posts: []}, action) {
	switch(action.type) {
		case "CREATE_POST":
			return {...state, posts: state.posts.concat(action.payload.post)}
		default:
			return state
	}
}
