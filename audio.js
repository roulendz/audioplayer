// This file handles the audio element and its playback state
// Get the audio element
const audio = document.getElementById("audio");

// Get the saved audio time from localStorage
let timer;
let savedTime = localStorage.getItem("audioTime");

// Set the audio current time to the saved time if it exists
if (savedTime) {
  audio.currentTime = savedTime;
}

// Add event listener for updating the audio time in localStorage
audio.addEventListener("timeupdate", function () {
  localStorage.setItem("audioTime", audio.currentTime);
});

// Define a function to pause the audio temporarily
function pauseAudio() {
  // Clear any previous timeout
  clearTimeout(timer);
  // Pause the audio
  audio.pause();
  // Set a timeout to resume the audio after 500 ms
  timer = setTimeout(resumeAudio, 500);
}

// Define a function to pause the audio permanently
function pauseAudioPermanent() {
  audio.pause();
}

// Define a function to resume the audio
function resumeAudio() {
  audio.play();
}

// Get the window object
let win = window;

// Add event listeners for window blur and focus events
win.addEventListener("blur", pauseAudioPermanent); // Pause when window loses focus
win.addEventListener("focus", resumeAudio); // Resume when window gains focus

// Get the textarea element
const textarea = document.getElementById("textarea");

// Add event listener for textarea keydown event
textarea.addEventListener("keydown", pauseAudio); // Pause when typing in textarea

// Define an array of keys that should pause the audio when pressed in textarea
let keys = ["Backspace", "Alt", "Control", "Space", "Shift", "Delete"];

// Add event listener for textarea keydown event with specific keys
textarea.addEventListener("keydown", function (e) {
  if (keys.includes(e.key)) {
    pauseAudio(); // Pause when pressing one of the keys in textarea
  }
});

// Export the audio variable as a default export
export default audio;
