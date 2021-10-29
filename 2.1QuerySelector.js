// 2021.10.29 FROM (MIMO) 
/*----------------------------------*/
// QUERY SELECTORS
// how to access and change SPECIFIC elements on a webpage


/*----------------------------------*/
/*----------------------------------*/
// querySelector() is a METHOD
// to select a specific element, we add a selector inside parantheses, like coding "p"
// if we want to get the paragraph below the button

//! (HTML)
<!doctype html>
<html>
    <body> 
        <button onclick="publish()">Publish website</button> 
        <p>Website not published</p>
        <script src="script.js"></script>
    </body>
</html>

//! (JavaScript)
function publish() {
    var el = document.querySelector("p"); //!
}
// button of "Publish website" (output)
// Website not published (output)




/*----------------------------------*/
/*----------------------------------*/
// querySelector() is a METHOD
// once we've stored the element in a VARIABLE, we can change it
// here we're using the "innerHTML" PROPERTY to change its content

//! (HTML)
<!doctype html>
<html>
    <body> 
        <button onclick="publish()">Publish website</button> 
        <p>Website not published</p>
        <script src="script.js"></script>
    </body>
</html>

//! (JavaScript)
function publish() {
    var el = document.querySelector("p");
    el.innerHTML = "Website published!"; //!
}
// button of "Publish website" (output)
// Website published! (output)




/*----------------------------------*/
/*----------------------------------*/
//! #  for ID selection
// querySelectr() works with all selectors, like TAGS, CLASSES, and IDs
// if we are looking for an ID, we add (#) at the beginning

//! (HTML)
<!doctype html>
<html>
    <body> 
        <button onclick="publish()">Publish website</button> 
        <p id="prompt">Website not published</p> //!
        <script src="script.js"></script>
    </body>
</html>

//! (JavaScript)
function publish() {
    var el = document.querySelector("#prompt"); //!
    el.innerHTML = "Website published!"; 
}
// button of "Publish website" (output)
// Website published! (output)




/*----------------------------------*/
/*----------------------------------*/
//! .  for CLASS selection
// querySelectr() works with all selectors, like TAGS, CLASSES, and IDs
// if we are looking for a CLASS, we have to add (.) at the beginning

//! (HTML)
<!doctype html>
<html>
    <body> 
        <button onclick="publish()">Publish website</button> 
        <p class="prompt">Website not published</p> //!
        <script src="script.js"></script>
    </body>
</html>

//! (JavaScript)
function publish() {
    var el = document.querySelector(".prompt"); //!
    el.innerHTML = "Website published!"; 
}
// button of "Publish website" (output)
// Website published! (output)




/*----------------------------------*/
/*----------------------------------*/
//! querySelectr() only retrieves the FIRST element it finds
// if we have two elements with the same TAG or CLASS, we only access the first one

//! (HTML)
<!doctype html>
<html>
    <body> 
        <button onclick="publish()">Publish website</button> 
        <h3>First Heading</h3>
        <h3>Second Heading</h3>
        <h3>Third Heading</h3>
        <script src="script.js"></script>
    </body>
</html>

//! (JavaScript)
function publish() {
    var el = document.querySelector("h3"); //!
    el.innerHTML = "Website published!"; 
}
// button of "Publish website" (output)
// First Heading (output)
// Second Heading (output)
// Third Heading (output)




/*----------------------------------*/
/*----------------------------------*/
// which "h3" element does the "reresh()" FUNCTION CHANGE ?
// only the first "h3" element

//! (HTML)
<!doctype html>
<html>
    <body> 
        <button onclick="refresh()">Refresh</button> 
        <h3>New Y-phone</h3>
        <h3>New Olympic Sport?</h3>
        <script src="script.js"></script>
    </body>
</html>

//! (JavaScript)
function publish() {
    var el = document.querySelector("h3"); //!
    el.innerHTML = "Y-phone cancelled"; 
}
// button of "Publish website" (output)
// New Y-phone (output)
// New Olympic Sport? (output)




/*----------------------------------*/
/*----------------------------------*/
// which "h3" element does the "reresh()" FUNCTION CHANGE ?
// only the first "h3" element

//! (HTML)
<!doctype html>
<html>
    <body> 
        <button onclick="refresh()">Refresh</button> 
        <h3>New Y-phone</h3>
        <h3 id="#sports">New Olympic Sport?</h3> //!
        <script src="script.js"></script>
    </body>
</html>

//! (JavaScript)
function publish() {
    var el = document.querySelector("#sports"); //!
    el.innerHTML = "Skateboarding is now an Olympic sport!"; 
}
// button of "Publish website" (output)
// New Y-phone (output)
// New Olympic Sport? (output)




/*----------------------------------*/
/*----------------------------------*/
// code the #update ID

//! (HTML)
<!doctype html>
<html>
    <body> 
        <button onclick="refresh()">Refresh</button> 
        <h3 id="update">Beer Pong: New Olympic Sport?</h3> //!
        <script src="script.js"></script>
    </body>
</html>

//! (JavaScript)
function publish() {
    var el = document.querySelector("#update"); //!
    el.innerHTML = "Beer Pong: New Olympic Sports? - No"; 
}




/*----------------------------------*/
/*----------------------------------*/
// querySelector() gets the first element it finds
// that could be a problem if the element we are looking for comes later in the code
// code (.prompt) and then press the button to change the first element with that class

//! (HTML)
<!doctype html>
<html>
    <body> 
        <button onclick="publish()">Publish website</button> 
        <h3 class="prompt">Website status</h3> 
        <p class="prompt">Website not published</p>
        <script src="script.js"></script>
    </body>
</html>

