// ==========================================
// WOLFY WORLD - MENÚ PRINCIPAL
// ==========================================

let playerName = localStorage.getItem('wolfyPlayer') || "";

window.onload = function() {
    if (!playerName) {
        startIntro();
    } else {
        showMainMenu();
    }
};

function showMainMenu() {
    hideAllScreens();
    document.getElementById('main-menu').style.display = 'flex';
    document.getElementById('menu-player-name').textContent = playerName;
}

function goToAdventure() {
    window.location.href = 'tutorial.html';
}

function goToGacha() {
    window.location.href = 'gacha.html';
}


function goToWolfyBlast() {
    window.location.href = 'battle.html';
}

function showCredits() {
    alert(" Wolfy World\n\nCreado por: " + playerName + "\n\n© 2026 Wolfy Go Studio");
}

function returnToMenu() {
    showMainMenu();
}

// ==========================================
// INTRO (Primer inicio)
// ==========================================

const dialogues = [
    { speaker: "???", text: "Hey..." },
    { speaker: "???", text: "Bienvenido a este proyecto." },
    { speaker: "???", text: "Me da curiosidad saber quién eres." }
];

let currentDialogue = 0;
let isTyping = false;
let typingTimeout;

function startIntro() {
    hideAllScreens();
    document.getElementById('dialogue-screen').style.display = 'flex';
    showDialogue(dialogues[0]);
}

function showDialogue(d) {
    document.getElementById('speaker').textContent = d.speaker;
    document.getElementById('dialogue-text').textContent = "";
    document.getElementById('continue-btn').style.display = 'none';
    isTyping = true;
    let i = 0;
    function type() {
        if (i < d.text.length) {
            document.getElementById('dialogue-text').textContent += d.text.charAt(i);
            i++;
            typingTimeout = setTimeout(type, 40);
        } else {
            isTyping = false;
            document.getElementById('continue-btn').style.display = 'inline-block';
        }
    }
    type();
}

function nextDialogue() {
    if (isTyping) {
        clearTimeout(typingTimeout);
        document.getElementById('dialogue-text').textContent = dialogues[currentDialogue].text;
        isTyping = false;
        document.getElementById('continue-btn').style.display = 'inline-block';
        return;
    }
    currentDialogue++;
    if (currentDialogue < dialogues.length) {
        showDialogue(dialogues[currentDialogue]);
    } else {
        document.getElementById('dialogue-screen').style.display = 'none';
        document.getElementById('name-input-screen').style.display = 'flex';
        document.getElementById('nickname-input').focus();
    }
}

function submitName() {
    playerName = document.getElementById('nickname-input').value.trim();
    if (!playerName) { alert("¡Escribe un nombre!"); return; }
    localStorage.setItem('wolfyPlayer', playerName);
    document.getElementById('name-input-screen').style.display = 'none';
    document.getElementById('dialogue-screen').style.display = 'flex';
    
    const custom = { speaker: "???", text: `Ah, ${playerName}, que gran nombre. Empecemos con la carga de unos datos básicos, ¿te parece?` };
    showDialogue(custom);
    
    window.nextDialogue = () => {
        if (isTyping) {
            clearTimeout(typingTimeout);
            document.getElementById('dialogue-text').textContent = custom.text;
            isTyping = false;
            document.getElementById('continue-btn').style.display = 'inline-block';
            return;
        }
        startLoading();
    };
}

document.getElementById('nickname-input').addEventListener('keypress', e => { if (e.key === 'Enter') submitName(); });

function startLoading() {
    document.getElementById('dialogue-screen').style.display = 'none';
    document.getElementById('loading-screen').style.display = 'flex';
    let p = 0;
    const bar = document.getElementById('loading-bar');
    const txt = document.getElementById('loading-percentage');
    const int = setInterval(() => {
        p += Math.random() * 20;
        if (p >= 100) { p = 100; clearInterval(int); setTimeout(showTutorial, 500); }
        bar.style.width = p + '%';
        txt.textContent = Math.floor(p) + '%';
    }, 200);
}

function showTutorial() {
    document.getElementById('loading-screen').style.display = 'none';
    document.getElementById('white-transition').style.opacity = '1';
    setTimeout(() => {
        document.getElementById('white-transition').style.opacity = '0';
        document.getElementById('tutorial-screen').style.display = 'flex';
    }, 2000);
}

function hideAllScreens() {
    document.getElementById('main-menu').style.display = 'none';
    document.getElementById('dialogue-screen').style.display = 'none';
    document.getElementById('name-input-screen').style.display = 'none';
    document.getElementById('loading-screen').style.display = 'none';
    document.getElementById('tutorial-screen').style.display = 'none';
}
