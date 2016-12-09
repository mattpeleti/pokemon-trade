import $ from 'jquery'
import { browserHistory } from 'react-router'

export default function editUserInfo(userId) {
  return function(dispatch) {
    $.ajax({
      type: 'DELETE',
      url: `http://localhost:3000/api/users/${userId}`,
      headers: {authorization: localStorage.getItem('jwt')},
      contentType: 'application/json; charset=utf-8',
      datatype: 'json'
    }).done((response) => {
      browserHistory.push('/login')
      dispatch({type: 'LOGOUT'})
    })
  }
}