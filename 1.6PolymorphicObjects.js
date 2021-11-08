// 2021.10.26 FROM (MM) 
/*----------------------------------*/
// POLYMORPHIC OBJECTS
// to make our code easier to use, we want to keep the same METHOD CALLs for different OBJECTs
// even if they have slightly different behaviors

car.displayAlert(); // Warning: Fuel low
electricCar.displayAlert(); // Battery low




/*----------------------------------*/
// sometimes inherited METHODS won't make sense without adapting them
// like displaying a fuel warning for an "electricCar" OBJECT
class Car {
    displayAlert() {
        console.log("Fuel low");
    }

    startNavigation() {
        console.log("Select Destination");
    }
}

var electricCar = new Car();
electricCar.displayAlert();
// Fuel low



/*----------------------------------*/
// in OOP, OBJECTS can have the same METHOD CALLs but different behaviors
// we call that POLYMORPHISM
// as an exameple, all three INSTANCES below inherit the honk() METHOD but produce different sounds
var prius = new Car();
var mustang = new Car();
var modelT = new car();

prius.hong(); // beep beep!
mustang.honk(); // honk honk!
modelT.honk(); // ahooga!



/*----------------------------------*/
// we apply POLYMORPHISM
// to apply polymorphism and change how OBJECTs behave, we override OBJECT METHODs with the right behavior
class Car {
    alertOpenDoor() {
        console.log("Close 4 doors!");
    }
}

var coupe = new Car();

coupe.alertOpenDoor = function () { //!
    console.log("Close 2 doors!");
}

coupe.alertOpenDoor(); 
// Close 2 doors!



/*----------------------------------*/
// similarly, we override SUBCLASS METHODs when needed
//! both INSTANCES and SUBCLASSES can override their inherited METHODs
class Car {
    lockDoors() {
        console.log("Locking 4 doors");
    }
}

class Coupe extends Car {
    lockDoors() {
        console.log("Locking 2 doors");
    }
}

var coupe = new Coupe();
coupe.lockDoors();
// Locking 2 doors



/*----------------------------------*/
// thru POLYMORPHISM, we can call on OBJECT METHODs knowing that they have the correct behavior set
// not having to remember different METHOD names for each unique behavior makes our code easy to use and maintain
class Car {
    lockDoors() {
        console.log("Locking 4 doors");
    }
}

class Coupe extends Car {
    lockDoors() {
        console.log("Locking 2 doors");
    }
}

var car = new Car();
var coupe = new Coupe();
car.lockDoors();
coupe.lockDoors();
// Locking 4 doors
// Locking 2 doors



/*----------------------------------*/
// how to customize only the "cowboy" OBJECT's greet() METHOD so that it logs "Howdy!" ?
// by setting a custom "greet()"" METHOD on "cowboy" 
class Person {
    greet() {
        console.log("Hello");
    }
}

var cowboy = new Person();
var farmer = new Person();



/*----------------------------------*/
// what does "professor.greet()" display in the console?
class Person {
    greet() {
        console.log("Hello!");
    }
}

class Professor extends Person {
    greet() {
        console.log("Salutations!");
    }
}

var professor = new Professor();
professor.greet(); 
// Salutations!



/*----------------------------------*/
// what gets displayed in the console?  
class Person {
    greet() {
        console.log("Hello!");
    }
}

class Professor extends Person {
    greet() {
        console.log("Salutations");
    }
}

var professor = new Professor();
professor.greet = function() {  //!
    console.log("Good news, everyone!");
}

professor.greet();
// Good news, everyone!



/*----------------------------------*/
// override the inherited METHOD so that premium.playVideo() doesn't show any ads //! check
class User {
    playVideo() {
        console.log("Ad #1: shaving cream for $9.99 only!");
    }
}

var premium = new User();

premium.playVideo = function() {  //! cette étape supp a empêché l'affichage de la pub
    console.log("Buffering 8K HD Video");
};

premium.playVideo();
// Buffering 8K HD Video



/*----------------------------------*/
// code the OBJECT that displays "Playing HD video!" when CALLing "playVideo()" //! DIFFICULT ....
class User {
    playVideo() {
        console.log("Ad #99: Learn how to make video ads");
    }
}

class Premium extends User {
    playVideo() {
        console.log("Playing HD video");
    }
}

var user1 = new Premium();
var user2 = new User();

user1.playVideo();
// Playing HD video



/*----------------------------------*/
// place the code snippets in their correct METHODs so that "smartphone.unlock()" prompts the user to enter their thumbprint 
class Cell {
    unlock() {
        console.log("Enter passcode");
    }
}

class Smartphone extends Cell {
    unlock() {
        console.log("Enter thumbprint");
    }
}

var smartphone = new Smartphone();
smartphone.unlock();
// Enter thumbprint



/*----------------------------------*/
// make "phone1" unlock by scanning the user's face and "phone2" unlock by scanning the user's thumbprint 
class Smartphone {
    unlock() {
        console.log("Enter thumbprint");
    }
}

class Galaxy extends Smartphone {
    unlock() {
        console.log("Scanning face");
    }
}

var phone1 = new Galaxy();
var phone2 = new Smartphone();

phone1.unlock();
phone2.unlock();
// Scanning face
// Enter thumbprint
