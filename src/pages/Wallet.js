import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import WalletForm from '../components/WalletForm';
import { getCurrencies } from '../redux/actions';
// import stor from '../redux/store';

class Wallet extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getCurrencies());
  }

  render() {
    const { isLoading } = this.props;
    return (
      <div>
        <Header />
        {!isLoading && <WalletForm />}
      </div>
    );
  }
}
const mapStateToProps = (globalState) => ({
  isLoading: globalState.wallet.isLoading,
});

Wallet.propTypes = {
  isLoading: PropTypes.bool,
  dispatch: PropTypes.func,
}.isRequired;
export default connect(mapStateToProps)(Wallet);
