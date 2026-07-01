import { appData } from "../../data/app-data.js";

export function render() {
  return `
    <section class="screen alerts-screen">
      <header class="page-header">
        <button class="back-button" data-screen="home">← Home</button>

        <div>
          <h1>Alerts</h1>
          <p>Priority Execution • Store ${appData.store.number}</p>
        </div>
      </header>

      <section class="dashboard-grid">
        <div class="metric-card">
          <h2>Total Alerts</h2>
          <div class="metric-value">${appData.metrics.executive.alerts}</div>
          <p>Open priority notifications</p>
        </div>

        <div class="metric-card">
          <h2>High Priority</h2>
          <div class="metric-value">2</div>
          <p>Requires same-day action</p>
        </div>

        <div class="metric-card">
          <h2>Maximo</h2>
          <div class="metric-value">${appData.metrics.executive.maximo}</div>
          <p>Open work orders</p>
        </div>

        <div class="metric-card">
          <h2>Status</h2>
          <div class="metric-value">Active</div>
          <p>Monitoring store execution</p>
        </div>
      </section>

      <section class="mission-panel">
        <h2>Active Alerts</h2>

        ${appData.alerts.map((alert) => `
          <div class="mission-card">
            <div>
              <strong>${alert.title}</strong><br>
              Department: ${alert.department}<br>
              Severity: ${alert.severity}
            </div>

            <div class="mission-status">
              ${alert.count}
            </div>
          </div>
        `).join("")}
      </section>
    </section>
  `;
}

export function afterRender() {
  console.log("Alerts Loaded");
}
