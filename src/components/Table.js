import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { actionCreator, DELETE_EXPENSE, EDIT_EXPENSE } from '../redux/actions';

class Table extends Component {
  render() {
    const { expenses, dispatch } = this.props;
    const sixteenCharacters = -16;
    return (
      <div>
        <table>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>

          {expenses.length > 0
            && expenses.map((expense) => (
              <tr key={ expense.id }>
                <td>{expense.description}</td>
                <td>{expense.tag}</td>
                <td>{expense.method}</td>
                <td>{expense.value}</td>
                <td>
                  {(expense.exchangeRates[expense.currency].name)
                    .slice(0, sixteenCharacters)}

                </td>
                <td>{expense.currency}</td>
                <td>
                  {((expense.value) * (expense.exchangeRates[expense.currency].ask)
                  ).toFixed(2)}

                </td>
                <td>Real</td>
                <td>
                  <button
                    type="button"
                    data-testid="delete-btn"
                    onClick={ () => dispatch(actionCreator(DELETE_EXPENSE, expense.id)) }
                  >
                    Excluir
                  </button>
                  <button
                    type="button"
                    data-testid="edit-btn"
                    onClick={ () => dispatch(actionCreator(EDIT_EXPENSE, expense.id)) }
                  >
                    Editar
                  </button>
                </td>
              </tr>
            ))}

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
