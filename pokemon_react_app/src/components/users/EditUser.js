import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { FormGroup, FormControl, HelpBlock, Button } from 'react-bootstrap'
import auth from '../../lib/auth'
import editUserInfo from '../../actions/users/editUserInfo'
import deleteUser from '../../actions/users/deleteUser'

class EditUser extends Component {
  constructor(props){
    super(props)
    this.state = {id: this.props.currentUser.id, email: this.props.currentUser.email, friendcode: this.props.currentUser.friendcode, password: "", confirmPassword: ""}
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
    if (length > 12 && this.state.password === this.state.confirmPassword) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
  }

  handleConfirmPasswordChange(event) {
    this.setState({ confirmPassword: event.target.value });
  }

  getValidationForConfirmPassword() {
    const length = this.state.confirmPassword.length;
    if (length > 12 && this.state.password === this.state.confirmPassword) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.editUserInfo(this.state)
  }

  handleDelete(event) {
    this.props.deleteUser(this.props.currentUser.id)
  }


  render(){
    return(
      <div>
      <h1>Edit Profile Page</h1>
      <form className="UserForm" onSubmit={this.handleSubmit.bind(this)}>

        <FormGroup controlId="EmailInput" validationState={this.getValidationForEmail()}>
          <FormControl type="text" value={this.state.email} placeholder="Email" onChange={this.handleEmailChange.bind(this)} />
        </FormGroup>

        <FormGroup controlId="FriendCodeInput" validationState={this.getValidationForFriendcode()}>
          <FormControl type="text" value={this.state.friendcode} placeholder="Friendcode" onChange={this.handleFriendcodeChange.bind(this)} />
          <FormControl.Feedback />
          <HelpBlock>Friendcode must be 12 characters long.</HelpBlock>
        </FormGroup>

        <FormGroup controlId="PasswordInput" validationState={this.getValidationForPassword()}>
          <FormControl type="password" value={this.state.password} placeholder="Password (Optional)" onChange={this.handlePasswordChange.bind(this)} />
        </FormGroup>

        <FormGroup controlId="ConfirmPasswordInput" validationState={this.getValidationForConfirmPassword()}>
          <FormControl type="password" value={this.state.confirmpassword} placeholder="Confirm Password (Optional)" onChange={this.handleConfirmPasswordChange.bind(this)} />
        </FormGroup>

        <FormGroup className="SignSub" controlId="Submit">
          <FormControl className="SignSub" type="submit" />
          </FormGroup>
        </form>

        <Button onClick={this.handleDelete.bind(this)}>Delete This Account</Button>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ editUserInfo, deleteUser }, dispatch)
}

function mapStateToProps(state) {
  return {currentUser: state.users.currentUser}
}


export default auth(connect(mapStateToProps, mapDispatchToProps)(EditUser))
