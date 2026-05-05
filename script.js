function loadContent(section) {
    const content = document.getElementById("content");

    if (section === "home") {
        content.innerHTML = `
            <h1>Verminature</h1>
            <p>Empresa biotecnológica dedicada a transformar residuos orgánicos en fertilizantes sostenibles.</p>

            <h2>Misión</h2>
            <p>Brindar productos eficaces para plantas transformando desechos en abonos accesibles.</p>

            <h2>Visión</h2>
            <p>Ser referente agrícola en Guatemala para el año 2030.</p>

            <h2>Objetivos</h2>
            <ul>
                <li>Procesar 30 toneladas mensuales</li>
                <li>Mantener alta calidad del producto</li>
                <li>Alcanzar 25% del mercado local</li>
            </ul>
        `;
    }

    if (section === "empresa") {
        content.innerHTML = `
            <h1>Empresa</h1>
            <p>Verminature es una empresa biotecnológica enfocada en la sostenibilidad y la economía circular.</p>
        `;
    }

    if (section === "finanzas") {
        content.innerHTML = `
            <h1>Finanzas</h1>
            <p>Inversión total: Q5,570,800</p>
            <p>Utilidad mensual: Q225,950</p>
            <p>Recuperación: 25 meses</p>
        `;
    }

    if (section === "operaciones") {
        content.innerHTML = `
            <h1>Operaciones</h1>
            <p>Producción basada en lombriz roja californiana.</p>
        `;
    }

    if (section === "mercado") {
        content.innerHTML = `
            <h1>Mercado</h1>
            <p>Clientes: agricultores, viveros, jardinería urbana.</p>
        `;
    }

    if (section === "organizacion") {
        content.innerHTML = `
            <h1>Organización</h1>
            <p>Estructura funcional con 31 empleados.</p>
        `;
    }

    if (section === "estrategias") {
        content.innerHTML = `
            <h1>Estrategias</h1>
            <ul>
                <li>Pruebas de campo</li>
                <li>Alianzas estratégicas</li>
                <li>Educación al cliente</li>
            </ul>
        `;
    }
}

// Cargar inicio automáticamente
window.onload = () => loadContent("home");