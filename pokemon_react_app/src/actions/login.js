import $ from 'jquery'
import { browserHistory } from 'react-router'

export default function login(formData) {
	return function(dispatch) {
		$.ajax({
			type: 'POST',
			url: 'http://localhost:3000/login',
			data: JSON.stringify({auth: {
				username: formData.username,
				password: formData.password
			}}),
			contentType: 'application/json; charset=utf-8',
			datatype: 'json'
		}).done((response) => {
			if(response.error){
				browserHistory.push('/login')
			} else {
				browserHistory.push('/')
				localStorage.setItem('jwt', response.jwt)
				dispatch({type: 'LOG_IN', payload:
					{currentUser: {id: response.userId, username: response.username}}
				})
			}
		})
	}
}