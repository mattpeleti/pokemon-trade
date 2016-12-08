import React, { Component } from 'react'
import { FormGroup, FormControl, HelpBlock } from 'react-bootstrap'
import signup from '../actions/signup'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'


class Signup extends Component {
  constructor(props){
    super(props)
    this.state = {username: "", email: "", friendcode: "", password: ""}
  }

  handleUsernameChange(event){
    this.setState({username: event.target.value})
  }

  getValidationForUsername() {
    if (this.state.username.length > 0) return 'success'
    else return 'error'
  }

  handleEmailChange(event){
    this.setState({email: event.target.value})
  }

  getValidationForEmail() {
    if (this.state.email.length > 0) return 'success'
    else return 'error'
  }

  handleFriendcodeChange(event) {
    this.setState({ friendcode: event.target.value });
  }

  getValidationForFriendcode() {
    const length = this.state.friendcode.length;
    if (length === 12) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  getValidationForPassword() {
    const length = this.state.password.length;
    if (length > 12) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
  }

  handleSubmit(event) {
		event.preventDefault()
		this.props.signup(this.state)
	}

  render(){
    return(
      <form onSubmit={this.handleSubmit.bind(this)} className="UserForm" >
        <FormGroup
          controlId="UserNameInput"
          validationState={this.getValidationForUsername()}
          >
          <FormControl
          type="text"
          value={this.state.username}
          placeholder="Username"
          onChange={this.handleUsernameChange.bind(this)}
          className = "UsernameInput"
          />
       </FormGroup>

        <FormGroup
          controlId="EmailInput"
          validationState={this.getValidationForEmail()}
        >
          <FormControl
            type="text"
            value={this.state.email}
            placeholder="Email"
            onChange={this.handleEmailChange.bind(this)}
          />
        </FormGroup>

        <FormGroup
          controlId="FriendCodeInput"
          validationState={this.getValidationForFriendcode()}
        >
          <FormControl
            type="text"
            value={this.state.friendcode}
            placeholder="Friendcode"
            onChange={this.handleFriendcodeChange.bind(this)}
          />
          <FormControl.Feedback />
          <HelpBlock>Friendcode must be 12 characters long.</HelpBlock>
        </FormGroup>

        <FormGroup
          controlId="PasswordInput"
          validationState={this.getValidationForPassword()}
        >
          <FormControl
            type="password"
            value={this.state.password}
            placeholder="Password"
            onChange={this.handlePasswordChange.bind(this)}
          />
        </FormGroup>

        <FormGroup
          className="SignSub"
          controlId="Submit"
        >
          <FormControl
          className="SignSub"
            type="submit"
          />
        </FormGroup>
      </form>
    )
  }
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({signup: signup}, dispatch)
}

export default connect(null, mapDispatchToProps)(Signup)
