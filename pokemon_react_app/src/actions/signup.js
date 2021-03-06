import $ from 'jquery'
import { browserHistory } from 'react-router'

export default function signup(formData) {
	return function(dispatch) {
		dispatch({type: 'CREATE_USER'})
		$.ajax({
			type: 'POST',
			url: 'http://localhost:3000/api/users',
			data: JSON.stringify({auth: {
				username: formData.username,
				password: formData.password,
				email: formData.email,
				friendcode: formData.friendcode
			}}),
			contentType: 'application/json; charset=utf-8',
			datatype: 'json'
		}).done((response) => {
			browserHistory.push('/')
			localStorage.setItem('jwt', response.jwt)
			dispatch({type: 'STORE_USER_INFO', payload: {
				currentUser: {
					id: response.userId,
					username: response.username,
					email: response.email,
					friendcode: response.friendcode
				}
			}})
		})
	}
}