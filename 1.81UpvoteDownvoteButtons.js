// 2021.12.19 FROM (MM) 
/*----------------------------------*/
// DYNAMIC WEBPAGES
// GUPVOTE-DOWNVOTE FEATURE



/*----------------------------------*/ UPVOTE => (ajouter le COMPTEUR)
/*----------------------------------*/ VERY USEFUL !!
// (HTML)
<!doctype html>
<html>
    <head>
        <link rel="stylesheet" href="style.css">
        <script src="script.js"></script>
    </head>
    <body> 
        <h1>Cutey of the Year</h1>
        <img id="profilePic" src="https://mimo.app/r/profile.png">
        <p><em>Oui Oui Oui</em></p>
        <p id="votes">3 Votes</p>
        <button id="upvote" onclick="upvote()">Upvote</button>
        <button id="downvote" onclick="downvote()">Downvote</button>
        <script src="script.js"></script>
    </body>
</html>

/*-----------------------------------*/
// (JavaScript)
var counter = 3; 
function upvote(){
    counter++;
    document.getElementById("votes").innerText = counter + " Votes"; //
}
function downvote(){
    counter--;
    document.getElementById("votes").innerText = counter + " Votes";
}
// how to make the "votes" paragraph display "counter" followed by "votes"?
// by setting ".innerHTML" to => counter + " votes"

/*-----------------------------------*/
// (CSS)
body {
    text-align: center;
}
#votes {
    font-weight: bold;
    font-size: 25px;
}
button {
    margin: 5px;
    border-radius: 10px;
    border: none;
    color: white;
    padding: 10px;
    font-size: 16px;
    font-weight: bold;
}
#upvote {
    background-color: green;
}
#downvote {
    background-color: red;
}
img {
    border-radius: 10px;
}


