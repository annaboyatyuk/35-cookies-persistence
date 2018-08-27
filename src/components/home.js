import React, { Component, Fragment } from 'react';
// import { connect } from 'react-redux';
import superagent from 'superagent';

import '../style/style.css'

import Signup from './signup';
import Login from './login';

import { signup, login } from '../store/login';

class Home extends Component {

  // componentDidMount() {
  //   superagent
  //     .get('http://localhost:3002/usernames/jane')
  //     // .auth('jane', 'jane')
  //     .then(res => console.log(res));
  // }

  render() {
    return (
      <Fragment>
        <h1>home</h1>

          <Signup/>

          <Login/>
      </Fragment>
    );
  }
}




export default Home;
