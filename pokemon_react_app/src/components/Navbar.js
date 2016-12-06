import React, { Component } from 'react'
import { Link } from 'react-router'
import { browserHistory } from 'react-router'
import logout from '../actions/logout'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import initPost from '../actions/posts/initPost'
import '../App.css';
import {Navbar, Nav, NavItem} from 'react-bootstrap'

class Navbar2 extends Component {

	handleLogout(event){
    event.preventDefault()
    this.props.logout()
  }

	render() {
		return (
			<div>
				<Navbar >
					<Navbar.Header>
			      <Navbar.Brand>
			        <Link to={'/'}>PokeTrade</Link>
			      </Navbar.Brand>
			    </Navbar.Header>
					<Nav>
						<NavItem eventKey={1}><Link to={'/login'}>Log In</Link></NavItem>
						<NavItem eventKey={2}><Link to={'/signup'}>Sign Up</Link></NavItem>
						<NavItem eventKey={3}><Link to={'/posts/new'} >New Post</Link></NavItem>
						<NavItem eventKey={4}><a onClick={this.handleLogout.bind(this)}>Logout</a></NavItem>
					</Nav>
				</Navbar>
        <br/>
			</div>
		)
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ logout, initPost }, dispatch)
}

export default connect(null, mapDispatchToProps)(Navbar2)
