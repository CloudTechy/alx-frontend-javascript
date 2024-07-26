export default class HolbertonCourse {
  constructor(name, length, students) {
    // verify type during object creation
    if (
      typeof name !== 'string'
      || typeof length !== 'number'
      || !Array.isArray(students)
    ) {
      throw new Error('Invalid attribute type');
    }

    // private attributes
    // eslint-disable-next-line no-underscore-dangle
    this._name = name;
    // eslint-disable-next-line no-underscore-dangle
    this._length = length;
    // eslint-disable-next-line no-underscore-dangle
    this._students = students;
  }

  // Getter and setter for name
  get name() {
    // eslint-disable-next-line no-underscore-dangle
    return this._name;
  }

  set name(value) {
    if (typeof value !== 'string') {
      throw new Error('Name must be a string');
    }
    // eslint-disable-next-line no-underscore-dangle
    this._name = value;
  }

  // Getter and setter for length
  get length() {
    // eslint-disable-next-line no-underscore-dangle
    return this._length;
  }

  set length(value) {
    if (typeof value !== 'number') {
      throw new Error('Length must be a number');
    }
    // eslint-disable-next-line no-underscore-dangle
    this._length = value;
  }

  // Getter and setter for students
  get students() {
    // eslint-disable-next-line no-underscore-dangle
    return this._students;
  }

  set students(value) {
    if (!Array.isArray(value)) {
      throw new Error('Students must be an array');
    }
    // eslint-disable-next-line no-underscore-dangle
    this._students = value;
  }
}
