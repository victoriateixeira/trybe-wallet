import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import logo from '../assets/logo_Trybe_Wallet.svg';
import profile from '../assets/Vector.png';
import moedas from '../assets/Moedas.png';
import './Header.css';

class Header extends Component {
  sumsTotalExpenses = () => {
    const { expenses } = this.props;
    console.log(expenses.length);
    if (expenses.length > 0) {
      const totalAmount = expenses.reduce((acc, curr) => {
        const { currency } = curr;
        acc += curr.value * curr.exchangeRates[currency].ask;
        return acc;
      }, 0);
      return totalAmount.toFixed(2);
    }
    return '0.00';
  };

  render() {
    const { email } = this.props;

    return (
      <div className="header-container">
        <img src={ logo } alt="trybe-wallet-logo" className="wallet-logo" />

        <div data-testid="email-field" className="email-header">
          <img src={ profile } alt="profile-vector" />
          {`  ${email}`}
        </div>
        <div className="total-header">
          <img src={ moedas } alt="coins-vector" />
          <span className="total-header title">Total de despesas:</span>
          <span data-testid="total-field">

            {this.sumsTotalExpenses()}
          </span>
          <span data-testid="header-currency-field">
            {' BRL'}
          </span>
        </div>

      </div>
    );
  }
}

const mapStateToProps = (globalState) => ({
  email: globalState.user.email,
  expenses: globalState.wallet.expenses,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf.isRequired,
};
export default connect(mapStateToProps)(Header);
