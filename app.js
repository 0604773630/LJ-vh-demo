// Placeholder for future JS logic
console.log("VisualHand app.js loaded");

// Example: simple navigation highlight
const links = document.querySelectorAll("nav a");
links.forEach(link => {
  if (link.href === window.location.href) {
    link.style.color = "#fff";
  }
});
