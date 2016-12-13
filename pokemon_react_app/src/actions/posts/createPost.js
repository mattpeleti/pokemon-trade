import $ from 'jquery'
import { browserHistory } from 'react-router'
import createRequestedPokemon from '../pokemons/createRequestedPokemon'

export default function createPost(formData, formData2) {
	return function(dispatch) {
		$.ajax({
			type: 'POST',
			url: 'http://localhost:3000/api/trade_posts',
			data: JSON.stringify({post: {
				pokemon_id: formData.pokemonId, // Drop down input of all the user's pokemon with pokemon id as it's value
				title: formData.title,
				description: formData.description
			}}),
			headers: {authorization: localStorage.getItem('jwt')},
			contentType: 'application/json; charset=utf-8',
			datatype: 'json'
		}).done((response) => {
			debugger
			browserHistory.push(`/posts/${response.postId}`)
			dispatch(createRequestedPokemon(formData2, response.postId))
			dispatch({type: 'CREATE_POST'})
		})
	}
}