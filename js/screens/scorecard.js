import { appData } from "../../data/app-data.js";

export function render() {
  const scorecard = appData.metrics.scorecard;

  return `
    <section class="screen scorecard-screen">
      <header class="page-header">
        <button class="back-button" data-screen="home">← Home</button>

        <div>
          <h1>Store Scorecard</h1>
          <p>Store ${appData.store.number} • District ${appData.store.district} • Division ${appData.store.division}</p>
        </div>
      </header>

      <section class="dashboard-grid">
        <div class="metric-card">
          <h2>Composite Score</h2>
          <div class="metric-value">${scorecard.compositeScore}</div>
          <p>Detailed operational drill-down</p>
        </div>

        <div class="metric-card">
          <h2>Department Execution</h2>
          <div class="metric-value">${scorecard.departmentExecution}</div>
          <p>Execution by department</p>
        </div>

        <div class="metric-card">
          <h2>Associate Readiness</h2>
          <div class="metric-value">${scorecard.associateReadiness}</div>
          <p>Training and mission readiness</p>
        </div>

        <div class="metric-card">
          <h2>Customer Impact</h2>
          <div class="metric-value">${scorecard.customerImpact}</div>
          <p>Customer-facing operational health</p>
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
            Current compliance rate is holding at 96%.
          </div>
          <div class="mission-status">96%</div>
        </div>
      </section>
    </section>
  `;
}

export function afterRender() {
  console.log("Store Scorecard Loaded");
}
