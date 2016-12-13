import { browserHistory } from 'react-router'
import $ from 'jquery'

export default function getPost(post_id) {

	return function(dispatch) {
		$.ajax({
			type: 'GET',
			url: `http://localhost:3000/api/trade_posts/${post_id}`,
			headers: {authorization: localStorage.getItem('jwt')},
			contentType: 'application/json; charset=utf-8',
			datatype: 'json'
		}).done((response) => {
			dispatch({type: "GET_POST", payload: {showPost: response}})
		  browserHistory.push(`/posts/${response.post.id}`)
		})
	}
}
