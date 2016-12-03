import React, { Component } from 'react'
// import { connect } from 'react-redux'
import { bindActionCreators} from 'redux'
import routes from './routes';
import { Link } from 'react-router'
import { browserHistory } from 'react-router'
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props)
    // INITIAL STATE
    // ANY BINDINGS
  }


  handleLogout(event){
    event.preventDefault()
    window.localStorage.removeItem("jwt")
    browserHistory.push('/login')
  }

  render() {
    return (
      <div className="App">
        <div>
          <h1>WELCOME</h1>
          <ul>
            <li><Link to={'/signup'}>Sign Up</Link></li>
            <li><Link to={'/login'}>Log In</Link></li>
            <li><a href='' onClick={this.handleLogout.bind(this)}>Logout</a></li>
            {/*<li><Link to={'/logout'} onClick={this.handleLogout}>Log Out</Link></li>*/}
          </ul>
        </div>
          {this.props.children}
      </div>
    );
  }
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ fakeAction }, dispatch)
// }

// export default connect(null, null)(App);
