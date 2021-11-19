// 2021.11.19 FROM (MM) 
ABSTRACTING OBJECTS
POLYMORPHISM => l'ensemble est à REVOIR
/*----------------------------------*/
// POLYMORPHYSM lets us code different implementations for a behavior
// both "INSTANCES" and "SUBCLASSES" can override their inherited METHODS


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


/*----------------------------------*/ (III)
// override "Immortal" 's inherited METHOD 
// so that INSTANCES of "Immortal" can reset their health to 100 without losing any lives
class Player {
  constructor() {
    this.health = 100;
    this.lives = 3;
  }
  revive() {
    this.lives--;
    this.health = 100;
  }
}

class Immortal extends Player {
revive() {
  this.health = 100;
  }


/*----------------------------------*/ (IV)
// override the correct METHOD so that calling "spend()" on an INSTANCE of "Credit"
// will increase its "balance" PROPERTY by the amount spent
class Card {
  constructor(amount) {
    this.balance = amount;
    this.expiry = 2024;
  }
  spend(amount) {
    this.balance -= amount;
  }
  renew() {
  this.expiry += 4;
  }
}

class Credit extends Card {
  spend(amount) { //
  this.balance = amount; //
  }
}


/*----------------------------------*/ (V) 
// what does "player.attack()" display?
class Player {
  attack() {
    console.log("Take that!");
  }
}

class Pirate extends Player {
  attack() {
  console.log("Argh!");
  }
}

class Captain extends Player {
  attack() {
  console.log("Walk the plank!");
  }
}

var player = new Captain();
player.attack(); // Walk the plank!


/*----------------------------------*/ (VI) 
// how many implementations of "attack()" are there? => 3
// there are THREE implementations of "attack()"
class Player {
  attack() {
    console.log("Take that!");
  }
}

class Pirate extends Player {
  attack() {
  console.log("Argh!");
  }
}

var pirate = new Pirate();
pirate.attack = function() {
  console.log("Walk the plank!");
}
