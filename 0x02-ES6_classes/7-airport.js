export default class Airport {
  constructor(name, code) {
    // eslint-disable-next-line no-underscore-dangle
    this._name = name;
    // eslint-disable-next-line no-underscore-dangle
    this._code = code;
  }

  get [Symbol.toStringTag]() {
    // eslint-disable-next-line no-underscore-dangle
    return `${this._code}`;
  }
}
