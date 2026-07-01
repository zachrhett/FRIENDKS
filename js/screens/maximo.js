import { appData } from "../../data/app-data.js";

export function render() {
  return `
    <section class="screen maximo-screen">
      <header class="page-header">
        <button class="back-button" data-screen="home">← Home</button>

        <div>
          <h1>Maximo</h1>
          <p>Maintenance execution • Store ${appData.store.number}</p>
        </div>
      </header>

      <section class="executive-hero-card">
        <div>
          <h2>Facility Support</h2>
          <p>5 open work orders • 2 priority items • Risk level low.</p>
        </div>

        <div class="executive-score">
          5
        </div>
      </section>

      <section class="dashboard-grid">
        <div class="metric-card">
          <h2>Open Work Orders</h2>
          <div class="metric-value">5</div>
          <p>Current items</p>
        </div>

        <div class="metric-card">
          <h2>Priority Items</h2>
          <div class="metric-value">2</div>
          <p>Leadership follow-up</p>
        </div>

        <div class="metric-card">
          <h2>Completed Today</h2>
          <div class="metric-value">4</div>
          <p>Closed actions</p>
        </div>

        <div class="metric-card">
          <h2>Risk Level</h2>
          <div class="metric-value">Low</div>
          <p>Facility impact</p>
        </div>
      </section>

      <section class="mission-panel">
        <h2>Maximo Work Orders</h2>

        <div class="mission-card">
          <div>
            <strong>Bakery oven inspection</strong><br>
            Confirm equipment inspection and PM completion.
          </div>
          <div class="mission-status">Open</div>
        </div>

        <div class="mission-card">
          <div>
            <strong>Cooler door seal review</strong><br>
            Verify seal integrity and temperature impact.
          </div>
          <div class="mission-status">Priority</div>
        </div>

        <div class="mission-card">
          <div>
            <strong>Baler safety check</strong><br>
            Confirm PM inspection and safety compliance.
          </div>
          <div class="mission-status">Due</div>
        </div>
      </section>
    </section>
  `;
}

export function afterRender() {
  console.log("Maximo Loaded");
}
