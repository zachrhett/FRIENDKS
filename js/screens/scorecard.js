import { appData } from "../../data/app-data.js";

export function render() {
  const scorecard = appData.metrics.scorecard;

  return `
    <section class="screen scorecard-screen">
      <header class="page-header">
        <button class="back-button" data-screen="home">← Home</button>

        <div>
          <h1>Store Scorecard</h1>
          <p>Store health • Store ${appData.store.number} • District ${appData.store.district}</p>
        </div>
      </header>

      <section class="executive-hero-card">
        <div>
          <h2>Store Health View</h2>
          <p>Composite is the drill-down. Store Scorecard shows overall store health.</p>
        </div>

        <div class="executive-score">
          ${scorecard.compositeScore}
        </div>
      </section>

      <section class="dashboard-grid">
        <div class="metric-card">
          <h2>Store Health</h2>
          <div class="metric-value">${scorecard.compositeScore}</div>
          <p>Overall health</p>
        </div>

        <div class="metric-card">
          <h2>Department Execution</h2>
          <div class="metric-value">${scorecard.departmentExecution}</div>
          <p>Department follow-through</p>
        </div>

        <div class="metric-card">
          <h2>Associate Readiness</h2>
          <div class="metric-value">${scorecard.associateReadiness}</div>
          <p>Training readiness</p>
        </div>

        <div class="metric-card">
          <h2>Customer Impact</h2>
          <div class="metric-value">${scorecard.customerImpact}</div>
          <p>Customer-facing health</p>
        </div>
      </section>

      <section class="mission-panel">
        <h2>Store Leader Focus</h2>

        <div class="mission-card">
          <div>
            <strong>Open Alerts</strong><br>
            7 total alerts requiring leadership awareness.
          </div>
          <div class="mission-status">7</div>
        </div>

        <div class="mission-card">
          <div>
            <strong>Maximo Work Orders</strong><br>
            5 open facility or maintenance items.
          </div>
          <div class="mission-status">5</div>
        </div>

        <div class="mission-card">
          <div>
            <strong>Temperature Compliance</strong><br>
            Alex completed temperature mission. Jamie and Joey updated.
          </div>
          <div class="mission-status">100%</div>
        </div>
      </section>
    </section>
  `;
}

export function afterRender() {
  console.log("Store Scorecard Loaded");
}
