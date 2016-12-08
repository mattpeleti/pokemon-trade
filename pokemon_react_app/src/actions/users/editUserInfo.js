import $ from 'jquery'
import { browserHistory } from 'react-router'

export default function editUserInfo(formData) {
  return function(dispatch) {
		$.ajax({
			type: 'POST',
			url: 'http://localhost:3000/users/edit',
			data: JSON.stringify({auth: {
				password: formData.password,
				email: formData.email,
				friendcode: formData.friendcode
			}}),
			contentType: 'application/json; charset=utf-8',
			datatype: 'json'
		}).done((response) => {
			browserHistory.push('/') // our route we redirect to
			dispatch({type: 'EDIT_USER', payload:
				{currentUser: {id: response.userId, username: response.username}}
			})
		})
	}
}
