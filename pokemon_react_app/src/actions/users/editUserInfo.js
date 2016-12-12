import $ from 'jquery'
import { browserHistory } from 'react-router'

export default function editUserInfo(formData) {
  return function(dispatch) {
    $.ajax({
      type: 'PATCH',
      url: `http://localhost:3000/api/users/${formData.id}`,
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