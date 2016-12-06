import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router'
import { browserHistory } from 'react-router'
import Navbar2 from './components/Navbar'

import './App.css';

class App extends Component {

  welcome(){
    if(this.props.currentUser) {
      return <h3>Welcome, {this.props.currentUser.username}!</h3>
    } else {
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

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ fakeAction }, dispatch)
// }

export default connect(mapStateToProps)(App);
