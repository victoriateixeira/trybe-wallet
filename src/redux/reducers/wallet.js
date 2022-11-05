import { SAVE_CURRENCIES,
  REQUEST_CURRENCIES,
  REQUEST_FAILED,
  ADD_EXPENSE,
  DELETE_EXPENSE,
  EDIT_EXPENSE,
  ADD_EDIT_EXPENSE } from '../actions';

const initialState = {
  currencies: '',
  isLoading: true,
  expenses: [],
  isEditOn: false,
  editExpenseId: '',
};

const wallet = (state = initialState, action) => {
  switch (action.type) {
  case SAVE_CURRENCIES:
    return {
      ...state,
      currencies: action.payload,
      isLoading: false,
    };
  case REQUEST_CURRENCIES:
    return {
      ...state,
      isLoading: action.payload,
    };
  case REQUEST_FAILED:
    return {
      ...state,
      isLoading: false,
      error: action.payload,
    };
  case ADD_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };
  case DELETE_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses].filter((expense) => expense.id !== action.payload),
    };
  case EDIT_EXPENSE:
    return {
      ...state,
      isEditOn: true,
      editExpenseId: action.payload,
    };
  case ADD_EDIT_EXPENSE:
    return {
      ...state,
      isEditOn: false,
      expenses: [...state.expenses, action.payload].sort((a, b) => a.id - b.id),
    };

  default:
    return state;
  }
};

export default wallet;
