/*Create a webpage that displays a counter and allows the user to increment 
and decrement the counter using buttons.

Here are the steps to follow:

Create a basic HTML file with a header section and a main content area.
Use CSS to style the header and main content area with appropriate colors and fonts.

Create a heading within the header section that displays the current value
 of the counter. Set the initial value of the counter to 0.

Create two buttons within the main content area: one to increment the 
counter and one to decrement the counter.

Use JavaScript to access the counter heading and the two buttons.

Use variables in JavaScript to store the current value of the counter.
Use functions in JavaScript to handle the button click events and update 
the counter value accordingly.
When the user clicks the increment button, use JavaScript to increase 
the counter value by 1 and update the counter heading with the new value.

When the user clicks the decrement button, use JavaScript to decrease 
the counter value by 1 and update the counter heading with the new value.

Test the page to make sure that the counter value is updated correctly 
when the buttons are clicked.
Hint :
Use of Variables are needed, You can add and subtract from the value from there. Try to use the functions to do so.

A Bonus ,
You could add more advanced functionality to the page, such as the ability to reset the counter to its initial value, or the ability to set a maximum and minimum value for the counter
*/

let count = 0;

document.getElementById("increase").onclick = function () {
  count += 1;
  document.getElementById("countlbl").innerHTML = count;
};
document.getElementById("decrease").onclick = function () {
  count -= 1;
  document.getElementById("countlbl").innerHTML = count;
};
document.getElementById("reset").onclick = function () {
  count = 0;
  document.getElementById("countlbl").innerHTML = count;
};
