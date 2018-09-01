import React from 'react';
import {Redirect} from 'react-router-dom';



class SignupForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: ''
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onComplete(this.state);
    console.log('SUBMITTtEDDDDD', this.state);
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }


  render() {
    return (
      <React.Fragment>

        <form onSubmit={this.handleSubmit} onChange={this.handleChange}>

          <label>Username</label>

          <input required type="text" name='username' value={this.state.username}/>

          <label>Password</label>

          <input required type="password" name='password' value={this.state.password}/>

          <label>Email</label>

          <input required type="email" name='email' value={this.state.email}/>

          <input type="submit" value='SIGNUP'/>

        </form>

          {this.props.loginTrue ? <Redirect  to='/dashboard' /> : null}

      </React.Fragment>
    )
  }
}

export default SignupForm;
