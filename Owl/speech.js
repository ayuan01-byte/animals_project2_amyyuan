const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.lang = 'en-US'; 

recognition.interimResults = true;
recognition.continuous = true;

// Original: const transcript = event.results[event.results.length - 1][0].transcript;
//     textDisplay.textContent = transcript;
recognition.onresult = function(event) {
    const re = /owl/gi;
    const str = event.results[event.results.length - 1][0].transcript;
    const newStr = str.replace(re, "🦉");
    textDisplay.textContent = newStr;
};

recognition.onerror = function(event) {
    console.error('Speech recognition error:', event.error);
};

recognition.start();