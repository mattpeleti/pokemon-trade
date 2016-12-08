import $ from 'jquery'

export default function createPokemon(formData) {
	return function(dispatch) {
		$.ajax({
			type: 'POST',
			url: 'http://localhost:3000/pokemons',
			data: JSON.stringify({pokemon: {
				natdexnum: formData.natdexnum,
				nickname: formData.nickname,
				level: formData.level,
				nature_id: formData.nature,
				ability_id: formData.ability,
				shiny: formData.shiny
			}}),
			headers: {authorization: localStorage.getItem('jwt')},
			contentType: 'application/json; charset=utf-8',
			datatype: 'json'
		}).done((response) => {
			dispatch({type: 'CREATE_POKEMON', payload: response.pokemon})
		})
	}
}