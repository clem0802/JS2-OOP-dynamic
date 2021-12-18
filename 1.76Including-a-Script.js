// 2021.10.29 FROM (MM) 
/*----------------------------------*/
// DYNAMIC WEBPAGES
// INCLUDING A SCRIPT
// to make creating interactive webpages even easier, we can use separate files to add JavaScript and HTML
// the HTML file is named "index.html"
// the JavaScript file is named "script.js"
// we can make HTML fils include JavaScript files, or scripts, between the script tags
// we can also connect the HTML file to JavaScript file 
// to include a script, the opening script tage needs a "src" ATTRIBUTE
<!doctype html>
<html>
    <body> 
    HTML code goes here
        <script src="script.js"></script> //!
    </body>
</html>



/*----------------------------------*/
// an included script can access the tags and content of "index.html" with the //! "document"
// "document" OBJECT of a webpage stores the CONTENT and TAGS of the webpage
// console.log(document);
// we include the script (script.js)   in the webpage   (index.html)
<!doctype html>
<html>
    <body> 
    HTML code goes here
        <script src="script.js"></script> //!
    </body>
</html>



/*----------------------------------*/
/*----------------------------------*/
// interactive webpages often use BUTTONS to react to clicks from visitors
<!doctype html>
<html>
    <body> 
        <button>Publish website</button> //!
        <p id="prompt"></p>
    </body>
</html>




/*----------------------------------*/
//! ONCLICK    !!!!!!!!!
// without additional information, a button tag is useless
// to react to clicks from visitors, a button tag needs the //! "onclick" ATTRIBUTE
// the "onclick" ATTRIBUTE defines what happens when visitors click a button
<!doctype html>
<html>
    <body> 
        <button onclick>Publish website</button> //!
        <p id="prompt"></p>
        <script src="script.js"></script>
    </body>
</html>



/*----------------------------------*/
// the "onclick" attribute can CALL FUNCTIONS from an included script when a visitor clicks on the button
// set "onclick" to "sayHello()"
<!doctype html>
<html>
    <body> 
        <button onclick="sayHello()">Click me!</button> //!
        <p id="prompt"></p>
    </body>
</html>



/*----------------------------------*/
// .innerHTML
// HTML & JavaScript  (2 fils co-exist)
// using  .innerHTML, we can make the sayHello() function change the content of the paragraph when clicked
// set the content of the paragraph to "Website published"
// (HTML)
<!doctype html>
<html>
    <body> 
        <button onclick="sayHello()">Publish websites</button> 
        <p id="prompt"></p>
        <script src="script.js"></script>
    </body>
</html>

// (JavaScript)
function sayHello() {
    document.getElementById("prompt").innerHTML = "Website published"; //!
}



/*----------------------------------*/
// add the tags to create a button
<!doctype html>
<html>
    <body> 
        <button onclick="orderItem()">Add to cart</button> //!
        <script src="script.js"></script>
    </body>
</html>



/*----------------------------------*/
// set the value of the "onclick" attribute to CALL "deleteAccount()" when a visitor clicks on the button
<!doctype html>
<html>
    <body> 
        <button onclick="deleteAccount()">Delete account</button> //!
        <p id="prompt"></p>
    </body>
</html>



/*----------------------------------*/
// code "onclick="save()" to CALL the "save()" FUNCTION in the included script
<!doctype html>
<html>
    <body> 
        <button onclick="save()">Save progress</button> //!
        <p id="prompt"></p>
        <script src="script.js"></script>
    </body>
</html>



/*----------------------------------*/
// write the code to call the "subscribe()" function in the "script.js" file when a user clicks the "subscribe" button
// (HTML)
<!doctype html>
<html>
    <body> 
        <h1>New York Times</h1>
        <p>Get the latest and greatest news!</p>
        <button onclick="subscribe()">subscribe</button> // => onclick=
        <script src="script.js"></script>
    </body>
</html>

// (JavaScript)
function subscribe() {
    console.log("Welcome on board!");
}



/*----------------------------------*/
// .innerHTML
// inside the "change()" function, use "document.getElementById()" and ".innerHTML"
// to UPDATE the "h3" element's text to "pPONG"
// (HTML)
<!doctype html>
<html>
    <body> 
        <h3 id="word">ping</h3>
        <button onclick="change()">change</button> 
        <script src="script.js"></script>
    </body>
</html>

// (JavaScript)
function change() {
    document.getElementById("word").innerHTML = "PONG"; //!
}



/*----------------------------------*/
// what happens when a user clicks the "Next" button?
// the "next()" function gets called to change to a new fact
// (HTML)
<!doctype html>
<html>
      <!-- <head>
      <link rel="stylesheet" href="style.css">
      </head> -->
 <body>
   <h2>Cat Facts</h2>
   <p id="fact">A cat cannot see directly below its nose.</p>
   <button onclick="previous()">Previous</button>
   <button onclick="next()">Next</button>
   <script src="script.js"></script>
 </body>
</html>

// (JavaScript)
function next(){
    document.getElementById("fact").innerHTML = "Cats first went to space in 1963.";
}

function previous(){
    document.getElementById("fact").innerHTML = "A cat cannot see directly below its nose.";
}
