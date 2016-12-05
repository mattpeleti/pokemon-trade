import $ from 'jquery'
import { browserHistory } from 'react-router'

export default function initPost() {
	return function(dispatch) {
		$.ajax({
			type: 'POST',
			url: 'http://localhost:3000/init_post',
			headers: {authorization: localStorage.getItem('jwt')},
			contentType: 'application/json; charset=utf-8',
			datatype: 'json'
		}).done((response) => {
			dispatch({type: 'INITIALIZE_POST', payload: response.id})
		})
	}
}