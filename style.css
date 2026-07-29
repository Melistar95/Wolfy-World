* { margin: 0; padding: 0; box-sizing: border-box; font-family: 'Segoe UI', Tahoma, sans-serif; }
body { background: #0f0f1a; color: white; overflow: hidden; height: 100vh; display: flex; justify-content: center; align-items: center; }
#game-container { width: 100%; max-width: 800px; height: 100vh; position: relative; background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%); }

/* MENÚ PRINCIPAL */
#main-menu { width: 100%; height: 100%; display: flex; flex-direction: column; justify-content: center; align-items: center; padding: 20px; }
.menu-header { text-align: center; margin-bottom: 40px; }
#game-title { font-size: 3em; color: #00e5ff; text-shadow: 0 0 20px #00e5ff; margin-bottom: 10px; animation: glow 2s ease-in-out infinite alternate; }
@keyframes glow { from { text-shadow: 0 0 20px #00e5ff; } to { text-shadow: 0 0 40px #00e5ff, 0 0 60px #00e5ff; } }
.subtitle { font-size: 1.2em; color: #aaa; font-style: italic; }

.menu-buttons { display: flex; flex-direction: column; gap: 15px; width: 100%; max-width: 300px; }
.menu-btn { background: rgba(0, 229, 255, 0.1); border: 3px solid #00e5ff; color: white; padding: 18px; border-radius: 15px; font-size: 1.1em; cursor: pointer; transition: all 0.3s; display: flex; align-items: center; justify-content: center; gap: 15px; }
.menu-btn:hover { background: rgba(0, 229, 255, 0.3); transform: scale(1.05); box-shadow: 0 0 20px rgba(0, 229, 255, 0.5); }
.menu-btn:active { transform: scale(0.98); }
.menu-btn img { width: 40px; height: 40px; object-fit: contain; }
.btn-icon { font-size: 1.5em; }
.btn-text { font-weight: bold; }

.player-info { position: absolute; bottom: 20px; color: #666; font-size: 0.9em; }
.player-info span { color: #00e5ff; font-weight: bold; }

/* DIÁLOGO */
#dialogue-screen { position: absolute; width: 100%; height: 100%; display: flex; flex-direction: column; justify-content: flex-end; padding: 20px; }
.dialogue-box { background: rgba(0,0,0,0.9); border: 3px solid #00e5ff; border-radius: 15px; padding: 20px; box-shadow: 0 0 20px rgba(0,229,255,0.3); }
.speaker-name { color: #00e5ff; font-size: 1.3em; font-weight: bold; margin-bottom: 10px; text-shadow: 0 0 10px #00e5ff; }
.dialogue-text { font-size: 1.1em; line-height: 1.6; min-height: 60px; margin-bottom: 15px; }
.continue-btn { background: #00e5ff; color: #1a1a2e; border: none; padding: 10px 30px; border-radius: 8px; font-size: 1em; font-weight: bold; cursor: pointer; transition: 0.3s; }
.continue-btn:hover { background: #fff; box-shadow: 0 0 15px #00e5ff; }

/* NOMBRE Y CARGA */
#name-input-screen, #loading-screen, #tutorial-screen { position: absolute; width: 100%; height: 100%; display: flex; flex-direction: column; justify-content: center; align-items: center; background: rgba(0,0,0,0.95); }
.name-input-container { background: rgba(0,0,0,0.8); border: 3px solid #00e5ff; border-radius: 15px; padding: 30px; text-align: center; }
.name-input-container h2 { color: #00e5ff; margin-bottom: 20px; }
#nickname-input { width: 250px; padding: 12px; font-size: 1.1em; border: 2px solid #00e5ff; border-radius: 8px; background: #1a1a2e; color: white; text-align: center; margin-bottom: 20px; }
#nickname-input:focus { outline: none; box-shadow: 0 0 10px #00e5ff; }

.loading-text { font-size: 1.5em; color: #00e5ff; margin-bottom: 20px; }
.loading-bar-container { width: 80%; max-width: 400px; height: 20px; background: #16213e; border: 2px solid #00e5ff; border-radius: 10px; overflow: hidden; }
.loading-bar { height: 100%; background: linear-gradient(90deg, #00e5ff, #00ff88); width: 0%; transition: width 0.3s; }
.loading-percentage { margin-top: 15px; font-size: 1.2em; color: #00e5ff; }

#white-transition { position: absolute; width: 100%; height: 100%; background: white; opacity: 0; pointer-events: none; transition: opacity 2s; z-index: 10; }

/* TUTORIAL */
.tutorial-title { font-size: 2em; color: #00e5ff; margin-bottom: 10px; text-shadow: 0 0 15px #00e5ff; }
.tutorial-sub { color: #aaa; margin-bottom: 30px; font-size: 1.1em; }
.characters-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px; max-width: 500px; width: 90%; }
.character-card { background: rgba(0,0,0,0.7); border: 2px solid #00e5ff; border-radius: 12px; padding: 15px; text-align: center; transition: 0.3s; }
.character-card:hover { transform: scale(1.05); box-shadow: 0 0 15px #00e5ff; }
.character-icon { font-size: 2.5em; margin-bottom: 5px; }
.character-name { font-size: 1.1em; color: #00e5ff; font-weight: bold; margin-bottom: 5px; }
.character-role { font-size: 0.9em; color: #ccc; }
.start-game-btn { margin-top: 30px; padding: 15px 40px; font-size: 1.3em; background: #00e5ff; color: #1a1a2e; border: none; border-radius: 10px; font-weight: bold; cursor: pointer; transition: 0.3s; }
.start-game-btn:hover { background: #fff; box-shadow: 0 0 20px #00e5ff; transform: scale(1.05); }

@media (max-width: 600px) {
    #game-title { font-size: 2em; }
    .characters-grid { grid-template-columns: 1fr; }
}
