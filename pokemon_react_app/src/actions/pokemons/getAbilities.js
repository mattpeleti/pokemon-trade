import $ from 'jquery'

export default function getAbilities(basePokemonId) {
	return function(dispatch) {
		$.ajax({
			type: 'GET',
			url: `http://localhost:3000/abilities/${basePokemonId}`,
			headers: {authorization: localStorage.getItem('jwt')},
			contentType: 'application/json; charset=utf-8',
			datatype: 'json'
		}).done((response) => {
			dispatch({type: 'GET_ABILITIES', payload: response.abilities})
		})
	}
}