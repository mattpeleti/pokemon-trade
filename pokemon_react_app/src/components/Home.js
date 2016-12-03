import React, { Component } from 'react'
import { bindActionCreators } from 'react-redux'
import { connect } from 'redux'
// import fakeAction from '../actions/fakeAction'
import { Link } from 'redux'

export default class Home extends Component {
	render() {
		return (
			<div>
				<h1>WELCOME</h1>
				<ul>
					<li><Link to='/signup'>Sign Up</Link></li>
					<li><Link to='/login'>Log In</Link></li>
				</ul>
			</div>
		)
	}
}

// function mapDispatchToProps(dispatch) {
// 	return bindActionCreators(prop: fakeAction, dispatch)
// }

// export default connect(null, mapDispatchToProps)(Signup)