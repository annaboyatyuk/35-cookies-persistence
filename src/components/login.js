import React from 'react';


class LoginForm extends React.Component {


  render() {
    return (
      <React.Fragment>

        <form>

          <label>Username</label>

          <input required type="text" />

          <label>Password</label>

          <input required type="text" />

          <input type="submit" value='SIGNUP' />


        </form>

      </React.Fragment>
    )
  }
}


export default LoginForm;