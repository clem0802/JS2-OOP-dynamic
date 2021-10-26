// 2021.10.26 FROM (MIMO) 
/*----------------------------------*/
// OOP => OBJECT-ORIENTED PROGRAMMING
// another key OOP concept: INHERITANCE
// think about JavaScript CLASSES
//! every CLASS contains a METHOD called a CONSTRUCTOR()
//! CONSTRUCTOR() sets the PROPERTIES of new OBJECTS, known as INSTANCES
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

var person = new Person("Sam",23);
console.log(person); // Person {name: 'Sam', age: 23}



/*----------------------------------*/
// OOP => OBJECT-ORIENTED PROGRAMMING
// creating OBJECTS out of CLASSES is a great example of using INHERITANCE to write short, efficient code
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log("Hi, my name is " + this.name + ", and I am " + this.age + " years old.");
    }
}

var person1 = new Person("Sam",23);
var person2 = new Person("Jim",24);
var person3 = new Person("Bob",25);
console.log(person1);
person1.greet();
person2.greet();
person3.greet();
// Person {name: 'Sam', age: 23}
// Hi, my name is Sam, and I am 23 years old.
// Hi, my name is Jim, and I am 24 years old.
// Hi, my name is Bob, and I am 25 years old.




/*----------------------------------*/
/*----------------------------------*/
// we want to model students in the following code
// Student OBJECT should work exactly like User OBJECT, but has one more PROPERTY "major"
//! the code below REPEATS too many things
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log("Hi!");
    }
}

class Student {
    constructor(name, age, major) {
        this.name = name;
        this.age = age;
        this.major = major;
    }

    greet() {
        console.log("Hi!");
    }
}



/*----------------------------------*/
/*----------------------------------*/
// the code above repeats too many things, so to inherit USER's greet(), we use "extends User"
// here, Student is a SUBCLASS
// by coding "super(name, age);" this SUBLCASS "Student" will also have the PROPERTIES of SUPERCLASS "User"
// this SUBCLASS has its own additional PROPERTY "major"
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log("Hi, my name is " + this.name + ", and I am " + this.age + " yo, and I am major in " + this.major + ".");
    }
}

class Student extends User {
    constructor(name, age, major) {
        super(name, age); //!
        this.major = major; //!
    }
}

var student1 = new Student("Sam",23, "chemistry");
var student2 = new Student("Jim",24, "music");
var student3 = new Student("Bob",25, "theology");
console.log(student1); // Student {name: 'Sam', age: 23, major: 'chemistry'}
console.log(student2); // Student {name: 'Jim', age: 24, major: 'music'}
console.log(student3); // Student {name: 'Bob', age: 25, major: 'theology'}
student1.greet(); // Hi, my name is Sam, and I am 23 yo, and I am major in chemistry.
student2.greet(); // Hi, my name is Jim, and I am 24 yo, and I am major in music.
student3.greet(); // Hi, my name is Bob, and I am 25 yo, and I am major in theology.




/*----------------------------------*/
/*----------------------------------*/
// what will console.log(phone) display?
class Phone {
    constructor(provider) {
        this.provider = provider;
    }
    call(contact) {
        console.log("Calling " + contact);
    }
}
var phone = new Phone('AT&T');
console.log(phone); // Phone {provider: 'AT&T'}



class Phone {
    call(contact) {
        console.log("Calling " + contact); // Calling Mom
    }
}
var phone = new Phone();
phone.call("Mom");
console.log(phone); // Phone {}




/*----------------------------------*/
/*----------------------------------*/
// a coworker needs OBJECTS with both "company" and "language" PROPERTITES
// so he creates a separate "Developer" CLASS, what should he do? 
// should make "Developer" become a SUBCLASS of "Employee"
class Employee {
    constructor(company) {
        this.company = company;
    }
}

class Developer { // an INSTANCE 
    constructor(company, language) {
        this.company = company;
        this.language = language;
    }
}

/*----------------------------------*/ // => (SOLUTION)
class Employee {
    constructor(company) {
        this.company = company;
    }
}

class Developer extends Employee { 
    constructor(company, language) {
        super(company);
        this.language = language;
    }
}

var dev = new Developer("Mimo", "JS");
console.log(dev); // Developer {company: 'Mimo', language: 'JS'}





/*----------------------------------*/
/*----------------------------------*/
// which METHODS can we call on the "jet" INSTANCE? => both fly() and invert()
class Plane {
    fly() {
        console.log("Whoosh!");
    }
}

class Jet extends Plane {
    invert() {
        console.log("Inverting!");
    }
}

var jet = new Jet();
jet.fly();
jet.invert();
// Whoosh!
// Inverting!




/*----------------------------------*/
/*----------------------------------*/
// EXO
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class Parent extends Person {
    constructor(name, age, kids) {
    super(name, age);
    this.kids = kids;
    }
}

var parent = new Parent("Sally", 40, 2); //!
console.log(parent); // Person {name: 'Sally', age: 40}




/*----------------------------------*/
/*----------------------------------*/
// EXO
class Person {
    constructor(name) {
        this.name = name;
    }
}

class Teacher extends Person {
    constructor(name, subject) {
        super(name);
        this.subject = subject;
    }
}
class Professor extends Teacher {} // Professor from Teacher CLASS so can inherit both "name" and "subject" PROPERTIES



/*----------------------------------*/
/*----------------------------------*/
// EXO
// Landline phones can make calls but can't surf the web, choose the correct CLASS for "Landline" to extend
class Phone {
    call(contact) {
        console.log("Calling " + contact);
    }
}

class Cell extends Phone {
    surfweb() {
        console.llg("Opening homepage");
    }
}

class Landline extends Phone {} //!
