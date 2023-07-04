// Prevent the user from leaving the page without confirmation
window.onbeforeunload = () => "Are you sure you want to leave this page?";

// Get the editor content from localStorage if it exists
const editorContent = localStorage.getItem("editorContent");
if (editorContent) {
  textarea.innerHTML = editorContent;
}

// Create a new FroalaEditor instance with some options
const editor = new FroalaEditor("#textarea", {
  // Save the editor content to localStorage every 2.5 seconds
  saveInterval: 2500,
  // Use the same key as before to store the content
  saveKey: "editorContent",
  // Define some event handlers for saving
  events: {
    // Before saving, log a message to the console
    "save.before": () => console.log("Saving to localStorage..."),
    // After saving, log another message to the console
    "save.after": () => console.log("Saved to localStorage."),
    // If there is an error saving, log an error message to the console
    "save.error": () => console.log("Error saving to localStorage.")
  }
}, () => {
  // After the editor is initialized, add some more event handlers
  editor.events.on("save.before", () => {
    // Save the content to localStorage using the same key as before
    localStorage.setItem(editor.opts.saveKey, editor.html.get());
    return false;
  });
  editor.events.on("initialized", () => {
    // Get the content from localStorage using the same key as before
    const e = localStorage.getItem(editor.opts.saveKey);
    // If there is content, set it to the editor
    if (e) {
      editor.html.set(e);
    }
  });
});
