function toggleMenu() {
    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("overlay");
    const content = document.querySelector(".content");

    sidebar.classList.toggle("active");
    overlay.classList.toggle("active");

    // SOLO mueve contenido en escritorio
    if (window.innerWidth > 768) {
        content.style.marginLeft = sidebar.classList.contains("active") ? "260px" : "0px";
    }
}

function showSection(id) {
    document.querySelectorAll(".section").forEach(sec => {
        sec.classList.remove("active");
    });

    document.getElementById(id).classList.add("active");

    // cerrar menú automáticamente
    document.getElementById("sidebar").classList.remove("active");
    document.getElementById("overlay").classList.remove("active");
}

/* ===== GRÁFICAS ===== */

new Chart(document.getElementById("inversionChart"), {
    type: 'pie',
    data: {
        labels: ['Infraestructura', 'Equipo', 'Capital'],
        datasets: [{
            data: [4927000, 122000, 521800]
        }]
    }
});

new Chart(document.getElementById("costosChart"), {
    type: 'bar',
    data: {
        labels: ['Fijos', 'Variables', 'Ventas', 'Utilidad'],
        datasets: [{
            data: [221900, 39000, 486850, 225950]
        }]
    }
});

new Chart(document.getElementById("utilidadChart"), {
    type: 'line',
    data: {
        labels: ['Mes1','Mes2','Mes3','Mes4'],
        datasets: [{
            data: [225950,451900,677850,903800]
        }]
    }
});