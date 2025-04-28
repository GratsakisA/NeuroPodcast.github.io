document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.getElementById("toggle-lang");

    // Get saved language from localStorage
    const savedLang = localStorage.getItem("lang");

    // Update toggle state on load
    if (savedLang === "en") {
        toggle.checked = true;
    } else if (savedLang === "gr") {
        toggle.checked = false;
    }

    // On toggle change
    toggle.addEventListener("change", function () {
        if (this.checked) {
            localStorage.setItem("lang", "en");
            location.href = "index-en.html";
        } else {
            localStorage.setItem("lang", "gr");
            location.href = "index.html";
        }
    });
});

// Highlight the active page link in gray
document.addEventListener("DOMContentLoaded", function () {
    const currentPage = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll(".nav-link");
  
    navLinks.forEach(link => {
      const linkPage = link.getAttribute("href");
      if (linkPage === currentPage) {
        link.classList.add("active-page");
      }
    });
  });
  
