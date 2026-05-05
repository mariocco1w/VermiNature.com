function toggleMenu() {
    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("overlay");

    sidebar.classList.toggle("active");
    overlay.classList.toggle("active");

    updateContentLayout();
}

function updateContentLayout() {
    const sidebar = document.getElementById("sidebar");
    const content = document.querySelector(".content");

    // SOLO mueve contenido en escritorio (ancho > 768px)
    if (window.innerWidth > 768) {
        content.style.marginLeft = sidebar.classList.contains("active") ? "260px" : "0px";
    } else {
        content.style.marginLeft = "0px";
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

    // Asegurar que el layout se actualice al cerrar el menú
    updateContentLayout();
    
    // Hacer scroll al inicio al cambiar de sección
    window.scrollTo(0, 0);
}

// Escuchar cambios de tamaño de ventana para ajustar el layout
window.addEventListener('resize', updateContentLayout);

/* ===== GRÁFICAS ===== */

window.addEventListener('DOMContentLoaded', () => {
    const inversionCtx = document.getElementById("inversionChart");
    if (inversionCtx) {
        new Chart(inversionCtx, {
            type: 'pie',
            data: {
                labels: ['Infraestructura', 'Equipo', 'Capital'],
                datasets: [{
                    data: [4927000, 122000, 521800]
                }]
            }
        });
    }

    const costosCtx = document.getElementById("costosChart");
    if (costosCtx) {
        new Chart(costosCtx, {
            type: 'bar',
            data: {
                labels: ['Fijos', 'Variables', 'Ventas', 'Utilidad'],
                datasets: [{
                    data: [221900, 39000, 486850, 225950]
                }]
            }
        });
    }

    const utilidadCtx = document.getElementById("utilidadChart");
    if (utilidadCtx) {
        new Chart(utilidadCtx, {
            type: 'line',
            data: {
                labels: ['Mes1','Mes2','Mes3','Mes4'],
                datasets: [{
                    data: [225950,451900,677850,903800]
                }]
            }
        });
    }
});
