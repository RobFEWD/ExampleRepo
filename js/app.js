/* 

Project Name: Cookie Monster 
Client: Cookie Monster
Author: Alex Notov | http://twitter.com/zealoushacker
Developed @ General Assembly in SF and NYC

*/
// Let's wait till the page is ready to be used
//
// To do that we may use jQuery's ready function $()
//  This is shorthand for $(document).ready()
//  jQuery listens for the DOM's document to fire its ready event
//  and then calls a function, known as a listener when the ready
//  event is fired and jQuery finds out about it
//  This is known as attaching an event listener to the document's
//  ready event with jQuery.
//
//  You may read more about it here: http://api.jquery.com/ready/
$(function() {
    // When the page is ready to be used, we need to respond to that
    // so we write an anonymous function (the listener function)
    // so that jQuery can do something  when the page is finished loading. 
    
    // keep track of which image we are showing
    var imageNumber = 1;
    $("#startSwapping").click(function() {
        // figure out which image to show
        if (imageNumber >= 4) {
            // if we are at the last image, go back to the first one
            imageNumber = 1;
        }
        else {
            // otherwise, go to the next image
            imageNumber = imageNumber + 1;
        }
        
        // Change the CSS on `body` to show the new image
        $("body").css("background-image", "url(\"images/bg" + imageNumber + ".jpg\")");
        // Update the page title, too
        $("h2").html("Peanut Butter Cookie Evangelist");
    });
  }
);