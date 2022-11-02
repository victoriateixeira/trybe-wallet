import React, { Component } from 'react';

class WalletForm extends Component {
  render() {
    return (
      <div>
        <form action="">
          <label htmlFor="amount">
            <input type="text" id="amount" placeholder="valor" />
          </label>

          <label htmlFor="currency">
            <select name="currency" id="currency">
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

export default WalletForm;
