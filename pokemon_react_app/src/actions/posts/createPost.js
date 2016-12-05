import $ from 'jquery'
import { browserHistory } from 'react-router'

export default function createPost(formData) {
	return function(dispatch) {
		$.ajax({
			type: 'POST',
			url: 'http://localhost:3000/trade_posts',
			data: JSON.stringify({post: {
				post_pokemon: formData.postPokemon,
				req_pokemon: formData.reqPokemon,
				title: formData.title
			}}),
			headers: {authorization: localStorage.getItem('jwt')},
			contentType: 'application/json; charset=utf-8',
			datatype: 'json'
		}).done((response) => {
			dispatch({type: 'CREATE_POST', payload: response.post})
		})
	}
}