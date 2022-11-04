import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import WalletForm from '../components/WalletForm';
import { getCurrencies } from '../redux/actions';
import Table from '../components/Table';
// import stor from '../redux/store';

class Wallet extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getCurrencies());
  }

  render() {
    const { isLoading, expenses } = this.props;
    return (
      <div>
        <Header />
        {!isLoading && <WalletForm />}
        {expenses.length > 0 && <Table />}
      </div>
    );
  }
}
const mapStateToProps = (globalState) => ({
  isLoading: globalState.wallet.isLoading,
  expenses: globalState.wallet.expenses,
});

Wallet.propTypes = {
  isLoading: PropTypes.bool,
  dispatch: PropTypes.func,
}.isRequired;
export default connect(mapStateToProps)(Wallet);
