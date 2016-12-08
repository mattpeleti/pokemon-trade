import $ from 'jquery'
import { browserHistory } from 'react-router'

export default function getUserInfo() {
	return function(dispatch) {
		$.ajax({
			type: 'GET',
			url: 'http://localhost:3000/users/show',
			headers: {authorization: localStorage.getItem('jwt')},
			contentType: 'application/json; charset=utf-8',
			datatype: 'json'
		}).done((response) => {
			if(response.error){
				browserHistory.push('/login')
			} else {
				dispatch({type: 'STORE_USER_INFO', payload:
					{currentUser: {id: response.userId, username: response.username, friendcode: response.friendcode, email: response.email}}
				})
			}
		})
	}
}