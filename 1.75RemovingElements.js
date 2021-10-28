// 2021.10.29 FROM (MIMO) 
/*----------------------------------*/
// DYNAMIC WEBPAGES
//! REMOVING ELEMENTS
// we need a new function to remove elements, when users click a remove/hide button
// set IDs to the element we want to remove and to its parent by coding   id="parent"   and   id="child"
<!doctype html>
<html>
    <body id="parent"> //!
        <h2>Facebook</h2> 
        <p id="child">Meg: Movie later?</p> //!
        <script></script>
    </body>
</html>



/*----------------------------------*/
// inside the "script" create the VARIABLES bodyElement and paragraph
// to sotre the parent and the child we want to remove
//! we create VARIABLES for the element we want to remove and its parent
// this is to make the code more readable
<html>
    <body id="parent"> 
        <h2>Facebook</h2> 
        <p id="child">Meg: Movie later?</p>
        <script>
            var bodyElement  //!
            var paragraph  //!
        </script>
    </body>
</html>



/*----------------------------------*/
// access the parent element using "document.getElementById()"  with the ID "parent"
<html>
    <body id="parent"> 
        <h2>Facebook</h2> 
        <p id="child">Meg: Movie later?</p>
        <script>
            var bodyElement = document.getElementById("parent");  //!
            var paragraph  
        </script>
    </body>
</html>



/*----------------------------------*/
// access the paragraph element using " document.getElementById("child) "
<html>
    <body id="parent"> 
        <h2>Facebook</h2> 
        <p id="child">Meg: Movie later?</p>
        <script>
            var bodyElement = document.getElementById("parent");  
            var paragraph = document.getElementById("child");  //!
        </script>
    </body>
</html>



/*----------------------------------*/
// to remove the "p" element from the "body", start by coding "bodyElement"
// followed by the "removeChild()" instruction
<html>
    <body id="parent"> 
        <h2>Facebook</h2> 
        <p id="child">Meg: Movie later?</p>
        <script>
            var bodyElement = document.getElementById("parent");  
            var paragraph = document.getElementById("child");  
            bodyElement.removeChild(); //!
        </script>
    </body>
</html>



/*----------------------------------*/
// then, remove "paragraph" from "bodyElement" by coding "paragraph" between the parentheses
//! both parent and child elements must have IDs, so as to remove one element form inside another
<html>
    <body id="parent"> 
        <h2>Facebook</h2> 
        <p id="child">Meg: Movie later?</p>
        <script>
            var bodyElement = document.getElementById("parent");  
            var paragraph = document.getElementById("child");   
            bodyElement.removeChild(paragraph); //!  NO DOUBLE-QUOTES !!!!
        </script>
    </body>
</html>



/*----------------------------------*/
// which instruction accesses the parent of the "li" element?
// document.getElementById("movieList")
<html>
    <body id="parent"> 
        <ul id="movieList">
            <li id="movie">Alien</li>
        </ul>
    </body>
</html>



/*----------------------------------*/
// be careful, body.removeChild(heading);  between parentheses should be the variable name, not ID value
<html>
    <body id="parent"> 
        <h2 id="child">With a trip to Mars</h2> 
        <script>
            var body = document.getElementById("parent");  
            var heading = document.getElementById("child");   
            body.removeChild(heading); //!
        </script>
    </body>
</html>



/*----------------------------------*/
// access the parent of the "li" element using "document.getElementById()" with the ID "list"
<html>
    <body id="main"> 
        <ul id="list">
            <li>1 cup of flour</li>
        </ul>
        <script>
            var parent = document.getElementById("list"); //!
        </script>
    </body>
</html>



/*----------------------------------*/
// access the second "li" element using "document.getElementById()" with the ID "sugar"
<html>
    <body id="main"> 
        <ul id="list">
            <li id="flour">flour</li>
            <li id="sugar">sugar</li>
        </ul>
        <script>
            var parent = document.getElementById("list");
            var ingredient = document.getElementById("sugar"); //! ACCESS a "li" element
        </script>
    </body>
</html>



/*----------------------------------*/
/*----------------------------------*/
// remove flour from the list, by coding the corresponding //!  VARIABLE NAME
<html>
    <body id="main"> 
        <ul id="list">
            <li id="flour">flour</li>
            <li id="sugar">sugar</li>
        </ul>
        <script>
            var list = document.getElementById("list");
            var ingredient1 = document.getElementById("flour"); 
            var ingredient2 = document.getElementById("sugar"); 
            list.removeChild(ingredient1); //!
        </script>
    </body>
</html>
