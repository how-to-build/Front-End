import React from 'react';

class RegisterForm extends React.Component {
  render() {
    return (
      <form>
        <input
          name="firstName"
        />
        <input
          name="lastName"
        />
        <input
          name="email"
        />
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

export default RegisterForm;