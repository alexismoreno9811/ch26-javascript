/* 
  
*/

class Car{
  
  #brand;
  #price;

  constructor(nameCar, brandCar, priceCar) {
    console.log("Has creado un nuevo objeto: " + nameCar);
    this.name = nameCar;
    this.#brand = brandCar;
    this.#price = priceCar;
  }
  igniteEngine = (state) => state ? "Engine is on" : "Engine is off";
  
  getDescription() {
    return `${this.name} de ${this.#brand} cuesta: $ ${this.#price}`;
  };

  set brand(newBrand) {
    this.#brand = newBrand;
  };

  get brand() {
    return this.#brand;
  };
  
  get price() {
    return this.#price;
  };

};

class ElectricCar extends Car{
  #numberOfBatteries;

  constructor(nameCar, brandCar, priceCar, numberOfBatteries) {
    super(nameCar, brandCar, priceCar);
    this.#numberOfBatteries = numberOfBatteries;
  }

  getDescription() {
    return `${super.getDescription()}, tiene: ${this.#numberOfBatteries} baterias`;
  };

};

export { Car, ElectricCar };