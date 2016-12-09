import $ from 'jquery'
import { browserHistory } from 'react-router'

export default function createPost(formData) {
	return function(dispatch) {
		$.ajax({
			type: 'POST',
			url: 'http://localhost:3000/api/trade_posts',
			data: JSON.stringify({post: {
				pokemon_id: formData.pokemonId, // Drop down input of all the users pokemon with pokemon id as it's value
				title: formData.title,
				description: formData.description
			}}),
			headers: {authorization: localStorage.getItem('jwt')},
			contentType: 'application/json; charset=utf-8',
			datatype: 'json'
		}).done((response) => {
			dispatch({type: 'CREATE_POST', payload: response.post})
		})
	}
}