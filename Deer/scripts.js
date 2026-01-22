const textDisplay = document.createElement("div");
textDisplay.style.position = "absolute";
textDisplay.style.top = "90px";
textDisplay.style.left = "50px";
textDisplay.style.fontFamily = "'Grape Nuts', cursive";
textDisplay.style.color = "rgb(250, 179, 92)";
textDisplay.style.fontSize = "50px";
textDisplay.style.whiteSpace = "nowrap";
document.body.appendChild(textDisplay);

textDisplay.addEventListener("mouseover", (event) => {
  const oldText = event.target.textContent;
  event.target.textContent = "(startled, then runs off)";
  event.target.style.transform = "rotate(20deg)";
  
  // Reset the transform after a short delay
  setTimeout(() => {
    event.target.style.transform = "";
    event.target.textContent = oldText;
  }, 1500);
});