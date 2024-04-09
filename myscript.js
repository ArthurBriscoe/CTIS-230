function onChange() {  
    newtext = myinput.value;  
    otheritem.innerHTML = newtext;  
}
// Get the element with the id "firsttest"
myitem = document.getElementById("firsttest");

// Add a click event listener to myitem
myitem.addEventListener("click", onClick);

// Define the onClick function
function onClick() {
  // Change the color of myitem to green
  myitem.style.color = "green";  
  // Change the font size of myitem to 20px
  myitem.style.fontSize = "20px";  
}

// Add a mouseout event listener to myitem
myitem.addEventListener("mouseout", onMouseOut);

// Define the onMouseOut function
function onMouseOut() {
  // Reset the color of myitem to its original value
  myitem.style.color = "";  
  // Reset the font size of myitem to its original value
  myitem.style.fontSize = "";  
}

// Get the button element with the id "thebutton"
thebutton = document.getElementById("thebutton");

// Get the element with the id "buttontest"
otheritem = document.getElementById("buttontest");

// Add a click event listener to thebutton
thebutton.addEventListener("click", onButtonClick);

// Define the onButtonClick function
function onButtonClick() {
  // Change the color of otheritem to red
  otheritem.style.color = "red";  
}

// Get the text input element with the id "myinput"
textentry = document.getElementById("myinput");

// Add a change event listener to textentry
textentry.addEventListener("change", onTextChange);

// Define the onTextChange function
function onTextChange() {
  // Get the new text from the text input field
  newtext = textentry.value;  
  // Change the text of otheritem to the new text
  otheritem.innerHTML = newtext;  
}
// Get the button element with the id "thesecondbutton"
secondbutton = document.getElementById("thesecondbutton");

// Get the element with the id "secondtest"
seconditem = document.getElementById("secondtest");

// Add a click event listener to secondbutton
secondbutton.addEventListener("click", onSecondButtonClick);

// Define the onSecondButtonClick function
function onSecondButtonClick() {
  // Change the font size of seconditem to 30px
  seconditem.style.fontSize = "30px";  
}
const myButton = document.getElementById("myButton");
myButton.addEventListener("click", () => {
  window.location.href = "page3.html";
});