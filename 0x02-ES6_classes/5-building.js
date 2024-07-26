export default class Building {
  constructor(sqft) {
    if (typeof sqft !== 'number') throw new Error();
    // eslint-disable-next-line no-underscore-dangle
    this._sqft = sqft;
    this.evacuationWarningMessage();
  }

  get sqft() {
    // eslint-disable-next-line no-underscore-dangle
    return this._sqft;
  }

  set sqft(value) {
    // eslint-disable-next-line no-underscore-dangle
    this._sqft = value;
  }

  // eslint-disable-next-line class-methods-use-this
  evacuationWarningMessage() {
    if (this.constructor.name !== 'Building') {
      throw new Error(
        'Class extending Building must override evacuationWarningMessage',
      );
    }
  }
}