//! (JavaScript)
function publish() {
    var el = document.querySelector(".prompt"); //!
    el.innerHTML = "Website published"; 
}
// button of "Publish website" (output)
// Website status ("h3")
// website not published ("p")




/*----------------------------------*/
/*----------------------------------*/
//! p.prompt
// if we want to access DIFFERENT ELEMENTS of the same class, like the "p" element of class (.prompt)
// we specify (p.prompt) inside parentheses

//! (HTML)
<!doctype html>
<html>
    <body> 
        <button onclick="publish()">Publish website</button> 
        <h3 class="prompt">Website status</h3> 
        <p class="prompt">Website not published</p>
        <script src="script.js"></script>
    </body>
</html>

//! (JavaScript)
function publish() {
    var el = document.querySelector("p.prompt"); //!
    el.innerHTML = "Website published"; 
}
// button of "Publish website" (output)
// Website status ("h3")
// website not published ("p")




/*----------------------------------*/
/*----------------------------------*/
//! TWO CLASS NAMES !!!
// we can also look fo ran element that has multiple classes
// before we can see that work, add the class nam "update" to teh second paragraph
// to access an element with two CLASSES, we add the other class right after the first 
// here //!    .prompt.update

//! (HTML)
<!doctype html>
<html>
    <body> 
        <button onclick="publish()">Publish website</button> 
        <p class="prompt">Website status</p> 
        <p class="prompt update">Website not published</p> //! TWO CLASS NAMES !!!
        <script src="script.js"></script>
    </body>
</html>

//! (JavaScript)
function publish() {
    var el = document.querySelector(".prompt.update"); //!
    el.innerHTML = "Website published"; 
}
// button of "Publish website" (output)
// Website status ("h3")
// website not published ("p")




/*----------------------------------*/
/*----------------------------------*/
// querySelector() is very powerful
// it can be used to access any SPECIFIC ELEMENT on a webpage

//! (HTML)
<!doctype html>
<html>
    <body> 
        <button onclick="refresh()">Refresh</button> 
        <h2 class="order title">Ykea order update</h2> 
        <p class="order info">Delivery request received</p> 
        <script src="script.js"></script>
    </body>
</html>

//! (JavaScript)
function refresh() {
    var el = document.querySelector("p.order.info"); //!
    el.innerHTML = "Your order has been shipped. Happy self-assembly!"; 
}
// button of "Publish website" (output)
// Ykea order update ("h2")
// Delivery request received ("p")




/*----------------------------------*/
/*----------------------------------*/
// which "p" element does the querySelector() METHOD access?
//! the third "p" element       ATTENTION à la réponse

//! (HTML)
<!doctype html>
<html>
    <body> 
        <p class="classOne">First paragraph</p> 
        <p class="classTwo">Second paragraph</p> 
        <p class="classOne classTwo">Third paragraph</p> 
        <script src="script.js"></script>
    </body>
</html>

//! (JavaScript)
var el = document.querySelector(".classTwo.classOne"); //!
el.innerHTML = "Paragraph changed!"; 

// First paragraph
// Second paragraph
// Paragraph changed!




/*----------------------------------*/
/*----------------------------------*/
// code (.tech) SELECTOR to access the right element

//! (HTML)
<!doctype html>
<html>
    <body> 
        <button onclick="refresh()">Refresh</button> 
        <h3 class="update sports">Olympic News</h3> 
        <h3 class="update tech">Y-Phone Released</h3> 
        <script src="script.js"></script>
    </body>
</html>

//! (JavaScript)
function refresh() {
    var el = document.querySelector(".update.tech"); //!
    el.innerHTML = "Y-Phone SOLD OUT!"; 
}
// button of "Publish website" (output)
// Olympic News
// Y-Phone Released




/*----------------------------------*/
/*----------------------------------*/
// code (p.copyright) to change the text of the last paragraph

//! (HTML)
<!doctype html>
<html>
    <body> 
        <p>CMM News, NY</p> 
        <p class="copyright">Copyright 2020</p> 
        <script src="script.js"></script>
    </body>
</html>

//! (JavaScript)
var el = document.querySelector("p.copyright"); //!
el.innerHTML = "Copyright 2021"; //!

// CMM News, NY
// Copyright 2021




/*----------------------------------*/
/*----------------------------------*/
// select th eparagraph element by coding (p.tech)

//! (HTML)
<!doctype html>
<html>
    <body> 
        <h3 class="update tech">New Y-Phone</h3>
        <button onclick="seeMore()">See More</button> 
        <p class="update tech">Hours after the last Y-Phone release...</p>
        <script src="script.js"></script>
    </body>
</html>

//! (JavaScript)
function seeMore() {
    var el = document.querySelector("p.tech"); //!
    el.innerHTML = "Hours after the last Y-Phone release, the company announced a brand new version!";
}

// New Y-Phone ("h3")
// See More (button)
// Hours after the last Y-Phone release... ("p")




/*----------------------------------*/
/*----------------------------------*/
// select th eparagraph element by coding (p.tech)

//! (HTML)
<!doctype html>
<html>
    <body> 
        <h3 class="update tech">New Y-Phone</h3>
        <button onclick="seeMore()">See More</button> 
        <p class="update tech">Hours after the last Y-Phone release...</p>
        <script src="script.js"></script>
    </body>
</html>

//! (JavaScript)
function seeMore() {
    var el = document.querySelector("p.update.tech"); //!    ATTENTION !!!!
    el.innerHTML = "Hours after the last Y-Phone release, the company announced a brand new version!";
}

// New Y-Phone ("h3")
// See More (button)
// Hours after the last Y-Phone release... ("p")
//! the last two blocks, don't see the differences..... à vérifier
