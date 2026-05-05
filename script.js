function loadContent(section) {
    const content = document.getElementById("content");

    if (section === "home") {
        content.innerHTML = `
            <div class="card">
                <h1>Verminature</h1>
                <p>Empresa biotecnológica que transforma residuos orgánicos en fertilizantes sostenibles, promoviendo la economía circular y la regeneración del suelo.</p>
            </div>

            <div class="card">
                <h2>Misión</h2>
                <p>Brindar productos útiles y eficaces para todo tipo de plantas, ofreciendo un servicio moderno y de calidad, transformando desechos orgánicos en abonos ricos en nutrientes y accesibles.</p>
            </div>

            <div class="card">
                <h2>Visión</h2>
                <p>Ser una empresa referente en la agricultura para el año 2030, impactando positivamente en la canasta básica y generando empleos dignos.</p>
            </div>

            <div class="card">
                <h2>Objetivos</h2>
                <ul>
                    <li>Procesar 30 toneladas mensuales</li>
                    <li>Garantizar calidad con pH entre 6.5 y 7.5</li>
                    <li>Alcanzar el 25% del mercado local</li>
                </ul>
            </div>
        `;
    }

    if (section === "empresa") {
        content.innerHTML = `
            <div class="card">
                <h1>Sobre la Empresa</h1>
                <p>Verminature S.A. es una empresa privada con 31 colaboradores enfocada en soluciones sostenibles para el manejo de desechos orgánicos.</p>
                <p>Transforma residuos en productos de valor para la agricultura, contribuyendo a la reducción de la contaminación.</p>
            </div>

            <div class="card">
                <h2>Productos</h2>
                <ul>
                    <li>Humus (abono sólido)</li>
                    <li>Lixiviado (fertilizante líquido)</li>
                    <li>Núcleos de lombriz</li>
                </ul>
            </div>
        `;
    }

    if (section === "finanzas") {
        content.innerHTML = `
            <div class="card">
                <h1>Finanzas</h1>
                <p><b>Inversión total:</b> Q5,570,800</p>
                <p><b>Costos mensuales:</b> Q260,900</p>
                <p><b>Ventas mensuales:</b> Q486,850</p>
                <p><b>Utilidad:</b> Q225,950</p>
                <p><b>Recuperación:</b> 25 meses</p>
            </div>
        `;
    }

    if (section === "operaciones") {
        content.innerHTML = `
            <div class="card">
                <h1>Operaciones</h1>
                <p>Producción basada en lombriz roja californiana (Eisenia fetida).</p>
                <ul>
                    <li>Precompostaje (>55°C)</li>
                    <li>Transformación: 45-60 días</li>
                    <li>Humedad: 70% - 80%</li>
                </ul>
            </div>
        `;
    }

    if (section === "mercado") {
        content.innerHTML = `
            <div class="card">
                <h1>Mercado</h1>
                <p>Clientes objetivo:</p>
                <ul>
                    <li>Agricultores</li>
                    <li>Cafetaleros</li>
                    <li>Viveros</li>
                    <li>Jardinería urbana</li>
                </ul>
            </div>
        `;
    }

    if (section === "organizacion") {
        content.innerHTML = `
            <div class="card">
                <h1>Organización</h1>
                <p>Estructura funcional con 31 colaboradores.</p>
                <ul>
                    <li>Gerencia General</li>
                    <li>Finanzas</li>
                    <li>Operaciones</li>
                    <li>Ventas</li>
                    <li>RRHH</li>
                </ul>
            </div>
        `;
    }

    if (section === "estrategias") {
        content.innerHTML = `
            <div class="card">
                <h1>Estrategias</h1>
                <ul>
                    <li>Pruebas de campo con agricultores</li>
                    <li>Alianzas con mercados locales</li>
                    <li>Educación al cliente</li>
                    <li>Marca ecológica "Respiro a la Tierra"</li>
                </ul>
            </div>
        `;
    }
}

window.onload = () => loadContent("home");