import Car from './10-car';

class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  get range() {
    return this._range;
  }

  cloneCar() {
    const { _brand, _motor, _color } = this;
    const constructor = Object.getPrototypeOf(this).constructor;
    const clonedCar = new Car(_brand, _motor, _color); // Return instance of Car instead of EVCar
    return clonedCar;
  }
}

export default EVCar;

