import { browserHistory } from 'react-router'

export default function showPost(post_id) {

	return function(dispatch) {
		dispatch({type: "SHOW_POST"})
	  browserHistory.push(`/posts/${post_id}`)
	}
}
