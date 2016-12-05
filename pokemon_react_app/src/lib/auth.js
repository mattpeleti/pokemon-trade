import React, { Component } from 'react';
import { browserHistory } from 'react-router'
import { connect } from 'react-redux'

export default function auth(ConnectedComponent){
  class AuthorizedComponent extends Component {
    componentWillMount(){
      if(!this.props.currentUser){
        browserHistory.push('/login')
      }
    }
    componentWillReceiveProps(){
      if(!this.props.currentUser){
        browserHistory.push('/login')
      }
    }
    render(){
      return(<ConnectedComponent {...this.props} />)
    }
  }
  function mapStateToProps(state){
    return { currentUser: state.userReducer.currentUser, browserHistory: browserHistory }
  }
  return connect(mapStateToProps)(AuthorizedComponent)
}