// 2021.11.19 FROM (MM) 
// ABSTRACTING OBJECTS
// POLYMORPHISM

/*----------------------------------*/ (I)
// polymorphism lets us code different implementations for a behavior
// both "INSTANCES" and "SUBCLASSES" can override their inherited METHODS

class Person {
  greet() {
    console.log("Hello");
  }
}
var professor = new Person();
professor.greet();
professor.greet = function() {
  console.log("Good news, everyone");
}
console.log(professor()); // Hello => (pas très compris)



/*----------------------------------*/ (II)
// what does "surfer.greet()" display in the console? => Cowabunga!
class Person {
  greet() {
    console.log("Hello");
  }
}

class Surfer extends Person {
  greet() {
    console.log("Aloha!");
  }
}

var surfer = new Surfer();
surfer.greet = function() {
  console.log("Cowabunga!");
}
surfer.greet(); // Cowabunga!



/*----------------------------------*/ (III)
// what does "surfer.greet()" display in the console? => Cowabunga!
class Person {
  greet() {
    console.log("Hello");
  }
}

class Surfer extends Person {
  greet() {
    console.log("Aloha!");
  }
}

var surfer = new Surfer();
surfer.yell = function() {
  console.log("watch out!");
}
surfer.greet(); // Aloha! => (pas très compris)



/*----------------------------------*/ (IV)
// customize "Microwave" 's implementation of "heat()"
// so that it turns on both the oven and the oven lights when called
class Oven {
  constructor() {
    this.on = false;
    this.lightOn = false;
  }

  heat() {
    this.on = true;
  }
}

class Microwave extends Oven {
  heat() {
    this.on = true;
    this.lightOn = true;
  }
}



/*----------------------------------*/ (V)
// wcreate a new instance for a user who can watch videos "WITHOUT SEEING ADS"
class User {
  watchVideo() {
    console.log("Viewing ad");
  }
}

class Premium extends User {
  watchVideo() {
    console.log("Playing video");
  }
}

var user = new Premium();
user.watchVideo(); // Playing video



/*----------------------------------*/ (VI) 
// choose the correct class to INSTANTIATE 
// so that "car.startUp()" displays "Press clutch"
class Car {
  startUp() {
    console.log("Press brake");
  }

  turnOnAC() {
    console.log("AC is on");
  }
}

class ManualCar extends Car {
  startUp() {
    console.log("Press clutch");
  }
}

var car = new ManualCar;
car.turnOnAC(); // AC is on
car.startUp(); // Press clutch



/*----------------------------------*/ (VII)
// chode the CLASS and SUBCLASS
// so that the code displays "Playing HD video!"
class User {
  playVideo() {
    console.log("Ad #99: Learn how to make video ads!");
  }
}

class Premium extends User {
  playVideo() {
    console.log("Playing HD video");
  }
}

var user = new Premium();
user.playVideo(); // Playing HD video



