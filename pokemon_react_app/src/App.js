import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators} from 'redux'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    // INITIAL STATE
    // ANY BINDINGS
  }

  render() {
    return (
      <div className="App">
        {/* THE ENTIRE APP */}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({/*SOME ACTION CREATOR*/}, dispatch)
}

export default connect(null, mapDispatchToProps)(App);
