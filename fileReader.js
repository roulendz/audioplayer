// Get the file input element
var fileInput = document.getElementById("fileInput");

// Get the audio element
var audio = document.getElementById("audio");

// Add an event listener for when a file is selected
fileInput.addEventListener("change", function() {
  // Get the selected file
  var file = fileInput.files[0];

  // Check if the file is an audio file
  if (file.type.startsWith("audio/")) {
    // Create a new FileReader object
    var reader = new FileReader();

    // Add an event listener for when the file is loaded
    reader.addEventListener("load", function() {
      // Set the audio source to the file data
      audio.src = reader.result;

      // Play the audio
      audio.play();
    });

    // Read the file as a data URL
    reader.readAsDataURL(file);
  } else {
    // Alert the user that the file is not an audio file
    alert("Please select an audio file.");
  }
});
