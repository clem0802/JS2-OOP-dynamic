// 2021.10.25 FROM (MM) 
/*----------------------------------*/
// OBJECT-ORIENTED PROGRAMMING
// a style of coding used by developers to model real-life objects
// several coding styles: PARADIGME
// a common style is called FUNCTIONAL PROGRAMMING (FP), use many FUNCTIONS & VARIABLES

function getTotal(a,b){
    return a+b;
}
console.log(getTotal);

var num1 =2;
var num2 =3;
var total = getTotal(num1,num2);
console.log(total); // 5




/*----------------------------------*/
//! FP code => (Functional Programming)
// in FP, functions RETURN new values and then use those values somewhere else in the code
function getDistance(mph, h) {
    return mph * h;
}

var mph = 60;
var h = 2;
var distance = getDistance(mph, h);
console.log(distance); // 120




/*----------------------------------*/
//! OOP code => (Object-Oriented Programming)
// we group data and functionality as properties and methods inside objects
// here we add a PROPERTY "hungry" and a METHOD "eat()" to OBJECT "dog"
var dog = { // obj
    hungry: true, // property
    eat: function() { // method
        dog.hungry = false;
    }
}

dog.eat();
console.log(dog.hungry); // false




/*----------------------------------*/
// OOP code => (Object-Oriented Programming)
// OOP is useful for modelin greal-life objects, have properties and functions that we treat as one package
//! we use OOP when we want to KEEP TRACK OF A VALUE as an OBJECT'S PROPERTY
// here we model a car by creating an object with a "mileage" PROPERTY and "drive()" METHOD
// one style is not a replacement for the other, we need both FP and OOP
//! we call an OBJECT'S FUNCTIONS => METHODS
var car = {
    mileage: 12000,
    drive: function(miles) {
        car.mileage += miles;
    }
};
car.drive(100);
console.log(car.mileage); // 12100




/*----------------------------------*/ 
// 
var dog = {
    breed: "Dalmation",
    hungry: true,
    bark: function() { 
        console.log("Woof!"); // Woof!
    },
    eat: function() {
        dog.hungry = false;
    }
};

dog.bark(); 
dog.eat();

console.log(dog.bark); 
console.log(dog.eat);
console.log(dog.breed); // Dalmation
console.log(dog.hungry); // false
console.log(dog); // {breed: 'Dalmation', hungry: false, bark: ƒ, eat: ƒ}



//! /*----------------------------------*/ 
//! /*----------------------------------*/ 
//! PIGGY BANK !!!!
//! PIGGY BANK !!!!

// less experienced code, in FP
function addMoney(value, amount){
    return value + amount;
}
var value = 0;
var value = addMoney(value, 100);
value = addMoney(value, 50);
value = addMoney(value, 20);
console.log(value); // 172


/*----------------------------------*/ 
// but, in OOP style, better to track down
// FIRST, create a "value" PROPERTY that can be easily updated and we set it to "0"
var myPiggy = {
    value : 0
}

/*----------------------------------*/ 
// SECOND, add a METHOD => "addMoney()" that accepts a PARAMETER "amount"
var myPiggy = {
    value : 0,
    addMoney: function(amount)
}

/*----------------------------------*/ 
// THIRD, now we make "addMoney()" update "value" every time we add money to the virutal piggy bank
var myPiggy = {
    value : 0,
    addMoney: function(amount) {
        myPiggy.value = myPiggy.value + amount;
    }
}

/*----------------------------------*/ 
// FOURTH, add $100 into our piggy bank by coding "myPiggy.addMoney(100)"
var myPiggy = {
    value : 0,
    addMoney: function(amount) {
        myPiggy.value = myPiggy.value + amount;
    }
};
myPiggy.addMoney(100); //! to CALL

/*----------------------------------*/ 
// FIFTH, we display "myPiggy.value"
var myPiggy = {
    value : 0,
    addMoney: function(amount) {
        myPiggy.value = myPiggy.value + amount;
    }
}
myPiggy.addMoney(100);
console.log(myPiggy.value); // 100
