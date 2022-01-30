// 2021.12.(18-19) FROM (MM) 
/*----------------------------------*/
// DYNAMIC WEBPAGES
// GETTING USER INPUT


/*----------------------------------*/
// .VALUE
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




/*----------------------------------*/ (USEFUL !!)
// knowing how to get user input, we can use it to update a webpage
// assemble the code so that the value of "username" appears on the webpage when clicking on the Register button
//! (HTML)
<!doctype html>
<html>
    <body> 
        <input id="usernameInput" type="text" placeholder="Username"> // NO CLOSING TAG !!
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
// set "tweet" to the value of the textarea element => .value
function tweetPost() {
    var tweet = document.getElementById("tweetText").value; // "tweetText" is the ID of textarea in HTML
    console.log(tweet);
}
  


/*----------------------------------*/ (USEFUL !!) (img de MIGNION) 2022.01.29
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
function share(){
    var post = document.getElementById("postText").value;
    console.log(post);
}

  
  
/*----------------------------------*/
/*----------------------------------*/
/*----------------------------------*/ (USEFUL !!) 
/*----------------------------------*// (for GROUP PROJECT) (html à vérifier sur Google) // 2022.01.29
// GET USER INPUT !!
<!doctype html>
<html>
    <body> 
        <h1>Sign Up</h1>
        <input type="text" placeholder="Your email" id="email"> 
          <br>
        <input type="text" placeholder="Street">
          <br>
        <input type="text" placeholder="City">
        <textarea rows="3" cols="15"></textarea>
        <button>Send</button>

        <script src="script.js"></script>
    </body>
</html>



/*----------------------------------*// (for GROUP PROJECT) (html à vérifier sur Google) // 2022.01.29
<!doctype html>
<html>
    <body>
       <input id="usernameInput" type="text" placeholder="Username">
       <button onclick="register()">Register</button>

       <script src="script.js"></script>
    </body>
</html>

// (JavaScript)
function register(){
  document.getElementById("usernameInput").value = ""; 
    // input value set tà an empty string ""
    // it removes the text inside the input field
    // and shows the placeholder attribute's value
}



/*----------------------------------*// (for GROUP PROJECT) (html à vérifier sur Google) // 2022.01.29
<!doctype html>
<html>
 <body>
      <h1>Customer Reviews</h1>
      <textarea id="reviewText" rows="5" cols="18" placeholder="Write your review here"></textarea>
      <br>
      <button onclick="addReview()">Add Review</button>
      <p id="addedReview"></p>
  
  <script src="script.js"></script>
 </body>
</html>

// (JavaScript)
function addReview(){
  var review = document.getElementById("reviewText").value;
  var addedReview = document.getElementById("addedReview");
  addedReview.innerHTML = review; // this sets the content of paragraph to "review" element
}
  
  
