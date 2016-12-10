import $ from 'jquery'

export default function getPokemons(userId) {
	return function(dispatch) {
		$.ajax({
			type: 'GET',
			url: `http://localhost:3000/api/users/${userId}/pokemons`,
			headers: {authorization: localStorage.getItem('jwt')},
			contentType: 'application/json; charset=utf-8',
			datatype: 'json'
		}).done((response) => {
			dispatch({type: 'GET_POKEMONS', payload: response})
		})
	}
}