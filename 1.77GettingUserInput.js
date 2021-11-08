// 2021.10.29 FROM (MM) 
/*----------------------------------*/
// DYNAMIC WEBPAGES
// GETTING USER INPUT
// websites come to life with USER INPUT
// when visitors add comments, send messages, or share posts with their friends
// we get user input with the "INPUT" element
<!doctype html>
<html>
    <body> 
        <h1>Sign up</h1>
        <input> //!
    </body>
</html>



/*----------------------------------*/
// for text, we set the "TYPE" ATTRIBUTE to "text" to make the INPUT element a TEXT FIELD
<!doctype html>
<html>
    <body> 
        <h1>Sign up</h1>
        <input type="text"> //!
    </body>
</html>



/*----------------------------------*/
//! TEXTAREA = TEXT AREA (zone de texte)
// 'input' elements can only be text fields with a single line
// to create a multiple-line TEXT AREA, we use the "textarea" element
// create a text area using the <textarea></textarea> tags
<!doctype html>
<html>
    <body> 
        <h1>Leave a Review</h1>
        <textarea></textarea> //!
    </body>
</html>



/*----------------------------------*/
// to control the size of the text area, we use the "rows"attribute to set the ROWS of text 
// and we use COLS attribute to set the number of characters
// set the "rows" attribute to "3" and "cols" to "15"
<!doctype html>
<html>
    <body> 
        <h1>Leave a Review</h1>
        <textarea rows="3" cols="15"></textarea> //!
    </body>
</html>



/*----------------------------------*/
// why might a developer set the "id" attribute of an "input" element?
// => to get user input using JavaScript
<!doctype html>
<html>
    <body> 
        <input type="text" placeholder="Your email" id="email"> //! 
    </body>
</html>



/*----------------------------------*/
// display the "input" elements with "placeholder="City" below the other "input" element, use <br>
// => to get user input using JavaScript
<!doctype html>
<html>
    <body> 
        <h3>Billing Address</h3>
        <input type="text" placeholder="Street"> 
        <br>  //!
        <input type="text" placeholder="City"> //!
    </body>
</html>



/*----------------------------------*/
// set the "type" attributes to "text" and the "placeholder" attribute to "Credit card name"
<!doctype html>
<html>
    <body> 
        <h3>Checkout</h3>
        <input type="text" placeholder="Credit card name"> 
        <br> 
        <input type="text" placeholder="Billing address">
    </body>
</html>



/*----------------------------------*/
// define a placeholder for the text area by coding "placeholder"
<!doctype html>
<html>
    <body> 
        <img src="https://mimo.app/r/profile.png" height="45">
        <textarea placeholder="What's on your mind?" rows="3" cols="18"></textarea>
    </body>
</html>
