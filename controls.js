// This file handles the playback controls for the audio element

// Import the audio element from audio.js module
// import { audio } from "./audio.js";
import audio from "./audio.js"
// Get the control elements by id
const speedUp = document.getElementById("speedUp");
const speedDown = document.getElementById("speedDown");
const skipForward = document.getElementById("skipForward");
const skipBackward = document.getElementById("skipBackward");
const speedDisplay = document.getElementById("speedDisplay");

// Define constants for speed increment and skip interval values
const speedIncrement = 0.05;
const skipInterval = 2;

// Add event listeners for click events on control elements

speedUp.addEventListener("click", function () {
  // Increase the audio playback rate by speed increment value
  audio.playbackRate += speedIncrement;
  // Update the speed display element with the new playback rate
  speedDisplay.textContent = audio.playbackRate.toFixed(2);
});

speedDown.addEventListener("click", function () {
  // Decrease the audio playback rate by speed increment value
  audio.playbackRate -= speedIncrement;
  // Update the speed display element with the new playback rate
  speedDisplay.textContent = audio.playbackRate.toFixed(2);
});

skipForward.addEventListener("click", function () {
  // Increase the audio current time by skip interval value
  audio.currentTime += skipInterval;
});

skipBackward.addEventListener("click", function () {
  // Decrease the audio current time by skip interval value
  audio.currentTime -= skipInterval;
});

// Add event listener for keydown event on document

document.addEventListener("keydown", function (e) {
  // Check if both ctrl and alt keys are pressed
  if (e.ctrlKey && e.altKey) {
    // Check which arrow key is pressed
    switch (e.key) {
      case "ArrowLeft":
        // Decrease the audio current time by skip interval value
        audio.currentTime -= skipInterval;
        break;
      case "ArrowRight":
        // Increase the audio current time by skip interval value
        audio.currentTime += skipInterval;
        break;
      case "ArrowDown":
        // Decrease the audio playback rate by speed increment value
        audio.playbackRate -= speedIncrement;
        // Update the speed display element with the new playback rate
        speedDisplay.textContent = audio.playbackRate.toFixed(2);
        break;
      case "ArrowUp":
        // Increase the audio playback rate by speed increment value
        audio.playbackRate += speedIncrement;
        // Update the speed display element with the new playback rate
        speedDisplay.textContent = audio.playbackRate.toFixed(2);
        break;
    }
  }
});
