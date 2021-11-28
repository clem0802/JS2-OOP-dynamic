// 2021.10.28 FROM (MM) 
/*----------------------------------*/
// DYNAMIC WEBPAGES
// NESTING ELEMENTS
// now that we know how to create elements using JavaScript, we can learn how to nest and display them on a webpage
// when nesting an element like the "p" element inside the "body" element
// "body" becomes the parent of "p" and "p" becomes the child of "body"
... 
<body id="parent">
    <p id="child"></p>
</body>
...



/*----------------------------------*/
// in the HTML code, set the "body" element's ID with  id="parent"
// so we can nest a new element inside of it
// we should create first the ID of the parent element
<!doctype html>
<html>
    <body id="parent"> //!
        <h2>New Messages</h2> 
        <script>
            var paragraph = document.createElement("p"); 
            paragraph.innerHTML = "Meg: movie later?";
        </script>
    </body>
</html>



/*----------------------------------*/
// inside the "script", create a VARIABLE to store the "body" element using   "var bodyElement"
// good idea to store the parent element in a vARIABLE when accessing it
// this is to avoid rewriting the instruction when we need the parent
<!doctype html>
<html>
    <body id="parent"> 
        <h2>New Messages</h2> 
        <script>
            var bodyElement  //!
            var paragraph = document.createElement("p"); 
            paragraph.innerHTML = "Meg: movie later?";
        </script>
    </body>
</html>



/*----------------------------------*/
// then access the "body" element using //!   document.getElementById("parent")
// we use   document.getElementById()    instruction to access a parent element after setting its ID
<!doctype html>
<html>
    <body id="parent"> 
        <h2>New Messages</h2> 
        <script>
            var bodyElement = document.getElementById("parent"); //!
            var paragraph = document.createElement("p"); 
            paragraph.innerHTML = "Meg: movie later?";
        </script>
    </body>
</html>



/*----------------------------------*/
// to nest an element inside the "bodyElement", we use //!   bodyElement.appendChild()
// we use   .appendChild()   to add a child element inside the parent element
<!doctype html>
<html>
    <body id="parent"> 
        <h2>New Messages</h2> 
        <script>
            var bodyElement = document.getElementById("parent");
            var paragraph = document.createElement("p"); 
            paragraph.innerHTML = "Meg: movie later?";
            bodyElement.appendChild(); //!
        </script>
    </body>
</html>



/*----------------------------------*/
// for example, we can nest "paragraph" inside "bodyElement" 
//! by placing the "paragraph" VARIABLE between the parentheses
<!doctype html>
<html>
    <body id="parent"> 
        <h2>New Messages</h2> 
        <script>
            var bodyElement = document.getElementById("parent");
            var paragraph = document.createElement("p"); 
            paragraph.innerHTML = "Meg: movie later?";
            bodyElement.appendChild(praragraph); //!
        </script>
    </body>
</html>



/*----------------------------------*/
// what happens when the code inside the "script" runs? 
//! the text "heading" displays inside the "body"
<!doctype html>
<html>
    <body id="parent"> 
        <script>
            var body = document.getElementById("parent");
            var heading = document.createElement("h2"); //!
            heading.innerHTML = "Scoop!"; //!
            body.appendChild(heading); //!
        </script>
    </body>
</html>



/*----------------------------------*/
// set the parent element's ID to "parent"
// set the child element's ID to "child"
<!doctype html>
<html>
    <body id="parent"> 
        <h3 id="child"></h3>
    </body>
</html>



/*----------------------------------*/
//! create a "bodyElement" VARIABLE that stores the element with the "parent" ID
<!doctype html>
<html>
    <body id="parent"> 
        <script>
            var bodyElement =  //!  ATTENTION !!!
            document.getElementById("parent");
        </script>
    </body>
</html>



/*----------------------------------*/
// ! ACCESS the "LI" ELEME?T
// access the "li" element's parent
<!doctype html>
<html>
    <body id="main"> 
        <ul id="reminders">
            <li>Buy milk</li>
        </ul>
        <script>
            document.getElementById("reminders");
        </script>
    </body>
</html>



/*----------------------------------*/
// add an element inside the "body" element by coding
// bodyElement.appendChild()
<!doctype html>
<html>
    <body id="main"> 
        <script>
            var bodyElement = document.getElementById("parent");
            bodyElement.appendChild();
        </script>
    </body>
</html>



/*----------------------------------*/
// code the value to add an "h1" element inside the "body" element //! ATTENTION !!!
<!doctype html>
<html>
    <body id="main"> 
        <script>
            var bodyElement = document.getElementById("parent");
            var heading = document.createElement("h1");
            bodyElement.appendChild(heading); //!  BE CAREFUL !!!!
        </script>
    </body>
</html>
