import $ from 'jquery'

export default function createRequestedPokemon(formData, postId) {
	return function(dispatch) {
		$.ajax({
			type: 'POST',
			url: `http://localhost:3000/api/trade_posts/${postId}/requested_pokemons`,
			data: JSON.stringify({requested_pokemon: {
				base_pokemon_id: formData.base_pokemon_id,
				min_level: formData.min_level,
				max_level: formData.max_level,
				nature_ids: formData.natures,
				ability_ids: formData.abilities,
				shiny: formData.shiny
			}}),
			headers: {authorization: localStorage.getItem('jwt')},
			contentType: 'application/json; charset=utf-8',
			datatype: 'json'
		}).done((response) => {
			dispatch({type: 'CREATE_REQUESTED_POKEMON'})
		})
	}
}