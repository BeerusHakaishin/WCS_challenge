
/*             
        Script.js 
             By
        Beerus Hakaishin
      For
        Wild Code School Challenge 
*/


'use strict';   // Strict mode of JavaScript 

/*********************************************** royal-assets.html ***********************************************/

/* ****************************************** VARIABLS ****************************************** */

// declaration of the 3 necessary variables (index, event and total)
var index;
var event;
var total;




/* ***************************************** FUNCTIONS ***************************************** */

// declaration of the onClickListItem function
function onClickListItem()
{
    // declaration of the selectedEvents variable
   var selectedEvents;

    // use the classList API on the element that triggered the event (this) --> this.classList
    // and toggle the "selected" class
    // Learn on 3WA "photos_selector TP" i don't understand all about this point.
  this.classList.toggle('selected');

    // Search for all selected a tags (.selected_event a.selected).
    
    selectedEvents = document.querySelectorAll('.selected_event a.selected');
    
    // change the text content in the em tag (this tag has already been targeted by the total variable) 
    // to write the number of selected photos
    total.textContent= selectedEvents.length;
    
    
}

/* ************************************** PRINCIPAL CODE *************************************** */


// store all the <a> tags in the event variable
event = document.querySelectorAll('.selected_event a');
// store in the total variable the <em> tag
total  = document.querySelector('#total em');

// loop over the event list with a for loop (remember to use the index variable)
for(index = 0; index < event.length; index++)
{
    // add an event listener (click) on each element a to call the onClickListItem function
    event[index].addEventListener('click', onClickListItem);
}
