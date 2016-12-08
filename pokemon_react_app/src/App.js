import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router'
import { browserHistory } from 'react-router'
import getUserInfo from './actions/users/getUserInfo'
import getNatures from './actions/pokemons/getNatures'
import Navbar2 from './components/Navbar'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import './App.css';

class App extends Component {

  componentWillMount(){
    this.getData()
  }

  getData() {
    if (!this.props.currentUser && localStorage.getItem('jwt')) {
      this.props.getUserInfo()
    }
    this.props.getNatures()
  }

  welcome(){
    if(this.props.currentUser && !this.props.children) {
      return <h3>Welcome, {this.props.currentUser.username}!</h3>
    } else if(!this.props.currentUser && !this.props.children) {
      return <h3>Welcome!</h3>
    }
  }

  render() {
    return (
      <div className="App">
        <Navbar2 />
        {this.welcome()}
        {this.props.children}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {currentUser: state.users.currentUser}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getUserInfo, getNatures }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
