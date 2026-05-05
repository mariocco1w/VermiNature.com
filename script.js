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
function toggleMenu() {
    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("overlay");
    const content = document.querySelector(".content");

    sidebar.classList.toggle("active");
    overlay.classList.toggle("active");

    if (window.innerWidth > 768) {
        content.style.marginLeft = sidebar.classList.contains("active") ? "260px" : "0px";
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

// ===== GRÁFICA 1: INVERSIÓN =====
new Chart(document.getElementById("inversionChart"), {
    type: 'pie',
    data: {
        labels: ['Infraestructura', 'Equipo', 'Capital de trabajo'],
        datasets: [{
            data: [4927000, 122000, 521800],
        }]
    }
});

// ===== GRÁFICA 2: COSTOS VS INGRESOS =====
new Chart(document.getElementById("costosChart"), {
    type: 'bar',
    data: {
        labels: ['Costos Fijos', 'Costos Variables', 'Ventas', 'Utilidad'],
        datasets: [{
            label: 'Quetzales (Q)',
            data: [221900, 39000, 486850, 225950],
        }]
    }
});

// ===== GRÁFICA 3: UTILIDAD (simple proyección) =====
new Chart(document.getElementById("utilidadChart"), {
    type: 'line',
    data: {
        labels: ['Mes 1', 'Mes 2', 'Mes 3', 'Mes 4', 'Mes 5'],
        datasets: [{
            label: 'Utilidad acumulada',
            data: [225950, 451900, 677850, 903800, 1129750],
        }]
    }
});