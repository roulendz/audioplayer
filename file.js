// This file handles the file input element and loads an audio file

// Import the audio element from audio.js module
// import { audio } from "./audio.js";
import audio from "./audio.js"

// Get the file input element by id
const fileInput = document.getElementById("fileInput");

// Add event listener for change event on file input element
fileInput.addEventListener("change", function () {
  // Get the selected file from the file input element
  let file = fileInput.files[0];

  // Check if the file type starts with "audio/"
  if (file.type.startsWith("audio/")) {
    // Create a new FileReader object
    let reader = new FileReader();

    // Add event listener for load event on reader object
    reader.addEventListener("load", function () {
      // Set the audio source to the reader result (data URL)
      audio.src = reader.result;
      // Play the audio
      audio.play();
    });

    // Read the file as a data URL
    reader.readAsDataURL(file);
  } else {
    // Alert the user to select an audio file
    alert("Please select an audio file.");
  }
});
