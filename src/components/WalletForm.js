import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import { saveCurrencies } from '../redux/actions';

class WalletForm extends Component {
  constructor() {
    super();
    this.state = {
      amount: '',
      description: '',
      currency: '',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };
  }

  handleInputChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { currencies } = this.props;
    const { amount, description, currency, method, tag } = this.state;
    return (
      <div>
        <form action="">
          <label htmlFor="amount">
            <input
              type="text"
              id="amount"
              name="amount"
              placeholder="valor"
              data-testid="value-input"
              value={ amount }
              onChange={ this.handleInputChange }
            />
          </label>
          <label htmlFor="description">
            <input
              type="text"
              id="description"
              name="description"
              placeholder="descrição"
              value={ description }
              data-testid="description-input"
              onChange={ this.handleInputChange }
            />
          </label>

          <label htmlFor="currency">
            <select
              name="currency"
              id="currency"
              value={ currency }
              data-testid="currency-input"
              onChange={ this.handleInputChange }
            >
              { currencies.map((item) => (
                <option key={ item } value={ item }>{item}</option>
              ))}

            </select>
          </label>
          <label htmlFor="method">
            <select
              name="method"
              id="method"
              value={ method }
              data-testid="method-input"
              onChange={ this.handleInputChange }
            >
              <option value="dinheiro">Dinheiro</option>
              <option value="credito">Cartão de crédito</option>
              <option value="debito">Cartão de débito</option>

            </select>
          </label>
          <label htmlFor="tag">
            <select
              name="tag"
              id="tag"
              value={ tag }
              data-testid="tag-input"
              onChange={ this.handleInputChange }
            >
              <option value="alimentacao">Alimentação</option>
              <option value="lazer">Lazer </option>
              <option value="trabalho">Trabalho</option>
              <option value="transporte">Transporte</option>
              <option value="saude">Saúde</option>

            </select>
          </label>
        </form>
      </div>

    );
  }
}

const mapStateToProps = (globalState) => ({
  currencies: globalState.wallet.currencies,
  isLoading: globalState.wallet.isLoading,
});

WalletForm.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  // isLoading: PropTypes.bool.isRequired,
};
export default connect(mapStateToProps)(WalletForm);
