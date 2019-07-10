import React from 'react';

class LoginForm extends React.Component {
  render() {
    return (
      <form>
        <input
          name="username"
        />
        <input
          name="password"
        />
      </form>
    )
  }
}

export default LoginForm;