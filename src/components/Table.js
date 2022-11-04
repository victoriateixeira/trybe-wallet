import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { actionCreator, DELETE_EXPENSE } from '../redux/actions';

class Table extends Component {
  render() {
    const { expenses, dispatch } = this.props;
    return (
      <div>
        <table>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>

          {
            expenses.map((expense) => (
              <tr key={ expense.id }>
                <td>{expense.description}</td>
                <td>{expense.tag}</td>
                <td>{expense.method}</td>
                <td>{expense.value}</td>
                <td>{expense.currency}</td>
                <td>
                  {((expense.value) * (expense.exchangeRates[expense.currency].ask)
                  ).toFixed(2)}

                </td>
                <td>{expense.exchangeRates[expense.currency].name}</td>
                <td>
                  <button
                    type="button"
                    data-testid="delete-btn"
                    id={ expense.id }
                    onClick={ () => dispatch(actionCreator(DELETE_EXPENSE, expense.id)) }
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            ))
          }

        </table>
      </div>
    );
  }
}
const mapStateToProps = (globalState) => ({
  expenses: globalState.wallet.expenses,
});

Table.propTypes = {
  expenses: PropTypes.arrayOf.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(Table);
