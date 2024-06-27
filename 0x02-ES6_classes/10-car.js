const cloneCarSymbol = Symbol('cloneCarSymbol');

class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;

    // Bind the cloneCar method to the instance using a Symbol
    this[cloneCarSymbol] = this.cloneCar.bind(this);
  }

  get brand() {
    return this._brand;
  }

  get motor() {
    return this._motor;
  }

  get color() {
    return this._color;
  }

  cloneCar() {
    const { _brand, _motor, _color } = this;
    const constructor = Object.getPrototypeOf(this).constructor;
    const clonedCar = new constructor(_brand, _motor, _color);
    return clonedCar;
  }

  // Method to check instance using Symbol
  static [Symbol.hasInstance](instance) {
    return instance[cloneCarSymbol] !== undefined;
  }
}

export default Car;
