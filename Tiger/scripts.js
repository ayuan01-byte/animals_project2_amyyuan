const textDisplay = document.createElement("div");
textDisplay.style.position = "absolute";
textDisplay.style.top = "90px";
textDisplay.style.left = "50px";
textDisplay.style.fontFamily = "'Rubik Glitch', sans-serif";
textDisplay.style.color = "red";
textDisplay.style.fontSize = "50px";
textDisplay.style.whiteSpace = "nowrap";
document.body.appendChild(textDisplay);

textDisplay.addEventListener("mouseover", (event) => {
  const oldText = event.target.textContent;
  event.target.textContent = "(alarmed by noise)";
  event.target.style.color = "yellow";
  
  // Reset the color after a short delay
  setTimeout(() => {
    event.target.style.color = "red";
    event.target.textContent = oldText;
  }, 500);
});

