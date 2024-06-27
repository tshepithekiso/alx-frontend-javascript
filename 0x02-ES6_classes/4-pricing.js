import Currency from './3-currency';

class Pricing {
  constructor(amount, currency) {
    this._amount = Pricing._validateNumber(amount, 'Amount');
    this._currency = Pricing._validateCurrency(currency, 'Currency');
  }

  static _validateNumber(value, attributeName) {
    if (typeof value !== 'number') {
      throw new TypeError(`${attributeName} must be a number`);
    }
    return value;
  }

  static _validateCurrency(value, attributeName) {
    if (!(value instanceof Currency)) {
      throw new TypeError(`${attributeName} must be an instance of Currency`);
    }
    return value;
  }

  get amount() {
    return this._amount;
  }

  set amount(value) {
    this._amount = Pricing._validateNumber(value, 'Amount');
  }

  get currency() {
    return this._currency;
  }

  set currency(value) {
    this._currency = Pricing._validateCurrency(value, 'Currency');
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number' || typeof conversionRate !== 'number') {
      throw new TypeError('Both amount and conversionRate must be numbers');
    }
    return amount * conversionRate;
  }
}

export default Pricing;
