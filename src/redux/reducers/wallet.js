import { SAVE_CURRENCIES, REQUEST_CURRENCIES, REQUEST_FAILED } from '../actions';

const initialState = {
  amount: '',
  currencies: '',
  decription: '',
  paymentMethod: '',
  tag: '',
  isLoading: true,
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
  default:
    return state;
  }
};

export default wallet;
