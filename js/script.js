// Selektiere das Hamburger-Icon und die Navigationslinks
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

// Event Listener für das Klicken auf das Hamburger-Icon
hamburger.addEventListener("click", () => {
    // Toggle (Ein-/Ausblenden) der sichtbaren Klasse für das Menü
    navLinks.classList.toggle("active");
});
