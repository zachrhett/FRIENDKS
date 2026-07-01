import { appData } from "../../data/app-data.js";

export function render() {
  const executive = appData.metrics.executive;

  return `
    <section class="screen home-screen">
      <header class="home-hero">
        <div class="brand-row">
          <div class="ks-logo-badge">
            <img src="./images/king-soopers-logo.png" alt="King Soopers Logo" />
          </div>

          <div>
            <h1>F.R.I.E.N.D.</h1>
            <p>Store ${appData.store.number} • District ${appData.store.district} • Division ${appData.store.division}</p>
          </div>
        </div>

        <div class="ai-status-pill">
          AI Active • Store Systems Connected
        </div>
      </header>

      <section class="home-priority-card" data-screen="mission">
        <div>
          <h2>Guided Mission by Priority</h2>
          <p>Verify Deli temperature validation with Alex</p>
        </div>

        <div class="priority-circle">1</div>
      </section>

      <section class="home-summary-grid">
        <div class="mini-card">
          <span>Health</span>
          <strong>${executive.storeHealth}</strong>
        </div>

        <div class="mini-card">
          <span>Missions</span>
          <strong>${executive.missionCompletion}</strong>
        </div>

        <div class="mini-card">
          <span>Alerts</span>
          <strong>${executive.alerts}</strong>
        </div>

        <div class="mini-card">
          <span>Maximo</span>
          <strong>${executive.maximo}</strong>
        </div>
      </section>

      <section class="home-grid premium-grid">
        <button class="home-tile" data-screen="executive">Executive</button>
        <button class="home-tile" data-screen="analytics">Analytics</button>
        <button class="home-tile" data-screen="scorecard">Store Scorecard</button>
        <button class="home-tile" data-screen="leader">Leader</button>
        <button class="home-tile" data-screen="mission">Guided Mission</button>
        <button class="home-tile" data-screen="maximo">Maximo</button>
        <button class="home-tile" data-screen="ai">AI Assistant</button>
        <button class="home-tile" data-screen="alerts">Alerts</button>
      </section>
    </section>
  `;
}

export function afterRender() {
  console.log("Home Loaded");
}
