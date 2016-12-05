import React, { Component } from 'react'
import { Link } from 'react-router'
import { browserHistory } from 'react-router'
import logout from '../actions/logout'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import initPost from '../actions/posts/initPost'
import '../App.css';

class Navbar extends Component {

	handleLogout(event){
    event.preventDefault()
    this.props.logout()
  }

	render() {
		return (
			<div>
        	<li><Link to={'/'}>Home</Link></li>
	        <li><Link to={'/login'}>Log In</Link></li>
	        <li><Link to={'/signup'}>Sign Up</Link></li>
          <li><a href='' onClick={this.handleLogout.bind(this)}>Logout</a></li>
          <li><Link to={'/posts/new'} >New Post</Link></li>
          <br/>
			</div>
		)
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ logout, initPost }, dispatch)
}

export default connect(null, mapDispatchToProps)(Navbar)