import React, { Component } from 'react'
import { Link } from 'react-router'
import { browserHistory } from 'react-router'
import logout from '../actions/logout'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import '../App.css';
import {Navbar, Nav, NavItem, ButtonGroup, Button} from 'react-bootstrap'

class Navbar2 extends Component {

	handleLogout(event){
    event.preventDefault()
    this.props.logout()
  }
	handleLoginLogout(){
		if(this.props.currentUser){
			return <Nav>
				<NavItem className="nav-item" eventKey={2}><Link className="nav-item-text" to={'/'} onClick={this.handleLogout.bind(this)}>Logout</Link></NavItem>
				<NavItem className="nav-item" eventKey={4}><Link className="nav-item-text" to={'/posts/new'} >New Post</Link></NavItem>
				<NavItem className="nav-item" eventKey={5}><Link className="nav-item-text" to={'/pokemon/new'} >Create Pokemon</Link></NavItem>
				{/* NEW NAV ITEMS HAVE TO GO HERE  */}
			</Nav>
		}else{
			return <Nav>
				<NavItem className="nav-item" eventKey={1}><Link className="nav-item-text" to={'/login'}>Login</Link></NavItem>
				<NavItem className="nav-item" eventKey={3}><Link className="nav-item-text" to={'/signup'}>Sign Up</Link></NavItem>
			</Nav>
		}
	}

	render() {
		return (
			<div className="navbar-styling">
				<Navbar >
					<Navbar.Header>
			      <Navbar.Brand className="navbar-brand-css">
			        <Link to={'/'}>PokeTrade</Link>
			      </Navbar.Brand>
			    </Navbar.Header>
					<Nav>
						{/* <NavItem eventKey={1}><Link to={'/login'}>Login</Link></NavItem> */}
						{/* <NavItem eventKey={2}><Link to={'/'} onClick={this.handleLogout.bind(this)}>Logout</Link></NavItem> */}
						{/* <NavItem eventKey={3}><Link to={'/signup'}>Sign Up</Link></NavItem> */}
						{/* <NavItem eventKey={4}><Link to={'/posts/new'} >New Post</Link></NavItem> */}
						{/* <NavItem eventKey={5}><Link to={'/pokemon/new'} >Create Pokemon</Link></NavItem> */}
						{this.handleLoginLogout()}
					</Nav>
				</Navbar>
			</div>
		)
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ logout }, dispatch)
}

function mapStateToProps(state){
	return {currentUser: state.users.currentUser}
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar2)
