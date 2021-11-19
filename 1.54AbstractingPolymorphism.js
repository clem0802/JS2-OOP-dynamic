// 2021.11.19 FROM (MM) 
// ABSTRACTING OBJECTS
// POLYMORPHISM

/*----------------------------------*/ (I)
// a company wants to offer a cheaper streaming plan 
// create a "Basic" CLASS that inherits and overrides "addDevice()" from "User"
class User {
  constructor() {
    this.devices = 0;
  }
  addDevice() {
  this.devices++;
  }
}

class Basic extends User {
  addDevice() {
    if (this.devices === 2) {
      console.log("Limit reached");
    } else {
      this.devices++;
    }
  }
}


/*----------------------------------*/ (II)
// override the correct METHOD so that "tesla.turOnAC()" displays "AC on" 
// and "tesla.displayWarning()" displays "Battery low"
class Car {
  displayWarning() {
    console.log("Fuel low");
  }
  turnOnAC() {
    console.log("AC on");
  }
}

var tesla = new Car();
tesla.displayWarning = function() {
  console.log("Battery low");
}
tesla.turnOnAC(); // => AC on
tesla.displayWarning(); // => Battery low






