document.addEventListener("DOMContentLoaded", () => {
  // Set active class on navigation links
  const path = window.location.pathname;
  const pageName = path.split("/").pop();

  const navLinks = document.querySelectorAll(".nav-links a");
  navLinks.forEach(link => {
    const href = link.getAttribute("href");
    if (pageName === href || (pageName === "" && href === "index.html")) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });

  // Basic scroll effects
  const header = document.querySelector("header");
  if (header) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        header.style.background = "rgba(11, 15, 25, 0.95)";
        header.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.3)";
      } else {
        header.style.background = "rgba(11, 15, 25, 0.8)";
        header.style.boxShadow = "none";
      }
    });
  }
});
