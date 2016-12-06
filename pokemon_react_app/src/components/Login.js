import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import login from '../actions/login'
import {FormGroup, FormControl} from 'react-bootstrap'

class Login extends Component {
	constructor(props) {
		super(props)
		this.state = {username: "", password: ""}
	}

	handleUsernameChange(event) {
		this.setState({username: event.target.value})
	}

	handlePasswordChange(event) {
		this.setState({password: event.target.value})
	}

	handleSubmit(event) {
		event.preventDefault()
		this.props.login(this.state)
	}

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit.bind(this)} className="LoginForm">
					<FormGroup
						controlId="UserNameInput"
						>
						<FormControl
						type="text"
						value={this.state.username}
						placeholder="Username"
						onChange={this.handleUsernameChange.bind(this)}
						/>
					</FormGroup>

					<FormGroup
	          controlId="PasswordInput"
	        >
	          <FormControl
	            type="password"
	            value={this.state.password}
	            placeholder="Password"
	            onChange={this.handlePasswordChange.bind(this)}
	          />
	        </FormGroup>

					<FormGroup
	          controlId="Submit"
	        >
	          <FormControl
							className="LogSub"
	            type="submit"
	          />
	        </FormGroup>


				</form>
			</div>

		)
	}
}


// <form onSubmit={this.handleSubmit.bind(this)}>
// 	<label> Username </label>
// 	<input type="text" placeholder="Username" onChange={this.handleUsernameChange.bind(this)}/>
// 	<label> Password </label>
// 	<input type="password" placeholder="Password" onChange={this.handlePasswordChange.bind(this)}/>
// 	<input type="submit"/>
// </form>
// </div>

function mapDispatchToProps(dispatch) {
	return bindActionCreators({login: login}, dispatch)
}

export default connect(null, mapDispatchToProps)(Login)
