import $ from 'jquery'
import { browserHistory } from 'react-router'

export default function signup(formData) {
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
			}else{
				browserHistory.push('/') // our route we redirect to
				localStorage.setItem('jwt', response.jwt)
				dispatch({type: 'LOGGING_IN', payload: {'current_user': response.userId}})
			}
		})
	}
}