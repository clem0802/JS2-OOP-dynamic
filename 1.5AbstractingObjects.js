// 2021.10.26 FROM (MIMO) 
/*----------------------------------*/
// ABSTRACTING OBJECTS
// how to create OBJECTS that are easy to understand and use in OOP
// how to model a complicated OBJECT, like a car, in JAvaScript
// we don't interact with every METHOD or PROPERTY
// but we interact with only a few CORE PARTS that control the rest of the car
// a car does a lot of things at the same time
// a car injects and ignites ful thousands of times a minute just to stay running
// if we had to always make low-level METHOD CALLs to control an OBJECT, our code would be very hard to read and use
// manage each low-level METHOD CALL by ourselves increases the chance we'll make a mistake and cause unwanted effects
class Car {
    injectFuel() {
        console.log("Spraying fuel!");
    }

    igniteFuel() {
        console.log("Boom!")
    }
}

var car = new Car();
car.injectFuel();
car.igniteFuel();
car.injectFuel();
car.igniteFuel();




/*----------------------------------*/
/*----------------------------------*/
// cars do all of this low-level functionality for us, and we only have to start them up
// hiding these details is called ABSTRACTION
//! ABSTRACTION = simplifying how we interact with OBJECTS down to a few METHODS
// we implement abstraction in OOP by writing a few CORE FUNCTIONS that handle all of the low-level work
// ABSTRACTION allows other developers to use our CLASS without having to know what low-level METHODS it has or how they even work
// other developers can create a new object from our "Car" CLASS and use it by just calling a few CORE METHODS
class Car {
    injectFuel() {
        console.log("Spraying fuel!");
    }

    igniteFuel() {
        console.log("Boom!")
    }

    startUp() {
        this.on = true;
        while (this.on) {
            this.injectFuel();
            this.igniteFuel();
        }
    }
}

var car = new Car();
car.startUp();
// Spraying fuel
// Boom!
// Spraying fuel
// Boom!




/*----------------------------------*/
/*----------------------------------*/
// ABSTRACT this CLASS by creating a makeCoffee() METHOD 
// a METHOD that heats water, adds it to coffee grounds, and filters off the coffee
class Coffeemaker {
    heatWater() {
        console.log("Heating water");
    }

    brew() {
        console.log("Adding water to grounds");
    }

    filter() {
        console.log("Filtering coffee");
    }

    makeCoffee() {
        this.heatWater();
        this.brew();
        this.filter();
    }
}

var coffeeMaker = new Coffeemaker();
coffeeMaker.makeCoffee();
// Heating water
// Adding water to grounds
// Filtering coffee




/*----------------------------------*/
/*----------------------------------*/
// to make ice cream, we must both churn and freeze cream
// call the METHOD of iceCreamMaker that does both for us
class IceCreamMaker {
    churn() {
        console.log("Churning cream");
    }

    freeze() {
        console.log("Freezing cream");
    }

    makeIceCream() {
        this.churn();
        this.freeze();
    }
}

var iceCreamMaker = new IceCreamMaker();
iceCreamMaker.makeIceCream();
// Churning cream
// Freezing cream




/*----------------------------------*/
/*----------------------------------*/
// code the translateLive() METHOD so that travelers using your app can instantly translate their audio into another language
class Translator {
    record() {
        console.log("Recording audio");
    }

    transcribeRecording() {
        console.log("Converting audio to text");
    }

    translateLive() {
        this.record();
        this.transcribeRecording();
        this.translateText();
    }
}




/*----------------------------------*/
/*----------------------------------*/
//! CORE METHOD
// CALL the correct CORE METHOD that handles the low-level functionality of changing slides after displaying each one
class Slideshow {
    constructor(slides) {
        this.slides = slides;
        this.current = 1;
    }

    viewNextSlide() {
        this.current++;
    }

    play() {
        while (this.current <= this.slides) {
            console.log("Slide " + this.current);
            this.viewNextSlide();
        }
    }
}

var slideshow = new Slideshow(5);
slideshow.play();
// Slide 1
// Slide 2
// Slide 3
// Slide 4
// Slide 5
