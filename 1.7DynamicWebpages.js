// 2021.10.27 FROM (MM) 
/*----------------------------------*/
// DYNAMIC WEBPAGES
// INTERACTING WITH WEBPAGES
// to add JavaScript code to a webpage, we start with the <script></script> tags
// the "script" element is the last element before the closing </body> tag in the HTMK structure
// (var username = "LEE";) JavaScript like this only works if placed inside the script element

<!doctype html>
<html>
    <body>
        <script>
            var username = "LEE";
            var tweets = 50;
            console.log(username);
        </script>
    </body>
</html>



/*----------------------------------*/
// all ID values are unique
// IDs are there to identify HTML elements and help us interact with them using JavaScript
// IDs are unique, so that they can be used to access a specific element
//! IMPROVE your way out of any situation 
<!doctype html>
<html>
    <body>
        <h3 id="intro">Tweeter></h3>
        <p ="tweet">
            <em id="question">What's up?</em>
        </p>
        <p id="messages">New Messages</p>
    </body>
</html>



/*----------------------------------*/
//?  document.getElementById()
//! this instruction retrieves the tags and the text of an HTML element
// we need the "document.getElementById()" instruction to interact with an HTML element
// inside "document.getElementById()" we place the ID of the element we want to interact with, like "messages"
//! document.getElementById("messages"); => we use this instruction to access an element
// to access the other "p" element, we use the same instruction, but with the "tweet" ID
<!doctype html>
<html>
    <body>
        <h3 id="intro">Tweeter></h3>
        <p ="tweet">
            <em id="question">What's on your mind?</em>
        </p>
        <p id="messages">New Messages</p>
        <script>
            document.getElementById("messages"); //!
            document.getElementById("tweet"); //!
        </script>
    </body>
</html>



/*----------------------------------*/
//?  .innerHTML
// and to make changes to the text between the tags, to access the text of an element
// we need to retrieve it with ".innerHTML"
// retrieve = [get, bring, find, extract]
<!doctype html>
<html>
    <body>
        <h3 id="intro">Tweeter></h3>
        <p ="tweet">
            <em id="question">What's on your mind?</em>
        </p>
        <p id="messages">New Messages</p>
        <script>
            document.getElementById("messages").innerHTML; //!
            document.getElementById("tweet");
        </script>
    </body>
</html>



/*----------------------------------*/
// if document.getElementById() retrieves the tags and the text of an element, adding .innerHTML gives us its text
<!doctype html>
<html>
    <body>
        <h3 id="platform">Tweeter></h3>
        <p id="messages">New Messages</p>
        <script>
            console.log(document.getElementById("platform").innerHTML;)  //!
        </script>
    </body>
</html>



/*----------------------------------*/
// after we retrieve it, we can update it by using the "=" sign followed by a new value like "No Messages"
<!doctype html>
<html>
    <body>
        <h3 id="platform">Tweeter></h3>
        <p id="messages">New Messages</p>
        <script>
            document.getElementById("platform").innerHTML = "No Messages";  //!
        </script>
    </body>
</html>



/*----------------------------------*/
// what is the text of the paragraph after the script runs? 
// "First week is on us"
<!doctype html>
<html>
    <body>
        <h1>SwimFit</h1>
        <p id="trial">Try the free tiral</p>
        <script>
            document.getElementById("trial").innerHTML = "First week is on us";  //!
        </script>
    </body>
</html>



/*----------------------------------*/
// start accessing an element by typing document.getElementById() //!
<!doctype html>
<html>
    <body>
        <h3>Wired</h3>
        <p id="stories">Stories from the future</p>
        <script>
            document.getElementById() 
        </script>
    </body>
</html>



/*----------------------------------*/
// access the heading by assembling the code
<!doctype html>
<html>
    <body>
        <h1 id="rental">Retro Movie Rental</h1>
        <p id="favorite">We have your favorite oldie</p>
        <script>
            document.getElementById("rental");
        </script>
    </body>
</html>



/*----------------------------------*/
// access the first paragraph by picking the corresponding ID value
<!doctype html>
<html>
    <body>
        <h3 id="name">Soundify</h3>
        <p id="about">Music for everyone</p>
        <p id="anywhere">Listen from anywhere</p>
        <script>
            document.getElementById("about");
        </script>
    </body>
</html>



/*----------------------------------*/
// access the heading's text by typing .innerHTML
<!doctype html>
<html>
    <body>
        <h1 id="newspaper">The Springfield Shopper</h1>
        <script>
            console.log(document.getElementById("newspaper").innerHTML;
        </script>
    </body>
</html>



/*----------------------------------*/
// retrieve the paragraph's text by filling in with the correct instruction
<!doctype html>
<html>
    <body>
        <h1 id="rental">Retro Movie Rental</h1>
        <p id="favorite">We have your favorite oldie</p>
        <script>
            document.getElementById("favorite").innerHTML;
        </script>
    </body>
</html>



/*----------------------------------*/
// change the bike rental's owner by updating the heading's text
<!doctype html>
<html>
    <body>
        <h2 id="rental">Ben's Bike Rental</h2>
        <script>
            document.getElementById("favorite").innerHTML = "Ron's Bike Rental";
        </script>
    </body>
</html>
