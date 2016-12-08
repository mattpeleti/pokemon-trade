import React, { Component } from 'react'
import { Link } from 'react-router'
import { browserHistory } from 'react-router'
import logout from '../actions/logout'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import '../App.css';
import {Navbar, Nav, NavItem, ButtonGroup, Button} from 'react-bootstrap'
import getUserInfo from '../actions/users/getUserInfo'

class Navbar2 extends Component {

	shouldComponentUpdate(nextProps, nextState){
		if(localStorage.getItem('jwt')){
			return true
		} else {
			return false
		}
	}

	componentWillUpdate(nextProps, nextState){
			this.getData()
	}

	handleLogout(event){
    event.preventDefault()
    this.props.logout()
  }

	getData() {
		if (this.props.currentUser && localStorage.getItem('jwt')) {
    	this.props.getUserInfo()
  }
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
						<NavItem eventKey={1}><Link to={'/login'}>Login</Link></NavItem>
						<NavItem eventKey={2}><Link to={'/'} onClick={this.handleLogout.bind(this)}>Logout</Link></NavItem>
						<NavItem eventKey={3}><Link to={'/signup'}>Sign Up</Link></NavItem>
						<NavItem eventKey={4}><Link to={'/posts/new'} >New Post</Link></NavItem>
						<NavItem eventKey={5}><Link to={'/pokemon/new'} >Create Pokemon</Link></NavItem>
						<NavItem eventKey={6}><Link to={`/users/${this.props.currentUser}`} >Your Profile</Link></NavItem>

					</Nav>
				</Navbar>
			</div>
		)
	}
}

function mapStateToProps(state) {
  return {currentUser: state.users.currentUser}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ logout, getUserInfo }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Navbar2)
