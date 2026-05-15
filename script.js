let cart = [];

function toggleMenu() {
    document.getElementById("sidebar").classList.toggle("active");
    document.getElementById("overlay").classList.toggle("active");
}

function toggleCart() {
    document.getElementById("cart-sidebar").classList.toggle("active");
    document.getElementById("overlay").classList.toggle("active");
}

function closeAll() {
    document.getElementById("sidebar").classList.remove("active");
    document.getElementById("cart-sidebar").classList.remove("active");
    document.getElementById("overlay").classList.remove("active");
}

function showSection(id) {
    document.querySelectorAll(".section").forEach(sec => sec.classList.remove("active"));
    document.getElementById(id).classList.add("active");
    closeAll();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* CARRITO LOGIC */
function addToCart(name, price) {
    const item = cart.find(i => i.name === name);
    if (item) {
        item.qty++;
    } else {
        cart.push({ name, price, qty: 1 });
    }
    updateCartUI();
    toggleCart(); // Mostrar carrito al añadir
}

function updateCartUI() {
    const container = document.getElementById("cart-items");
    const countLabel = document.getElementById("cart-count");
    const totalLabel = document.getElementById("cart-total");
    
    container.innerHTML = "";
    let total = 0;
    let count = 0;

    if (cart.length === 0) {
        container.innerHTML = '<p class="empty-msg">Tu carrito está vacío</p>';
    } else {
        cart.forEach((item, index) => {
            total += item.price * item.qty;
            count += item.qty;
            container.innerHTML += `
                <div class="cart-item" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px; padding-bottom: 10px; border-bottom: 1px solid #f0f0f0;">
                    <div style="flex: 1;">
                        <strong style="color: var(--primary-dark);">${item.name}</strong><br>
                        <small style="color: var(--text-light);">Q${item.price.toFixed(2)} c/u</small>
                    </div>
                    <div style="display: flex; align-items: center; gap: 10px;">
                        <div style="display: flex; align-items: center; background: #f4f6f8; border-radius: 8px; padding: 2px 5px;">
                            <button onclick="updateQty(${index}, -1)" style="background:none; border:none; padding: 5px; cursor:pointer; color: var(--primary);"><i class="fas fa-minus-circle"></i></button>
                            <span style="min-width: 20px; text-align: center; font-weight: 600;">${item.qty}</span>
                            <button onclick="updateQty(${index}, 1)" style="background:none; border:none; padding: 5px; cursor:pointer; color: var(--primary);"><i class="fas fa-plus-circle"></i></button>
                        </div>
                        <button onclick="removeFromCart(${index})" style="background:none; border:none; color:#e53935; cursor:pointer; padding: 5px;"><i class="fas fa-trash-alt"></i></button>
                    </div>
                </div>
            `;
        });
    }

    countLabel.innerText = count;
    totalLabel.innerText = `Q${total.toFixed(2)}`;
}

function updateQty(index, delta) {
    if (cart[index].qty + delta > 0) {
        cart[index].qty += delta;
    } else {
        removeFromCart(index);
    }
    updateCartUI();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartUI();
}

function checkout() {
    if (cart.length === 0) return alert("El carrito está vacío");
    alert("¡Gracias por tu interés! Próximamente habilitaremos pagos en línea.");
    cart = [];
    updateCartUI();
    closeAll();
}

/* ===== GRÁFICAS PROFESIONALES ===== */
const chartOptions = {
    responsive: true,
    animation: {
        duration: 2000,
        easing: 'easeOutQuart'
    },
    plugins: {
        legend: { position: 'bottom' }
    }
};

window.addEventListener('DOMContentLoaded', () => {
    // Inversión
    const invCtx = document.getElementById("inversionChart");
    if (invCtx) {
        new Chart(invCtx, {
            type: 'doughnut',
            data: {
                labels: ['Infraestructura', 'Equipo', 'Capital'],
                datasets: [{
                    data: [4927000, 122000, 521800],
                    backgroundColor: ['#2e7d32', '#8bc34a', '#aed581'],
                    borderWidth: 0
                }]
            },
            options: chartOptions
        });
    }

    // Costos
    const costCtx = document.getElementById("costosChart");
    if (costCtx) {
        new Chart(costCtx, {
            type: 'bar',
            data: {
                labels: ['Fijos', 'Variables', 'Ventas', 'Utilidad'],
                datasets: [{
                    label: 'Valores en Q',
                    data: [221900, 39000, 486850, 225950],
                    backgroundColor: '#2e7d32',
                    borderRadius: 8
                }]
            },
            options: chartOptions
        });
    }

    // Proyección
    const utilCtx = document.getElementById("utilidadChart");
    if (utilCtx) {
        new Chart(utilCtx, {
            type: 'line',
            data: {
                labels: ['Mes 1', 'Mes 2', 'Mes 3', 'Mes 4'],
                datasets: [{
                    label: 'Proyección Utilidad',
                    data: [225950, 451900, 677850, 903800],
                    borderColor: '#2e7d32',
                    backgroundColor: 'rgba(46, 125, 50, 0.1)',
                    fill: true,
                    tension: 0.4
                }]
            },
            options: chartOptions
        });
    }
});
