function toggleMenu() {
    const sidebar = document.getElementById("sidebar");
    const content = document.querySelector(".content");

    sidebar.classList.toggle("active");

    if (sidebar.classList.contains("active")) {
        content.style.marginLeft = "260px";
    } else {
        content.style.marginLeft = "0px";
    }
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