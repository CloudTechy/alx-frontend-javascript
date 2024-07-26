export default class Currency {
  constructor(code, name) {
    // eslint-disable-next-line no-underscore-dangle
    this._code = code;
    // eslint-disable-next-line no-underscore-dangle
    this._name = name;
  }

  // Getter and setter for code
  get code() {
    // eslint-disable-next-line no-underscore-dangle
    return this._code;
  }

  set code(value) {
    if (typeof value !== 'string') {
      throw new Error('TypeError: Code must be a string');
    }
    // eslint-disable-next-line no-underscore-dangle
    this._code = value;
  }

  // Getter and setter for name
  get name() {
    // eslint-disable-next-line no-underscore-dangle
    return this._name;
  }

  set name(value) {
    if (typeof value !== 'string') {
      throw new Error('TypeError: Name must be a string');
    }
    // eslint-disable-next-line no-underscore-dangle
    this._name = value;
  }

  // Method
  displayFullCurrency() {
    // eslint-disable-next-line no-underscore-dangle
    return `${this._name} (${this._code})`;
  }
}
