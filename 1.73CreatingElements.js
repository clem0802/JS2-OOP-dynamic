// 2021.10.28 FROM (MIMO) 
/*----------------------------------*/
// DYNAMIC WEBPAGES
// CREATING ELEMENTS
// creating new elements with JavaScript, like whehn users click the Show Messages button, makes for a user-friendly webpage
// created elements don't automatically display
// learn later how to make them show up on the webpage
//! we use a VARIABLE to store an element we create, it is to "make our code more READABLE"


/*----------------------------------*/
// now start with a VARIABLE named "paragraph" to store the element we want to create
//! VAR PARAGRAPH
<!doctype html>
<html>
    <body>
        <h2>New Messages</h2>  //! this title is displayed
        <script>
            var paragraph
        </script>
    </body>
</html>



/*----------------------------------*/
// to CREATE A NEW ELEMENT, we use
//!   document.createElement()
<!doctype html>
<html>
    <body>
        <h2>New Messages</h2> 
        <script>
            var paragraph = document.createElement(); //!
        </script>
    </body>
</html>



/*----------------------------------*/
// create a specific element by coding its name surrounded by quotes
// now code "p" to create a paragraph
<!doctype html>
<html>
    <body>
        <h2>New Messages</h2> 
        <script>
            var paragraph = document.createElement("p"); //!
        </script>
    </body>
</html>



/*----------------------------------*/
// the element stored in "paragraph" has no text so we need "paragraph.innerHTML" to change that
//!  paragraph.innerHTML; 
<!doctype html>
<html>
    <body>
        <h2>New Messages</h2> 
        <script>
            var paragraph = document.createElement("p"); 
            paragraph.innerHTML; //!
        </script>
    </body>
</html>



/*----------------------------------*/
// so set the text of the new paragraph, code an equal sign followed by a string value
//!   = "Joe: footaball?"
<!doctype html>
<html>
    <body>
        <h2>New Messages</h2> 
        <script>
            var paragraph = document.createElement("p"); 
            paragraph.innerHTML = "Joe: footaball?"; //!
        </script>
    </body>
</html>



/*----------------------------------*/
// what does the line "newElement.innerHTML" do ?
//! it accesses the created element's contents
<!doctype html>
<html>
    <body>
        <script>
            var newElement = document.createElement("p"); 
            newElement.innerHTML; //!
        </script>
    </body>
</html>



/*----------------------------------*/
// what is the text off the created "p" element? 
//!  "Hi Lisa!"
<!doctype html>
<html>
    <body>
        <script>
            var element = document.createElement("p"); 
            newElement.innerHTML = "Hi Lisa!"; //!
        </script>
    </body>
</html>



/*----------------------------------*/
//! VAR PARAGRAPH =
// store the new element in a VARIABLE by coding  "var paragraphe ="
<!doctype html>
<html>
    <body>
        <script>
            var paragraph = document.createElement("p"); //!
        </script>
    </body>
</html>



/*----------------------------------*/
// set the value needed to create a new image
<!doctype html>
<html>
    <body>
        <script>
            document.createElement("img"); //!
        </script>
    </body>
</html>



/*----------------------------------*/
// access the contents of the "h3" element
<!doctype html>
<html>
    <body>
        <script>
            var heading = document.createElement("h3");
            heading.innerHTML;
        </script>
    </body>
</html>



/*----------------------------------*/
// set the contents of the "h3" element to "Best pizza in Rome"
<!doctype html>
<html>
    <body>
        <script>
            var heading = document.createElement("h3");
            heading.innerHTML = "Best pizza in Rome";
        </script>
    </body>
</html>
