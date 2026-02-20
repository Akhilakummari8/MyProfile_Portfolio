// Dark mode (saved)
function toggleMode() {
  document.body.classList.toggle("dark");
  localStorage.setItem("mode", document.body.classList.contains("dark"));
}

if (localStorage.getItem("mode") === "true") {
  document.body.classList.add("dark");
}

// Scroll animation
const fades = document.querySelectorAll(".fade");
window.addEventListener("scroll", () => {
  fades.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("show");
    }
  });
});