import { appData } from "../../data/app-data.js";

export function render() {
  const analytics = appData.metrics.analytics;

  return `
    <section class="screen analytics-screen">
      <header class="page-header">
        <button class="back-button" data-screen="home">← Home</button>

        <div>
          <h1>Analytics</h1>
          <p>Store ${appData.store.number} • District ${appData.store.district} • Division ${appData.store.division}</p>
        </div>
      </header>

      <section class="executive-hero-card">
        <div>
          <h2>Operational Analytics</h2>
          <p>Trends, risk signals, labor health, and food safety visibility.</p>
        </div>

        <div class="executive-score">
          ${analytics.foodSafety}
        </div>
      </section>

      <section class="dashboard-grid">
        <div class="metric-card">
          <h2>Sales Trend</h2>
          <div class="metric-value">${analytics.salesTrend}</div>
          <p>Current movement</p>
        </div>

        <div class="metric-card">
          <h2>Shrink Risk</h2>
          <div class="metric-value">${analytics.shrinkRisk}</div>
          <p>Operational risk</p>
        </div>

        <div class="metric-card">
          <h2>Labor Efficiency</h2>
          <div class="metric-value">${analytics.laborEfficiency}</div>
          <p>Store performance</p>
        </div>

        <div class="metric-card">
          <h2>Food Safety</h2>
          <div class="metric-value">${analytics.foodSafety}</div>
          <p>Compliance status</p>
        </div>
      </section>

      <section class="mission-panel">
        <h2>Analytics Insights</h2>

        <div class="mission-card">
          <div>
            <strong>Deli production above target</strong><br>
            Review planning with Jamie to reduce shrink exposure.
          </div>
          <div class="mission-status">Watch</div>
        </div>

        <div class="mission-card">
          <div>
            <strong>Labor efficiency stable</strong><br>
            Continue monitoring holiday scheduling impact.
          </div>
          <div class="mission-status">Stable</div>
        </div>

        <div class="mission-card">
          <div>
            <strong>Temperature validation needed</strong><br>
            Alex completed mission; Jamie and Joey updated.
          </div>
          <div class="mission-status">Action</div>
        </div>
      </section>
    </section>
  `;
}

export function afterRender() {
  console.log("Analytics Loaded");
}
