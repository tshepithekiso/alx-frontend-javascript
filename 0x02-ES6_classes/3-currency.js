class Currency {
  constructor(code, name) {
    this._code = Currency._validateString(code, 'Code');
    this._name = Currency._validateString(name, 'Name');
  }

  static _validateString(value, attributeName) {
    if (typeof value !== 'string') {
      throw new TypeError(`${attributeName} must be a string`);
    }
    return value;
  }

  get code() {
    return this._code;
  }

  set code(value) {
    this._code = Currency._validateString(value, 'Code');
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = Currency._validateString(value, 'Name');
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}

export default Currency;
