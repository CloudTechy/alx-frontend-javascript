import Currency from "./3-currency";

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  // Getter and Setter for amount
  get amount() {
    return this._amount;
  }

  set amount(value) {
    if (typeof value !== "number") {
      throw new Error("TypeError: Amount must be a number");
    }
    // eslint-disable-next-line no-underscore-dangle
    this._amount = value;
  }

  // Getter and setter for currency
  get currency() {
    // eslint-disable-next-line no-underscore-dangle
    return this._currency;
  }

  set currency(value) {
    // eslint-disable-next-line no-underscore-dangle
    this._currency = value;
  }

  // Method
  displayFullPrice() {
    // eslint-disable-next-line no-underscore-dangle
    return `${this._amount} ${new Currency(
      // eslint-disable-next-line no-underscore-dangle
      this._currency.code,
      // eslint-disable-next-line no-underscore-dangle
      this._currency.name
    ).displayFullCurrency()}`;
  }

  // Static Method
  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
