const textDisplay = document.createElement("div");
textDisplay.className = "word";
textDisplay.style.position = "absolute";
textDisplay.style.top = "60px";
textDisplay.style.left = "50px";
textDisplay.style.fontSize = "50px";
textDisplay.style.whiteSpace = "nowrap";
document.body.appendChild(textDisplay);

// Toggle dark mode
function boxToggle() {
  document.body.classList.toggle("dark");
  document.getElementById("box").classList.toggle("active");
}

// Toggle glow effect
function glowToggle() {
  document.body.classList.toggle("glow");
}

