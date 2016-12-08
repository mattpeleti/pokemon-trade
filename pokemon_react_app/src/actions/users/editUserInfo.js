import $ from 'jquery'
import { browserHistory } from 'react-router'

export default function editUserInfo(formData) {
  return function(dispatch) {
    $.ajax({
      type: 'POST',
      url: `http://localhost:3000/users/${formData.id}/edit`,
      data: JSON.stringify({user: {
        password: formData.password,
        email: formData.email,
        friendcode: formData.friendcode
      }}),
      headers: {authorization: localStorage.getItem('jwt')},
      contentType: 'application/json; charset=utf-8',
      datatype: 'json'
    }).done((response) => {
      browserHistory.push(`/users/${response.userId}`)
      dispatch({type: 'STORE_USER_INFO', payload:
        {currentUser: {id: response.userId, username: response.username,  friendcode: response.friendcode, email: response.email}}
      })
    })
  }
}