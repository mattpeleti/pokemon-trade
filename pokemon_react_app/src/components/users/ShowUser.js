import React, { Component } from 'react'
import { connect } from 'react-redux'
import auth from '../../lib/auth'
import EditUser from './EditUser'
import { Link } from 'react-router'

class ShowUser extends Component {

	show() {
		if (this.props.children) {
			return <div>{this.props.children}</div>
		} else {
			return (
				<div>
					<h3>this is the Users Show page</h3>
					<p>Username: {this.props.currentUser.username}</p>
					<p>ID: {this.props.currentUser.id}</p>
					<p>friendcode: {this.props.currentUser.friendcode}</p>
					<p>email: {this.props.currentUser.email}</p>
					<Link to={`/users/${this.props.currentUser.id}/edit`}>Edit Profile</Link>
				</div>
			)
		}
	}

	render() {
		return this.show()
	}
}

function mapStateToProps(state) {
	return {currentUser: state.users.currentUser}
}

export default auth(connect(mapStateToProps)(ShowUser))