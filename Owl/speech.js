const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.lang = 'en-US'; 

recognition.interimResults = true;
recognition.continuous = true;

// Replace "owl" with emoji
recognition.onresult = function(event) {
    // Define expression to find "owl" 
    const re = /owl/gi;
    // Get the latest transcript from the recognition results
    const str = event.results[event.results.length - 1][0].transcript;
    // Replace all "owl" with the owl emoji
    const newStr = str.replace(re, "🦉");
    // Display the modified text with emojis on the screen
    textDisplay.textContent = newStr;
};

recognition.onerror = function(event) {
    console.error('Speech recognition error:', event.error);
};

recognition.start();