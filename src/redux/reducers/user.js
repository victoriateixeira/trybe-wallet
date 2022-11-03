import { USER_LOGIN } from '../actions';

// Esse reducer será responsável por tratar as informações da pessoa usuária
const initialState = {
  email: '',
  // password: '',
};

const user = (state = initialState, action) => {
  switch (action.type) {
  case USER_LOGIN:
    return {
      ...state,
      email: action.payload,
    };
  default:
    return state;
  }
};

export default user;
