// 2021.10.28 FROM (MM) 
/*----------------------------------*/
// DYNAMIC WEBPAGES
// USING VARIABLES IN WEBPAGES
// we can create variales like "var element" 
// and use them to store the HTML elements we access
//! VAR ELEMENT =
// now the "var element" stands for what is in    " document.getElementById("messages") "
//! so we use a VARIABLE to store the element we're accessing thru    document.getElementById()

<!doctype html>
<html>
    <body>
        <h3>Tweeter</h3>
        <p id="messages">New Messages</p>
        <script>
            var element = document.getElementById("messages"); //!
        </script>
    </body>
</html>



/*----------------------------------*/
//!  element.innerHTML
// we can access the text of the paragraph through the variable element, by using .innerHTML
<!doctype html>
<html>
    <body>
        <h3>Tweeter</h3>
        <p id="messages">New Messages</p>
        <script>
            var element = document.getElementById("messages"); 
            console.log(element.innerHTML); //!
        </script>
    </body>
</html>



/*----------------------------------*/
//!  = "No Messages"
// we can access the text of the paragraph through the variable element, by using .innerHTML
<!doctype html>
<html>
    <body>
        <h3>Tweeter</h3>
        <p id="messages">New Messages</p>
        <script>
            var element = document.getElementById("messages"); 
            element.innerHTML = "No Messages"; //!
        </script>
    </body>
</html>



/*----------------------------------*/
//!  VAR TYPE
// what element does the "type" VARIABLE contain?
// the "h3" element
<!doctype html>
<html>
    <body>
        <h3>New York Times</h3>
        <p id="subscription">Basic Subscription</p>
        <script>
            var type = document.getElementById("subscription"); //!
        </script>
    </body>
</html>



/*----------------------------------*/
// what does this code display in the console?
//!  SoundCloud
<!doctype html>
<html>
    <body>
        <h2 id="platform">SoundCloud</h2>
        <script>
            var name = document.getElementById("platform"); 
            console.log(name.innerHTML);
        </script>
    </body>
</html>



/*----------------------------------*/ //!   ATTENTION !!!
/*----------------------------------*/
// what's the text of the "h2" element when the webpage displays?
//!  "Turntable Tracks"
<!doctype html>
<html>
    <body>
        <h2 id="title">SThe Turntable</h2>
        <p>Looking for those hard-to-find vinyls?</p>
        <script>
            var title = document.getElementById("title"); 
            title.innerHTML = "Turntable Tracks"; //! THIS TITLE WILL BE DISPLAYED
        </script>
    </body>
</html>



/*----------------------------------*/
// create a VARIABLE to store an element by typing "var priceList"
<!doctype html>
<html>
    <body>
        <h2>Museum Tickets</h2>
        <ul id="prices">
            <li>Adult</li>
            <li>Child</li>
            <li>Student</li>
        </ul>
        <script>
            var priceList;
        </script>
    </body>
</html>



/*----------------------------------*/
// save the heading into the VARIABLE by assembling the code
<!doctype html>
<html>
    <body>
        <h2 id="reviews">Rotten Tomatoes</h2>
        <script>
            var title = document.getElementById("reviews");
        </script>
    </body>
</html>



/*----------------------------------*/
//!  lyrics.innerHTML
// display the paragraph's text by assembling the code inside the display statement
<!doctype html>
<html>
    <body>
        <h3>60s Lyrics</h3>
        <p id="lyrics">Please allow me to introduce myself<br>
        I'm a man of wealth and taste
        </p>
        <script>
            var lyrics = document.getElementById("lyrics"); 
            console.log(lyrics.innerHTML);
        </script>
    </body>
</html>



/*----------------------------------*/   //! ATTENTION   !!!!
// update the shop's name using the "title" VARIABLE and the  .innerHTML instruction
//!    title.innerHTML = "Ron's Bike Rental";
<!doctype html>
<html>
    <body>
        <h2 id="rental">Ben's Bike Rental</h2>
        <script>
            var title = document.getElementById("rental");
            title.innerHTML = "Ron's Bike Rental"; //!
        </script>
    </body>
</html>
