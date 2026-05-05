function toggleMenu() {
    document.getElementById("sidebar").classList.toggle("active");
}

function showSection(id) {
    const sections = document.querySelectorAll(".section");

    sections.forEach(section => {
        section.classList.remove("active");
    });

    document.getElementById(id).classList.add("active");

    // cerrar menú automáticamente
    document.getElementById("sidebar").classList.remove("active");
}
window.onload = () => showSection('inicio');