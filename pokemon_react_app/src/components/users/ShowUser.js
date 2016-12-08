import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import getUserInfo from '../../actions/users/getUserInfo'
import { Link } from 'react-router'





class ShowUser extends Component {
  componentWillMount(){
    this.getData()
  }

  getData() {
    if (this.props.currentUser && localStorage.getItem('jwt')) {
      this.props.getUserInfo()
    }
  }

  header(){
    if(this.props.currentUser && !this.props.children) {
      return <h3>{this.props.currentUser.username}&#39;s Profile Page</h3>
    }
  }
  info(){
    if(this.props.currentUser && !this.props.children) {
      return(
        <div>
          <p>Friendcode: {this.props.currentUser.friendcode}</p>
          <p>Email: {this.props.currentUser.email}</p>
          <p>Id: {this.props.currentUser.id}</p>
        </div>
      )
    }
  }
  render() {
    return(
      <div>
        {this.header()}
        {this.info()}
        <Link to={`/users/${this.props.currentUser.id}/edit`}>Edit Profile</Link>
        {this.props.children}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {currentUser: state.users.currentUser}
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({getUserInfo}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowUser)
