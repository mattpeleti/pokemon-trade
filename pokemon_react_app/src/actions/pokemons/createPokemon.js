import $ from 'jquery'
import { browserHistory } from 'react-router'

export default function createPokemon(formData) {
	return function(dispatch) {
		$.ajax({
			type: 'POST',
			url: 'http://localhost:3000/pokemon',
			data: JSON.stringify({pokemon: {
				natdexnum: formData.natdexnum,
				nickname: formData.nickname,
				level: formData.level
			}}),
			headers: {authorization: localStorage.getItem('jwt')},
			contentType: 'application/json; charset=utf-8',
			datatype: 'json'
		}).done((response) => {
			dispatch({type: 'CREATE_POKEMON', payload: response.post})
		})
	}
}