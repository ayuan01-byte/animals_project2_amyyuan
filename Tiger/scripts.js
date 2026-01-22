// Create a div element to display speech text with custom styling 
const textDisplay = document.createElement("div");
textDisplay.style.position = "absolute";
textDisplay.style.top = "90px";
textDisplay.style.left = "50px";
textDisplay.style.fontFamily = "'Rubik Glitch', sans-serif";
textDisplay.style.color = "red";
textDisplay.style.fontSize = "50px";
textDisplay.style.whiteSpace = "nowrap";
document.body.appendChild(textDisplay);

// Add mouseover event listener to the text display element
textDisplay.addEventListener("mouseover", (event) => {
  // Store the current text content in a variable before changing it
  const oldText = event.target.textContent;
  // Change the displayed text to show the tiger is alarmed
  event.target.textContent = "(alarmed by noise)";
  // Change the text color to yellow to indicate alarm state
  event.target.style.color = "yellow";
  
  // Set a timer to reset the text and color after a short delay
  setTimeout(() => {
    // Change the text color back to red
    event.target.style.color = "red";
    // Restore the original text that was saved earlier
    event.target.textContent = oldText;
  }, 500); // Wait (0.5 seconds) before resetting
});

