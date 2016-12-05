import $ from 'jquery'
import { browserHistory } from 'react-router'

export default function createPostPokemon(formData) {
	return function(dispatch) {
		$.ajax({
			type: 'POST',
			url: 'http://localhost:3000/post_pokemon',
			data: JSON.stringify({post_pokemon: {
				natdexnum: formData.natdexnum,
				nickname: formData.nickname,
				level: formData.level,
				trade_post_id: formData.trade_post_id
			}}),
			headers: {authorization: localStorage.getItem('jwt')},
			contentType: 'application/json; charset=utf-8',
			datatype: 'json'
		}).done((response) => {
			dispatch({type: 'CREATE_POST_POKEMON', payload: response.post})
		})
	}
}