import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import {login} from '../../redux/actions';
import './index.css';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: ''
        }
    }

    login = () => {
        if (this.state.userName && this.state.password) {
            this.props.onLogin(this.state)
        }
    }

    render() {
      return (
        <div>
            <input type="text" value={this.state.userName} onChange={(e) => { this.setState({userName:e.target.value})}}/>
            <input type="password" value={this.state.password} onChange={(e) => { this.setState({password:e.target.value})}}/>
            <button onClick={this.login}>Login</button>
        </div>
      );
    }
  }

  const mapStateToProps = (state) => {
    return {
      
    }
  }
  
  const mapDispatchToProps = (dispatch) => { 
      return {
        onLogin: (data) => dispatch(login(data))
      }
   }
  
  export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));