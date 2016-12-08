import React, { Component } from 'react'
import { FormGroup, FormControl, HelpBlock } from 'react-bootstrap'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import getUserInfo from '../../actions/users/getUserInfo'
import editUserInfo from '../../actions/users/editUserInfo'


class EditUser extends Component {

  componentWillMount(){
    this.getData()
  }

  getData() {
    if (this.props.currentUser && localStorage.getItem('jwt')) {
      this.props.getUserInfo()
    }
  }

  constructor(props){
    super(props)
    this.state = { email: `${this.props.currentUser.email}`, friendcode: `${this.props.currentUser.friendcode}`, password: "", confirmpassword: ""}
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
    if (length > 12 && this.state.password === this.state.confirmpassword) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
  }

  handleConfirmPasswordChange(event) {
    this.setState({ confirmpassword: event.target.value });
  }

  getValidationForConfirmPassword() {
    const length = this.state.confirmpassword.length;
    if (length > 12 && this.state.password === this.state.confirmpassword) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
  }

  handleEditProfile(event) {
    event.preventDefault()
    
  }


  render(){
    return(
      <div>
      <h1>Edit Profile Page</h1>
      <form className="UserForm" onSubmit={this.handleEditProfile.bind(this)}>

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
          controlId="ConfirmPasswordInput"
          validationState={this.getValidationForConfirmPassword()}
        >
          <FormControl
            type="password"
            value={this.state.confirmpassword}
            placeholder="Confirm Password"
            onChange={this.handleConfirmPasswordChange.bind(this)}
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
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {currentUser: state.users.currentUser}
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({getUserInfo, editUserInfo}, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(EditUser)
