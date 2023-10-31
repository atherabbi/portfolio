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
