// This file handles the Froala editor and saves its content to localStorage
// import FroalaEditor from "froala-editor"; // Import FroalaEditor module

// Get the textarea element
const textarea = document.getElementById("textarea");

// Get the editor content from localStorage
let editorContent = localStorage.getItem("editorContent");

// Set the textarea value to the editor content if it exists
if (editorContent) {
  textarea.innerHTML = editorContent;
}

// Initialize the Froala editor with options
const editor = new FroalaEditor("#textarea", {
  saveInterval: 2500, // Save every 2.5 seconds
  saveKey: "editorContent", // The key to store the editor content in localStorage
  events: {
    // Define event handlers for saving
    "save.before": function () {
      console.log("Saving to localStorage...");
    },
    "save.after": function () {
      console.log("Saved to localStorage.");
    },
    "save.error": function () {
      console.log("Error saving to localStorage.");
    },
  },
});

// Add event listeners for saving and initializing
editor.events.on("save.before", function () {
  // Save the editor content to localStorage
  localStorage.setItem(editor.opts.saveKey, editor.html.get());
  return false; // Prevent default saving behavior
});

editor.events.on("initialized", function () {
  // Get the editor content from localStorage
  let content = localStorage.getItem(editor.opts.saveKey);
  // Set the editor content if it exists
  if (content) {
    editor.html.set(content);
  }
});
