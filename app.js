// Highlight current nav link
const links = document.querySelectorAll("nav a");
links.forEach(link => {
  if (link.href === window.location.href) {
    link.style.color = "#FF00F5";
    link.style.boxShadow = "0 0 8px #00F0FF, 0 0 12px #FF00F5";
  }
});

// Optional: simple button click feedback
const buttons = document.querySelectorAll("button");
buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    btn.style.transform = "scale(0.95)";
    setTimeout(() => btn.style.transform = "scale(1)", 150);
  });
});

console.log("VisualHand app.js loaded");
