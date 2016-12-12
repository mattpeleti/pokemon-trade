import React, { Component } from 'react'
import { connect } from 'react-redux'
import auth from '../../lib/auth'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

class Post extends Component {


	render() {
		debugger
		return(
      <div className="Post">

      </div>
		)
	}
}


export default auth(Post)
