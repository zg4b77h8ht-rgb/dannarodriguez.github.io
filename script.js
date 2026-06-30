function scrollToContact() {
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
}

// mini efecto pro
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.style.background = "rgba(0,0,0,0.9)";
  } else {
    header.style.background = "rgba(0,0,0,0.6)";
  }
});
