// ==========================================
// WOLFY WORLD - GACHA LOGIC
// ==========================================

// Base de datos de cartas
const allCards = [
    // Rango C (60%)
    { name: "Lobito", rank: "C", orbs: "🤍" },
    { name: "Espadachín", rank: "C", orbs: "❤️" },
    { name: "Arquero", rank: "C", orbs: "💚" },
    { name: "Escolar", rank: "C", orbs: "💙" },
    { name: "Pintor", rank: "C", orbs: "💜" },
    { name: "Resortero", rank: "C", orbs: "💚" },
    // Rango B (25%)
    { name: "Boxeador", rank: "B", orbs: "❤️" },
    { name: "Corredor", rank: "B", orbs: "🤍" },
    { name: "Bibliotecario", rank: "B", orbs: "💙" },
    { name: "Patinador", rank: "B", orbs: "💛" },
    // Rango A (12%)
    { name: "Cañonero", rank: "A", orbs: "❤️💚" },
    { name: "Científico", rank: "A", orbs: "💜💙" },
    // Rango S (3%)
    { name: "Ninja de Sakura", rank: "S", orbs: "❤️💙💚" }
];

// Probabilidades
const rates = { 'C': 60, 'B': 25, 'A': 12, 'S': 3 };

// Estado del jugador
let gems = parseInt(localStorage.getItem('wolfyGems')) || 5000;
let inventory = JSON.parse(localStorage.getItem('wolfyInventory')) || [];

// Inicializar UI
window.onload = () => {
    updateGemDisplay();
    renderInventory();
};

function updateGemDisplay() {
    document.getElementById('gem-count').textContent = gems;
    localStorage.setItem('wolfyGems', gems);
}

// Función principal de Pull
function doPull(amount) {
    const cost = amount * 100;
    if (gems < cost) {
        alert("¡No tienes suficientes gemas! 💎");
        return;
    }

    gems -= cost;
    updateGemDisplay();

    const pulledCards = [];
    for (let i = 0; i < amount; i++) {
        pulledCards.push(rollCard());
    }

    // Guardar en inventario (solo las nuevas para no saturar, o todas si quieres colección)
    pulledCards.forEach(card => inventory.push(card));
    localStorage.setItem('wolfyInventory', JSON.stringify(inventory));
    
    renderInventory();
    showResult(pulledCards);
}

// Lógica de Ruleta (RNG)
function rollCard() {
    const rand = Math.random() * 100;
    let cumulative = 0;
    let chosenRank = 'C';

    for (const [rank, rate] of Object.entries(rates)) {
        cumulative += rate;
        if (rand <= cumulative) {
            chosenRank = rank;
            break;
        }
    }

    // Filtrar cartas por el rango elegido
    const rankCards = allCards.filter(c => c.rank === chosenRank);
    // Elegir una al azar de ese rango
    return rankCards[Math.floor(Math.random() * rankCards.length)];
}

// Mostrar Overlay de Resultado
function showResult(cards) {
    const overlay = document.getElementById('result-overlay');
    const grid = document.getElementById('result-cards');
    grid.innerHTML = '';

    cards.forEach((card, index) => {
        const cardEl = document.createElement('div');
        cardEl.className = `big-card rank-${card.rank}`;
        // Animación escalonada
        cardEl.style.animationDelay = `${index * 0.1}s`;
        
        cardEl.innerHTML = `
            <div class="card-rank">${card.rank}</div>
            <div class="card-orbs">${card.orbs}</div>
            <div class="card-name">${card.name}</div>
        `;
        grid.appendChild(cardEl);
    });

    overlay.classList.remove('hidden');
}

function closeResult() {
    document.getElementById('result-overlay').classList.add('hidden');
}

// Renderizar Inventario (Últimas 10)
function renderInventory() {
    const grid = document.getElementById('inventory-grid');
    grid.innerHTML = '';

    if (inventory.length === 0) {
        grid.innerHTML = '<div class="empty-slot">Aún no has invocado...</div>';
        return;
    }

    // Mostrar las últimas 10 cartas obtenidas
    const recent = inventory.slice(-10).reverse();
    recent.forEach(card => {
        const el = document.createElement('div');
        el.className = `mini-card rank-${card.rank}`;
        el.innerHTML = `<div>${card.orbs}</div><div>${card.name}</div>`;
        grid.appendChild(el);
    });
}
