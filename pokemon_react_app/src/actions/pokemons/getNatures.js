import $ from 'jquery'

export default function getNatures(formData) {
	return function(dispatch) {
		$.ajax({
			type: 'GET',
			url: 'http://localhost:3000/natures',
			contentType: 'application/json; charset=utf-8',
			datatype: 'json'
		}).done((response) => {
			dispatch({type: "GET_NATURES", payload: response.natures})
		})
	}
}