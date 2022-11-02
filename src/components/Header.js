import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { email } = this.props;
    return (
      <div>
        <div data-testid="email-field">
          {` Email: ${email}`}
        </div>
        <div data-testid="total-field">
          {' Despesa total: 0'}
        </div>
        <div data-testid="header-currency-field">
          {' BRL'}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (globalState) => ({
  email: globalState.user.email,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
};
export default connect(mapStateToProps)(Header);
