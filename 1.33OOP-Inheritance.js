// 2021.11.15 FROM (MM) 
/*----------------------------------*/
// OOP => OBJECT-ORIENTED PROGRAMMING
// another key OOP concept: INHERITANCE


/*----------------------------------*/
// which methods does "phone" inherit?
// call() and charge()
class Electronics {
  charge() {
    console.log("Charging");
  }
}

class Phone extends Electronics {
  call(contact) {
    console.log("Calling " + contact);
  }
}

var phone = new Phone();



/*----------------------------------*/
// to create the three instances below, how many call() METHODS need to be saved in computer memory? // 1
class Phone {
  call(num) {
    console.log("Calling " + num);
  }
}
var phone1 = new Phone();
var phone2 = new Phone();
var phone3 = new Phone();



/*----------------------------------*/
// to call "tv.turnOn()" gives us an error
// the best way to fix this code is to make "Television" extend from "Appliance"
// code below incomplete !!
class Appliance {
  turnOn() {
    console.log("On");
  }
}

class Television {
  changeChannel(num) {
    console.log("Now on channel " + num);
  }
}

var tv = new Television();
tv.turnOn();
tv.changeChannel(4);




