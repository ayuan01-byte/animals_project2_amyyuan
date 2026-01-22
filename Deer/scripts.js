// Create a div element to display speech text with custom styling 
const textDisplay = document.createElement("div");
textDisplay.style.position = "absolute";
textDisplay.style.top = "90px";
textDisplay.style.left = "50px";
textDisplay.style.fontFamily = "'Grape Nuts', cursive";
textDisplay.style.color = "rgb(250, 179, 92)";
textDisplay.style.fontSize = "50px";
textDisplay.style.whiteSpace = "nowrap";
document.body.appendChild(textDisplay);

// Add mouseover event listener to the text display element
textDisplay.addEventListener("mouseover", (event) => {
  // Store the current text content in a variable before changing it
  const oldText = event.target.textContent;
  // Change the displayed text to show the deer is startled
  event.target.textContent = "(startled, then runs off)";
  // Rotate the text by 20 degrees to show panic
  event.target.style.transform = "rotate(20deg)";
  
  // Set a timer to reset the text and rotation after a delay
  setTimeout(() => {
    // Remove the rotation transform to return text to normal position
    event.target.style.transform = "";
    // Restore the original text that was saved earlier
    event.target.textContent = oldText;
  }, 1500); // Wait (1.5 seconds) before resetting
});