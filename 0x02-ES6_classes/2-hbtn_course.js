class HolbertonCourse {
  constructor(name, length, students) {
    this._name = HolbertonCourse._validateString(name, 'Name');
    this._length = HolbertonCourse._validateNumber(length, 'Length');
    this._students = HolbertonCourse._validateStudentsArray(students);
  }

  static _validateString(value, attributeName) {
    if (typeof value !== 'string') {
      throw new TypeError(`${attributeName} must be a string`);
    }
    return value;
  }

  static _validateNumber(value, attributeName) {
    if (typeof value !== 'number') {
      throw new TypeError(`${attributeName} must be a number`);
    }
    return value;
  }

  static _validateStudentsArray(value) {
    if (!Array.isArray(value) || !value.every((student) => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    return value;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = HolbertonCourse._validateString(value, 'Name');
  }

  get length() {
    return this._length;
  }

  set length(value) {
    this._length = HolbertonCourse._validateNumber(value, 'Length');
  }

  get students() {
    return this._students;
  }

  set students(value) {
    this._students = HolbertonCourse._validateStudentsArray(value);
  }
}

export default HolbertonCourse;
