// 2021.10.29 FROM (MM) 
/*----------------------------------*/
// DYNAMIC WEBPAGES
// GETTING USER INPUT


/*----------------------------------*/
// .VALUE
// to access USER INPUT from an included script, we need to add   .value at the end of  document.getElementById()
// add   .value to access the user input in the text field
//! (HTML)
<!doctype html>
<html>
    <body> 
        <input id="usernameInput" type="text" placeholder="Username">
        <button onclick="register()">Register</button> 
        <p id="message"></p>
        <script src="script.js"></script>
    </body>
</html>

//! (JavaScript)
var username = document.getElementById("usernameInput").value; //!



/*----------------------------------*/
// after accessing user input, we can use it like any other value
// try running your code and registering a username to see what displays in the console
//! (HTML)
<!doctype html>
<html>
    <body> 
        <input id="usernameInput" type="text" placeholder="Username">
        <button onclick="register()">Register</button> 
        <p id="message"></p>
        <script src="script.js"></script>
    </body>
</html>

//! (JavaScript)
function register() {
    var username = document.getElementById("usernameInput").value;
    console.log(username);
}

    

    
/*----------------------------------*/
// accessing user input from a TEXTAREA element works the same way
// code   .value after accessing the TEXTAREA element
//! (HTML)
<!doctype html>
<html>
    <body> 
        <h1>Customer Reviews</h1>
        <textarea id="reviewText" rows="5" cols="18" placeholder="Write your review here"></textarea>
        <br>
        <button onclick="addReview()">Add Review</button> 
        <p id="addReview"></p>
        <script src="script.js"></script>
    </body>
</html>

//! (JavaScript)
function addReview() {
    var review = document.getElementById("reviewText").value; //!
}




/*----------------------------------*/
// why do we need a button and a function to access user input from an "input" element?
// because the element's "VALUE" changes when a user interacts with it
//! (HTML)
<!doctype html>
<html>
    <body> 
        <input id="questionInput" type="text" placeholder="Ask a question">
        <button onclick="ask()">Ask</button> 
        <script src="script.js"></script>
    </body>
</html>code   .value after accessing the TEXTAREA element
}




/*----------------------------------*/
//! "" (EMPTY STRING VALUE)
// what happens if we set an "input" element's VALUE to an empty string, "" ?
// it removes the text inside the input field and shows the "placeholder" attribute's VALUE
// if a user types nothing into an "input" element with placeholder-"Search", what wil the value of the input element be?
//! IT WILL BE ""
//! (HTML)
<!doctype html>
<html>
    <body> 
        <input id="usernameInput" type="text" placeholder="Username">
        <button onclick="register()">Register</button> 
        <script src="script.js"></script>
    </body>
</html>

//! (JavaScript)
function register() {
    document.getElementById("usernameInput").value = ""; //! 
}




/*----------------------------------*/
// what happens if we set an "input" element's VALUE to an empty string, "" ?
// it removes the text inside the input field and shows the "placeholder" attribute's VALUE
// if a user types nothing into an "input" element with placeholder-"Search", what wil the value of the input element be?
//! IT WILL BE ""
//! (HTML)
<!doctype html>
<html>
    <body> 
        <img id="profilePic" src="https://mimo.app/r/profile.png" height="45">
        <textarea id="postText" rows="3" cols="18" placeholder="What's on your mind?"></textarea>
        <br>
        <button onclick="share()">Share</button> 
        <script src="script.js"></script>
    </body>
</html>

//! (JavaScript)
function share() {
    var post = document.getElementById("postText").value; //! 
    console.log(post);
}



/*----------------------------------*/
// set the content of the paragraph to "searchWord"
// the VARIABLE that stores the value of the "input" element
//! (HTML)
<!doctype html>
<html>
    <body> 
        <input id="serachInput" type="text" placeholder="Search">
        <button onclick="search()">Search</button> 
        <p id="message"></p>
        <script src="script.js"></script>
    </body>
</html>

//! (JavaScript)
function search() {
    var searchWord = document.getElementById("searchInput").value; //! 
    document.getElementById("message").innerHTML = searchWord;
}




/*----------------------------------*/
// access the "input" element to display its value in the console when clickin gon the "Sign up" BUTTON
//! (HTML)
<!doctype html>
<html>
    <body> 
        <h1>Sign up</h1>
        <input id="emailInput" type="text" placeholder="Email">
        <button onclick="signUp()">Sign up</button> 
        <script src="script.js"></script>
    </body>
</html>

//! (JavaScript)
function signUp() {
    var email = document.getElementById("emailInput").value;
    console.log(email);
}




/*----------------------------------*/ 
// code "review" to set the content of the paragraph to "review"
// the VARIABLE that stores the value of the TEXTAREA element
//! (HTML)
<!doctype html>
<html>
    <body> 
        <h1>Customer Reviews</h1>
        <textarea id="reviewText" rows="5" cols="18" placeholder="Write your review here"></textarea>
        <br>
        <button onclick="addReview()">Add Review</button> 
        <p id="addReview"></p>
        <script src="script.js"></script>
    </body>
</html>

//! (JavaScript)
function addReview() {
    var review = document.getElementById("reviewText").value;
    var addedReview = document.getElementById("addReview");
    addedReview.innerHTML = review;
}
