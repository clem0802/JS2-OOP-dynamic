// 2021.11.17 FROM (MM) 
// ABSTRACTING OBJECTS
// POLYMORPHIC OBJECTS

/*----------------------------------*/ (I)
class Camera {
  openShutter() {
    console.log("Opening shutter");
  }
  
  closeShutter() {
    console.log("Closing shutter");
  }
  
  processImage() {
    console.log("Processing image");
  }
  
  takePhoto() {
    this.openShutter();
    this.closeShutter();
    this.processImage();
  }
}


// adjust the contrast and exposure of the "photo" INSTANCE by calling its CORE METHOD
/*----------------------------------*/ (II)
class Photo {
  adjustContrast() {
    console.log("Adjusting contrast");
  }
  
  adjustExposure() {
    console.log("Adjusting exposure");
  }
  
  optimizePhoto() {
    this.adjustContrast();
    this.adjustExposure();
  }
}

var photo = new Photo(); // "var photo" => an INSTANCE
photo.optimizePhoto(); // optimizePhoto => a METHOD



// distinguish the CORE METHODE from the low-level methods
// by assigning a suitable name to each one
/*----------------------------------*/ (III)
class Microwave {
  constructor() {
    this.lightOn = false;
    this.turnTableRotation = false;
  }
  
  turnOnLight() {
    this.lightOn = true;
  }
  
  rotateTurnTable() {
    this.turnTableRotating = true;
  }
  
  start() {
    this.turnOnLight();
    this.rotateTurnTable();
  }
}




