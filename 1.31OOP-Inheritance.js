// 2021.10.25 FROM (MM) 
/*----------------------------------*/
// OOP => OBJECT-ORIENTED PROGRAMMING
// another key OOP concept: INHERITANCE
// think about JavaScript CLASSES

// below, there are 2 METHODS, not efficient
var person1 = {
    greet: function() {
        console.log("Hi");
    }
};

var person2 = {
    greet: function() {
        console.log("Hi");
    }
}



/*----------------------------------*/
/*----------------------------------*/
// use INHERITANCE to make our code efficient
// through INHERITANCE, OBJECTS receive METHODS from other OBJECTS or CLASSES
// INHERITANCE lets us create OBJECTS that have different PROPERTIES and behaviors without coding each one from scratch
// one way to apply INHERITANCE is by CREATING OBJECTS from other OBJECTS
// now the "person" OBJECT has inherited the "template" OBJECT's METHOD
// and it can use them as its own
var template = {
    greet: function() {
        console.log("Hi");
    }
};
var person = Object.create(template); 



/*----------------------------------*/
/*----------------------------------*/
// OBJECTS don't OWN inherited METHODS but "BORROW" them
// Object.create //!!!

var template = {
    greet: function() {
        console.log("Hi");
    }
};
var person = Object.create(template); //!
person.greet(); // Hi // to CALL greet() as a METHOD of "person"
console.log(template); // {greet: ƒ} => { greet: [Function: greet] }
console.log(person); // {} => the "person" OBJECT is EMPTY



/*----------------------------------*/
/*----------------------------------*/
// if we need more METHODS for an OBJECT, we can set them directly
// Object.create()

var car = {
    startEngine: function() {
        console.log("Starting engine");
    }
};

var hybrid = Object.create(car);  //
hybrid.charge = function() {  // to add new "charge" METHOD
    console.log("Using fuel to charge battery");
};

hybrid.startEngine(); // Starting engine
hybrid.charge(); // Using fuel to charge battery



/*----------------------------------*/
/*----------------------------------*/
// Object.create //!!!
// when using the above formula, PROPERTY values are not inherited
// display "player1" OBJECT, it doesn't have a "name" VALUE
// output: EMPTY OBJECT 

var player = {
    name: "Player",
    greet: function() {
        console.log("REady to play");
    }
};

var player1 = Object.create(player);
console.log(player1); // {}

player1.name = "Jill";
console.log(player1); // {name: 'Jill'}



/*----------------------------------*/
/*----------------------------------*/
// Object.create is not the most common approach
// OBJECT-to-OBJECT inheritance => OBJECTS can use METHODS stored in a template OBJECT
var car = {
    displayMiles: function() {
        console.log("0 miles driven");
    }
}

var porsche = Object.create(car);
var bmw = Object.create(car);
var jaguar = Object.create(car);

porsche.displayMiles();
bmw.displayMiles();
jaguar.displayMiles();

// 0 miles driven
// 0 miles driven
// 0 miles driven




/*----------------------------------*/
/*----------------------------------*/
var speaker = {
    play: function() {
        console.log("Playing audio");
    }
};

var alexa = Object.create(speaker); // alexa inherits the play() METHOD

alexa.listen = function() {
    console.log("Listening...");
}



/*----------------------------------*/
/*----------------------------------*/
var car = {
    drive: function() {
        console.log("Vroom!");
    },
    honk: function() {
        console.log("HONK!");
    }
};

var myCar = Object.create(car);

console.log(myCar); // {} => myCar OBJECT is EMPTY
console.log(myCar.drive()); //! Vroom!
console.log(myCar.honk()); //! HONK!



/*----------------------------------*/
/*----------------------------------*/
// the "dog" OBJECT inherits the howl() METHOD
var wolf = {
    howl: function() {
        console.log("aaAAAOUUUUUUUuuuuuuu....");
    }
};

var dog = Object.create(wolf);
dog.howl(); // aaAAAOUUUUUUUuuuuuuu....



/*----------------------------------*/
/*----------------------------------*/
// pass the correct template OBJECTS to make the METHOD CALLS work at the end
var car = {
    fuel: function() {
        console.log('Fueling');
    }
};

var electricCar = {
    charge: function() {
        console.log("Charging");
    }
}

var car1 = Object.create(electricCar);
var car2 = Object.create(car);

car1.charge();
car2.fuel();
// Charging
// Fueling
