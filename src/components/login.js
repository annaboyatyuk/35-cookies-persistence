import {Redirect} from 'react-router-dom';
import React from 'react';


class LoginForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
      this.props.onComplete(this.state);
      console.log('SUBMITTfsdjfksjfkla', this.state, this.props.trueFalse);
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

          <input type="submit" value='LOGIN' />


        </form>

          {this.props.loginTrue ? <Redirect  to='/dashboard' /> : null}

      </React.Fragment>
    )
  }
}


export default LoginForm;