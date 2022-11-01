import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { userLogin } from '../redux/actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
  }

  validatesForm = () => {
    const { email, password } = this.state;
    const minlength = 6;
    const validatesEmail = /\S+@\S+\.\S+/.test(email);
    const validatePassword = password.length >= minlength;
    return validatesEmail && validatePassword;
  };

  handlesInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handlesClick = () => {
    const { dispatch, history } = this.props;
    const { email, password } = this.state;

    dispatch(userLogin(email, password));
    history.push('/carteira');
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
              onChange={ this.handlesInputChange }
            />
          </label>
          <label htmlFor="password">
            <input
              type="password"
              placeholder="password"
              id="password"
              name="password"
              onChange={ this.handlesInputChange }
            />

          </label>
          <button
            type="button"
            disabled={ !this.validatesForm() }
            onClick={ this.handlesClick }
          >
            {' '}
            Entrar
            {' '}

          </button>
        </form>
      </div>
    );
  }
}
Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default connect()(Login);
