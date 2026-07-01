import { appData } from "../../data/app-data.js";

export function render() {
  return `
    <section class="screen leader-screen">
      <header class="page-header">
        <button class="back-button" data-screen="home">← Home</button>

        <div>
          <h1>Leader Dashboard</h1>
          <p>Department Leader • Store ${appData.store.number} • District ${appData.store.district}</p>
        </div>
      </header>

      <section class="dashboard-grid">
        <div class="metric-card">
          <h2>Team Execution</h2>
          <div class="metric-value">91%</div>
          <p>Department completion status</p>
        </div>

        <div class="metric-card">
          <h2>Guided Missions</h2>
          <div class="metric-value">3</div>
          <p>Open leadership actions</p>
        </div>

        <div class="metric-card">
          <h2>Associate Support</h2>
          <div class="metric-value">88%</div>
          <p>Training and readiness</p>
        </div>

        <div class="metric-card">
          <h2>Risk Level</h2>
          <div class="metric-value">Low</div>
          <p>Current department risk</p>
        </div>
      </section>

      <section class="mission-panel">
        <h2>Leader Guided Actions</h2>

        ${appData.missions.map((mission) => `
          <div class="mission-card">
            <div>
              <strong>${mission.title}</strong><br>
              Owner: ${mission.owner}<br>
              Leader: ${mission.leader}
            </div>
            <div class="mission-status">${mission.status}</div>
          </div>
        `).join("")}
      </section>
    </section>
  `;
}

export function afterRender() {
  console.log("Leader Dashboard Loaded");
}
