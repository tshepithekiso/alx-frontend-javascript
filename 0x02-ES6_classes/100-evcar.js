import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
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

  get range() {
    return this._range;
  }

  cloneCar() {
    const { _brand, _motor, _color } = this;
    return new Car(_brand, _motor, _color);
  }
}
