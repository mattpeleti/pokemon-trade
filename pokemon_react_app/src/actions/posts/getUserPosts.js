import $ from 'jquery'

export default function getUserPosts(userId) {
	return function(dispatch) {
		$.ajax({
			type: 'GET',
			url: `http://localhost:3000/api/users/${userId}/posts`,
			headers: {authorization: localStorage.getItem('jwt')},
			contentType: 'application/json; charset=utf-8',
			datatype: 'json'
		}).done((response) => {
			dispatch({type: 'GET_USER_POSTS', payload: response})
		})
	}
}