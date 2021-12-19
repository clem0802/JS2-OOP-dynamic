// 2021.12.(18-19) FROM (MM) 
/*----------------------------------*/
// DYNAMIC WEBPAGES
// GETTING USER INPUT


/*----------------------------------*/ (USEFUL !!)
// knowing how to get user input, we can use it to update a webpage
// assemble the code so that the value of "username" appears on the webpage when clicking on the Register button
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
    var username = document.getElementById("usernameInput").value; //
    document.getElementById("message").innerHTML = username + ", you're signed up!"; // => Isaac, you're signed up!
}



    
/*----------------------------------*/ (USEFUL !!)
// display the review in the paragraph when users click on the "ADD REVIEW" button
//! (HTML)
<!doctype html>
<html>
    <body> 
        <img src="https://mimo.app/r/amazon.png">
        <h1>Customer Reviews</h1>
        <input id="nameInput" type="text" placeholder="Your name">
        <br>
        <br>
        <textarea id="reviewText" rows="3" cols="18" placeholder="Write your review here"></textarea>
        <br>
        <br>
        <button onclick="addAReview()">ADD REVIEW</button> 
        <p id="addedReview"></p>
        <script src="script.js"></script>
    </body>
</html>
    
//! (JavaScript)
function addAReview() {
    var name = document.getElementById("nameInput").value; //
    var review = document.getElementById("reviewText").value;
    document.getElementById("addedReview").innerHTML = name + ": " + review; //
}


    
    
/*----------------------------------*/ (USEFUL !!) (img de MIGNION)
// set "tweet" to the value of the "TEXTAREA" element
//! (HTML)
<!doctype html>
<html>
    <body> 
        <img id="profilePic" src="https://mimo.app/r/profile.png" height="50">
        <br>
        <br>
        <textarea id="tweetText" rows="3" cols="18" placeholder="What's happening?"></textarea>
        <br>
        <br>
        <button onclick="tweetPost()">TWEET</button> 
        <script src="script.js"></script>
    </body>
</html>
    
//! (JavaScript)
function tweetPost() {
    var tweet = document.getElementById("tweetText").value; //
    console.log(tweet);
}
  
  
  
  
/*----------------------------------*/ (USEFUL !!) (i
//  
  
  
