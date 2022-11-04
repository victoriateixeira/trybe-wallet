import { SAVE_CURRENCIES,
  REQUEST_CURRENCIES,
  REQUEST_FAILED,
  ADD_EXPENSE } from '../actions';

const initialState = {
  currencies: '',
  isLoading: true,
  expenses: [],
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

  default:
    return state;
  }
};

export default wallet;
