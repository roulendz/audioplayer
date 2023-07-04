// Define a function to pause the audio temporarily
function pauseAudio() {
  // Clear any previous timer
  clearTimeout(timer);
  // Pause the audio element
  audio.pause();
  // Set a new timer to resume the audio after 0.5 seconds
  timer = setTimeout(resumeAudio, 500);
}

// Define a function to pause the audio permanently
function pauseAudioPermanent() {
  // Pause the audio element
  audio.pause();
}

// Define a function to resume the audio
function resumeAudio() {
  // Play the audio element
  audio.play();
}

// Get the audio element by its id
var audio = document.getElementById("audio");
// Get the saved time from localStorage if it exists
var savedTime = localStorage.getItem("audioTime");
// If there is a saved time, set it as the current time of the audio element
if (savedTime) {
  audio.currentTime = savedTime;
}
// Add an event listener to the audio element to update the localStorage with the current time
audio.addEventListener("timeupdate", function() {
  localStorage.setItem("audioTime", audio.currentTime);
});

// Get the textarea element by its id
var textarea = document.getElementById("textarea");
// Declare a variable for the timer
var timer;
// Declare a variable for the window object
var win = window;
// Add an event listener to the window object to pause the audio permanently when it loses focus
win.addEventListener("blur", pauseAudioPermanent);
// Add an event listener to the window object to resume the audio when it gains focus
win.addEventListener("focus", resumeAudio);
// Add an event listener to the textarea element to pause the audio temporarily when a key is pressed
textarea.addEventListener("keydown", pauseAudio);
// Add another event listener to the textarea element to pause the audio temporarily when certain keys are pressed
textarea.addEventListener("keydown", function(e) {
  // Define an array of keys that should trigger the pause function
  var keys = ["Backspace", "Alt", "Control", "Space", "Shift", "Delete"];
  // If the pressed key is in the array, call the pause function
  if (keys.includes(e.key)) {
    pauseAudio();
  }
});
