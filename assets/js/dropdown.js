document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded and parsed");
  document.querySelectorAll(".dropbtn").forEach((button) => {
    button.addEventListener("click", (e) => {
      console.log("Dropdown button clicked");
      e.preventDefault(); 
      const dropdownContent = button.nextElementSibling;
      dropdownContent.classList.toggle("show");
    });
  });

  document.addEventListener("click", (e) => {
    if (!e.target.matches(".dropbtn")) {
      document.querySelectorAll(".dropdown-content").forEach((dropdown) => {
        dropdown.classList.remove("show");
      });
    }
  });
});
