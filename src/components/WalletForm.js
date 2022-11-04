import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { actionCreator,
  ADD_EXPENSE,
  getExchangeRates } from '../redux/actions';
// import { saveCurrencies } from '../redux/actions';

class WalletForm extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };
  }

  handleInputChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handlesAddExpense = async () => {
    const { dispatch, expenses, isLoading } = this.props;
    const { currency } = this.state;
    console.log(typeof currency);
    const exchangeRate = await dispatch(getExchangeRates(currency));
    console.log(exchangeRate);

    if (!isLoading) {
      if (expenses.length > 0) {
        const lastExpenseIndex = -1;
        const lastExpenseId = expenses.slice(lastExpenseIndex)[0].id;
        const id = lastExpenseId + 1;
        const newExpense = {
          id,
          ...this.state,
          exchangeRate,
        };
        dispatch(actionCreator(ADD_EXPENSE, newExpense));
      } else {
        const newExpense = {
          id: 0,
          ...this.state,
          exchangeRate,
        };
        dispatch(actionCreator(ADD_EXPENSE, newExpense));
      }
    }
  };

  render() {
    const { currencies } = this.props;
    const { value, description, currency, method, tag } = this.state;
    return (
      <div>
        <form action="">
          <label htmlFor="value">
            <input
              type="text"
              id="value"
              name="value"
              placeholder="valor"
              data-testid="value-input"
              value={ value }
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
          <button
            type="submit"
            onClick={ this.handlesAddExpense }
          >
            Adicionar despesa

          </button>
        </form>
      </div>

    );
  }
}

const mapStateToProps = (globalState) => ({
  currencies: globalState.wallet.currencies,
  isLoading: globalState.wallet.isLoading,
  expenses: globalState.wallet.expenses,
});

WalletForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  isLoading: PropTypes.bool.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.string).isRequired,

};
export default connect(mapStateToProps)(WalletForm);
