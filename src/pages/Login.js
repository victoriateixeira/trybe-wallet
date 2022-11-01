import React from 'react';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      disabled: true,
    };
  }

  validatesForm = () => {
    const { email, password } = this.state;
    const minlength = 6;
    const validatesEmail = /\S+@\S+\.\S+/.test(email);
    const validatePassword = password.length >= minlength;
  };

  handlesInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div>
        Login
        <form action="">
          <label htmlFor="email">
            <input
              type="email"
              placeholder="email"
              id="email"
              name="email"
            />
          </label>
          <label htmlFor="password">
            <input
              type="password"
              placeholder="password"
              id="password"
              name="password"
            />
          </label>
          <button type="button"> Entrar </button>
        </form>
      </div>
    );
  }
}

export default Login;
