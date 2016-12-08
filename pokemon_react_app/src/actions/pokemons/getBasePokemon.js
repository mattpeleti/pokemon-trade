import getAbilities from '../../actions/pokemons/getAbilities'

import $ from 'jquery'

export default function getBasePokemon(formData) {
	return function(dispatch) {
		$.ajax({
			type: 'GET',
			url: `http://localhost:3000/base_pokemons/${formData.natdexnum}`,
			headers: {authorization: localStorage.getItem('jwt')},
			contentType: 'application/json; charset=utf-8',
			datatype: 'json'
		}).done((response) => {
			dispatch(getAbilities(response.basePokemon.id))
			dispatch({type: 'GET_BASE_POKEMON', payload: response.basePokemon})
		})
	}
}