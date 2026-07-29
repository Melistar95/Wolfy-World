// ==========================================
// WOLFY WORLD - TUTORIAL LOGIC
// ==========================================

let currentStep = 1;

function nextStep(step) {
    document.getElementById(`step-${currentStep}`).classList.add('hidden');
    document.getElementById(`step-${step}`).classList.remove('hidden');
    currentStep = step;
}

function startBattle() {
    localStorage.setItem('wolfyTutorialCompleted', 'true');
    window.location.href = 'battle.html';
}

window.onload = function() {
    const tutorialCompleted = localStorage.getItem('wolfyTutorialCompleted');
    if (tutorialCompleted === 'true') {
        window.location.href = 'battle.html';
    }
};
