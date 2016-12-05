import React, { Component } from 'react'
import { Link } from 'react-router'
import { browserHistory } from 'react-router'
import '../App.css';

export default class Navbar extends Component {

	handleLogout(event){
    event.preventDefault()
    window.localStorage.removeItem("jwt")
    browserHistory.push('/login')
  }

	render() {
		return (
			<div>
        	<li><Link to={'/'}>Home</Link></li>
	        <li><Link to={'/login'}>Log In</Link></li>
	        <li><Link to={'/signup'}>Sign Up</Link></li>
          <li><a href='' onClick={this.handleLogout.bind(this)}>Logout</a></li>
          <li><Link to={'/posts/new'}>New Post</Link></li>
			</div>
		)
	}
}