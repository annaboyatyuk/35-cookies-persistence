import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom';

import '../style/style.css'

import Signup from './signup';
import Login from './login';

import { signupUser, loginUser } from '../store/login';

class Home extends Component {



  render() {


    if(localStorage.token) {
      return(
        <Redirect to='/dashboard' />
      )
    }

    else {

    return (

      <Fragment>

        <h1>home</h1>

        <h4>SIGNUP</h4>

        <Signup onComplete={this.props.signupUser} loginTrue={this.props.login}/>

        <h4>LOGIN</h4>

        <Login onComplete={this.props.loginUser} loginTrue={this.props.login}/>

      </Fragment>
    );

  }
  }
}

const mapStateToProps = state => ({
  login: state.loginState,
});

const mapDispatchToProps = dispatch => ({
  loginUser: user => dispatch(loginUser(user)), 
  signupUser: user => dispatch(signupUser(user))
})


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
