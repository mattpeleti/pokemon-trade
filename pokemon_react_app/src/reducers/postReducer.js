
export default function postReducer(state = {posts: []}, action) {
	switch(action.type) {
		case "MAKE_POST":
			return {posts: state.posts.concat(action.payload.post)}
		default:
			return state
	}
}
