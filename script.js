function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// JavaScript code to prevent auto-scrolling
document.addEventListener("DOMContentLoaded", function () {
  // Check if there is a hash in the URL
  if (window.location.hash && window.location.hash === "#no-scroll") {
    // Prevent auto-scrolling for the specific section with id "no-scroll"
    const noScrollSection = document.querySelector("#no-scroll");
    if (noScrollSection) {
      noScrollSection.scrollIntoView({ block: "start", behavior: "instant" });
    }
  }
});

// onclick copy
function copyTextToClipboard() {
  // Select the text you want to copy
  var textToCopy = document.getElementById("text-to-copy");

  // Create a range to select the text
  var range = document.createRange();
  range.selectNode(textToCopy);

  // Select the text
  window.getSelection().removeAllRanges(); // Clear previous selections
  window.getSelection().addRange(range);

  // Copy the selected text to the clipboard
  document.execCommand("copy");

  // Deselect the text
  window.getSelection().removeAllRanges();

  // Show the pop-up message
  var copyMessage = document.getElementById("copy-message");
  copyMessage.style.display = "block";

  // Hide the pop-up message after a short delay
  setTimeout(function () {
    copyMessage.style.display = "none";
  }, 2000); // Change 2000 to the desired duration in milliseconds
}
