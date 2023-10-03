import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import WalletForm from '../components/WalletForm';
import { getCurrencies } from '../redux/actions';
import Table from '../components/Table';
import './Wallet.css';
// import stor from '../redux/store';

class Wallet extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getCurrencies());
  }

  render() {
    const { isLoading } = this.props;
    return (
      <div className="main-container">
        <div className="wallet-upper-container">
          <Header />
          {!isLoading && <WalletForm />}
        </div>
        <div className="wallet-bottom-container">
          {!isLoading && <Table />}
        </div>

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
