// 2021.10.25 FROM (MM) 
/*----------------------------------*/
// OOP => OBJECT-ORIENTED PROGRAMMING
// in FP, code is not encapsulated => the variables and the function are not grouped together in one OBJECT
// in OOP, we group together related data and functions in the same object = ENCAPSULATION
// in OOP, the key principle is ["ENCAPSULATION"] METHODS
// ENCAPSULATION => is a pillar of OOP
// METHODS in OOP can "use" and "modify" their object's PROPERTIES  !!!
// in OOP, we have to ["IDENTIFY"] which METHODS and PROPERTIES belong together and which should be added to other OBJECTS 

/*----------------------------------*/
// car (OBJECT)
// mileage (PROPERTY)
// drive (METHOD)
// drive() METHOD has access to "mileage" PROPERTY

var car = {
    mileage: 12000,
    drive: function(miles){
        car.mileage += miles;
    }
};


/*----------------------------------*/
// encapsulated code
var car = { 
    color: "red",
    on: false,
    start: function(){
        car.on = true;
    }
}
//---------
var person = { 
    name: "Jeremiah",
    greet: function(){
        console.log("Hi there!")
    }
};
//---------
var smartphone = {
    brand: "appel",
    call: function() {
    }
};



/*----------------------------------*/
// codes below respect "ENCAPSULATION PRINCIPLE"
var desktop = {
    on: false,
    start: function() {
        desktop.on = true;
    }
};

var laptop = {
    on: false,
    start: function() {
        laptop.on = true;
    }
};



/*----------------------------------*/
// the OOP below has 3 METHODs
var dog = {
    hungry: true,
    asleep: false,
    bark: function() {
        console.log("Woof!");
    },
    eat: function() {
    dog.hungry: false;
    },
    sleep: function() {
    dog.asleep: true;
    },
};



/*----------------------------------*/
// 3 METHODS
var washingMachine = {
    washClothes: function() {},
};
var coffeeMaker = {
    makeCoffee: function() {},
};
var toaster = {
    makeToast: function() {},
};



/*----------------------------------*/
/*----------------------------------*/
//! NON-ENCAPSULATED CODE (= FP code), means => related METHODS and PROPERTIES are not grouped together
// HOW TO encapsulate ???

// (1) need to move eat() inside the "dog" OBJECT
var dog = {
    hungry: true
};
var dogActions = {
    eat: function(){
        dog.hungry = false;
    }
};



// (2) need to put getArea(), base and height in an OBJECT
function getArea(b * h) {
    return b * h;
}
var base = 3;
var height = 4;




// (3) EXO to turn (2) into OOP
//!! turn VARIABLES into PROPERTIES
//!! turn FUNCTION into METHOD
// getArea()is an OBJECT METHOD
// call the rectangle's getArea() METHOD
// display the result
//? update the base property
//? we can now keep track of "rectangle" OBJECT's properties and update them whenever we want

var rectangle = { // here an OBJECT
    base: 3,
    height: 4,
    getArea: function() {
        return rectangle.base * rectangle.height;
    }
};

rectangle.base = 10; //? 10x4=40 (étape7)
var area = rectangle.getArea();
console.log(area); // 12
