import React, { Component } from 'react'
import { Link } from 'react-router'
import logout from '../actions/logout'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Navbar, Nav, NavItem } from 'react-bootstrap'

class Navbar2 extends Component {

	handleLogout(event){
    event.preventDefault()
    this.props.logout()
  }

  renderUserId() {
  	if(this.props.currentUser) {
	  	return this.props.currentUser.id
  	} else {
	  	return "whoops"
  	}
  }

	handleLoginLogout(){
		if(this.props.currentUser){
			return <Nav>
				<NavItem className="nav-item" eventKey={1}><Link className="nav-item-text" to={'/'} onClick={this.handleLogout.bind(this)}>Logout</Link></NavItem>
				<NavItem className="nav-item" eventKey={2}><Link className="nav-item-text" to={'/posts/new'} >New Post</Link></NavItem>
				<NavItem className="nav-item" eventKey={3}><Link className="nav-item-text" to={'/pokemon/new'} >Create Pokemon</Link></NavItem>
				<NavItem className="nav-item" eventKey={4}><Link className="nav-item-text" to={`/users/${this.renderUserId()}`} >Profile</Link></NavItem>
				<NavItem className="nav-item" eventKey={5}><Link className="nav-item-text" to={`/users/${this.renderUserId()}/pokemon`} >Inventory</Link></NavItem>
				<NavItem className="nav-item" eventKey={6}><Link className="nav-item-text" to={`/users/${this.renderUserId()}/posts`} >Your Posts</Link></NavItem>
				{/* NEW NAV ITEMS HAVE TO GO HERE  */}
			</Nav>
		}else{
			return <Nav>
				<NavItem className="nav-item" eventKey={1}><Link className="nav-item-text" to={'/login'}>Login</Link></NavItem>
				<NavItem className="nav-item" eventKey={2}><Link className="nav-item-text" to={'/signup'}>Sign Up</Link></NavItem>
			</Nav>
		}
	}

	render() {
		return (
			<div className="navbar-styling">
				<Navbar className= "nav-bar" bsStyle="tabs" fluid>
					<Navbar.Header>
			      <Navbar.Brand className="navbar-brand-css">
			        <Link to={'/'}>PokeTrade</Link>
			      </Navbar.Brand>
			    </Navbar.Header>
						{this.handleLoginLogout()}
				</Navbar>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {currentUser: state.users.currentUser}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ logout }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar2)
