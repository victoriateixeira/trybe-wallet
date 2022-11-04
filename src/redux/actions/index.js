export const USER_LOGIN = 'USER_LOGIN';
export const SAVE_CURRENCIES = 'SAVE_CURRENCIES';
export const REQUEST_CURRENCIES = 'REQUEST_CURRENCIES';
export const REQUEST_FAILED = 'REQUEST_FAILED';
export const ADD_EXPENSE = 'ADD_EXPENSE';

export const SAVE_EXCHANGE_RATE = 'SAVE_EXCHANGE_RATE';

export const actionCreator = (type, payload) => ({
  type,
  payload,
});

// export const userLogin = (email, password) => ({
//   type: USER_LOGIN,
//   email,
//   password,
// });
// export const saveCurrencies = (currencyList) => ({
//   type: SAVE_CURRENCIES,
//   currencyList,
// });
// export const requestCurrencies = () => ({
//   type: REQUEST_CURRENCIES,
// });
// export const requestFailed = (error) => ({
//   type: REQUEST_FAILED,
//   error,
// });

export function getCurrencies() {
  return async (dispatch) => {
    try {
      dispatch(actionCreator(REQUEST_CURRENCIES, true));
      const url = 'https://economia.awesomeapi.com.br/json/all';
      const response = await fetch(url);
      const currenciesData = await response.json();
      const currencies = Object.keys(currenciesData);
      const currencyList = currencies.filter((item) => item !== 'USDT');
      dispatch(actionCreator(SAVE_CURRENCIES, currencyList));
    } catch (error) {
      dispatch(actionCreator(REQUEST_FAILED, error));
    }
  };
}
export function getExchangeRates() {
  return async (dispatch) => {
    try {
      dispatch(actionCreator(REQUEST_CURRENCIES, true));
      const url = 'https://economia.awesomeapi.com.br/json/all';
      const response = await fetch(url);
      const exchangeRates = await response.json();
      dispatch(actionCreator(REQUEST_CURRENCIES, false));
      return exchangeRates;
    } catch (error) {
      dispatch(actionCreator(REQUEST_FAILED, error));
    }
  };
}
