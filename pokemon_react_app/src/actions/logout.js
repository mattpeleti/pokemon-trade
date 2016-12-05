import { browserHistory } from 'react-router'

export default function logout() {
	return function(dispatch) {
		window.localStorage.removeItem("jwt")
		dispatch({type: "LOGOUT"})
	  browserHistory.push('/login')
	}
}
