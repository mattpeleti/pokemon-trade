import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import signup from '../actions/signup'


class Signup extends Component {
	constructor(props){
		super(props)
		this.state = {username: "", email: "", friendcode: "", password: ""}
	}

	handleUsernameChange(event) {
		this.setState({username: event.target.value})
	}

	handleEmailChange(event) {
		this.setState({email: event.target.value})
	}

	handleFriendcodeChange(event) {
		this.setState({friendcode: event.target.value})
	}

	handlePasswordChange(event) {
		this.setState({password: event.target.value})
	}

	handleSubmit(event) {
		event.preventDefault()
		this.props.signup(this.state)
	}

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit.bind(this)}>
					<label> Username </label>
					<input type="text" placeholder="Username" onChange={this.handleUsernameChange.bind(this)}/>
					<label> Email </label>
					<input type="text" placeholder="Email" onChange={this.handleEmailChange.bind(this)}/>
					<label> Friendcode </label>
					<input type="text" placeholder="Friendcode" onChange={this.handleFriendcodeChange.bind(this)}/>
					<label> Password </label>
					<input type="password" placeholder="Password" onChange={this.handlePasswordChange.bind(this)}/>
					<input type="submit"/>
				</form>
			</div>
		)
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({signup: signup}, dispatch)
}

export default connect(null, mapDispatchToProps)(Signup)