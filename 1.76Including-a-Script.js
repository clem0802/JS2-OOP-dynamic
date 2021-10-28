// 2021.10.29 FROM (MIMO) 
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
//!  .innerHTML
// HTML & JavaScript  (2 fils co-exist)
// using  .innerHTML, we can make the sayHello() function change the content of the paragraph when clicked
// set the content of the paragraph to "Website published"
//? (HTML)
<!doctype html>
<html>
    <body> 
        <button onclick="sayHello()">Publish websites</button> 
        <p id="prompt"></p>
    </body>
</html>

//? (JavaScript)
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
