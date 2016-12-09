import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router'
import { browserHistory } from 'react-router'
import getUserInfo from './actions/users/getUserInfo'
import getNatures from './actions/pokemons/getNatures'
import Navbar2 from './components/Navbar'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

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

  render() {
    return (
      <div className="App">
        <Navbar2 />
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
