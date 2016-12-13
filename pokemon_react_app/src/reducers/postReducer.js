const default_state = {userPosts: [], requestedPokemon: [], showPostId: null, showPost: {}, showShiny: false}

export default function posts(state = default_state, action) {
	switch(action.type) {
		case "CREATE_POST":
			return {...state, showPostId: action.payload.showPostId} //userPosts: state.userPosts.concat(action.payload.posts), requestedPokemons: action.payload.reqPokemons, postPokemons: action.payload.postPokemons}
		case "GET_USER_POSTS":
			return {...state, userPosts: action.payload}
		case "GET_POST":
			return {...state, showPost: action.payload.showPost}
		case "SET_SHOW_SHINY":
			return {...state, showShiny: action.payload}
		case "CREATE_REQUESTED_POKEMON":
			return {...state}
		default:
			return state
	}
}
