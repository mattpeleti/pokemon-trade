import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

function Logout(props){
	function handleLogout(){
		localStorage.removeItem("jwt")
	}
	return (
		<body onload={this.handleLogout}/>
	)

}
