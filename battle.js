// ==========================================
// WOLFY WORLD - BATTLE LOGIC
// ==========================================

const BOARD_SIZE = 6;
const COLORS = ['blanco', 'rojo', 'verde', 'azul'];

let playerHP = 100;
const playerMaxHP = 100;
let enemyHP = 300;
const enemyMaxHP = 300;
let board = [];
let isPlayerTurn = true;

const enemyData = {
    name: "Tronco Místico",
    weakTo: ['verde', 'azul'],
    attackDamage: 15
};

window.onload = () => {
    const name = localStorage.getItem('wolfyPlayer') || "Viajero";
    document.getElementById('player-name-display').textContent = name;
    initBoard();
};

function initBoard() {
    const boardEl = document.getElementById('board');
    boardEl.innerHTML = '';
    board = [];
    for (let i = 0; i < BOARD_SIZE * BOARD_SIZE; i++) {
        const color = COLORS[Math.floor(Math.random() * COLORS.length)];
        board.push(color);
        const orb = document.createElement('div');
        orb.className = `orb ${color}`;
        orb.id = `orb-${i}`;
        boardEl.appendChild(orb);
    }
}

function playCard(color) {
    if (!isPlayerTurn) return;
    let count = 0;
    const indicesToClear = [];
    board.forEach((c, i) => {
        if (c === color) { count++; indicesToClear.push(i); }
    });
    if (count === 0) return;

    let damage = count * 10;
    let isWeakness = false;
    if (enemyData.weakTo.includes(color)) { damage *= 2; isWeakness = true; }

    enemyHP = Math.max(0, enemyHP - damage);
    updateHUD();
    showFloatingDamage(damage, isWeakness);

    indicesToClear.forEach(i => {
        board[i] = COLORS[Math.floor(Math.random() * COLORS.length)];
        const orb = document.getElementById(`orb-${i}`);
        orb.className = `orb ${board[i]}`;
    });

    if (enemyHP <= 0) {
        setTimeout(() => endBattle(true), 500);
    } else {
        isPlayerTurn = false;
        setTimeout(enemyTurn, 1000);
    }
}

function enemyTurn() {
    playerHP = Math.max(0, playerHP - enemyData.attackDamage);
    updateHUD();
    document.getElementById('player-hud').style.transform = 'translateX(-10px)';
    setTimeout(() => document.getElementById('player-hud').style.transform = 'translateX(10px)', 100);
    setTimeout(() => document.getElementById('player-hud').style.transform = 'translateX(0)', 200);
    if (playerHP <= 0) {
        setTimeout(() => endBattle(false), 500);
    } else {
        isPlayerTurn = true;
    }
}

function updateHUD() {
    document.getElementById('enemy-hp-bar').style.width = (enemyHP / enemyMaxHP * 100) + '%';
    document.getElementById('enemy-hp-text').textContent = `${enemyHP} / ${enemyMaxHP} HP`;
    document.getElementById('player-hp-bar').style.width = (playerHP / playerMaxHP * 100) + '%';
    document.getElementById('player-hp-text').textContent = `${playerHP} / ${playerMaxHP} HP`;
}

function showFloatingDamage(amount, isWeak) {
    const msg = document.createElement('div');
    msg.className = `damage-text ${isWeak ? 'weak' : ''}`;
    msg.textContent = isWeak ? `¡DEBIL! -${amount}` : `-${amount}`;
    const enemyRect = document.querySelector('.enemy-sprite').getBoundingClientRect();
    msg.style.left = (enemyRect.left + enemyRect.width / 2 - 40) + 'px';
    msg.style.top = enemyRect.top + 'px';
    document.body.appendChild(msg);
    setTimeout(() => msg.remove(), 1000);
}

function endBattle(victory) {
    const overlay = document.getElementById('message-overlay');
    const text = document.getElementById('message-text');
    overlay.classList.remove('hidden');
    if (victory) {
        text.textContent = "¡Victoria!";
        text.style.color = "#2ed573";
    } else {
        text.textContent = "Derrota...";
        text.style.color = "#ff4757";
    }
}
