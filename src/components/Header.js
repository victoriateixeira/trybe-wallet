import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

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
    return '0';
  };

  render() {
    const { email } = this.props;

    return (
      <div>
        <div data-testid="email-field">
          {` Email: ${email}`}
        </div>
        Despesa total:
        <span data-testid="total-field">
          {this.sumsTotalExpenses()}
        </span>
        <div data-testid="header-currency-field">
          {' BRL'}
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
