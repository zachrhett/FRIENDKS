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

      <section class="dashboard-grid">
        <div class="metric-card">
          <h2>Sales Trend</h2>
          <div class="metric-value">${analytics.salesTrend}</div>
          <p>Current sales movement</p>
        </div>

        <div class="metric-card">
          <h2>Shrink Risk</h2>
          <div class="metric-value">${analytics.shrinkRisk}</div>
          <p>Current operational risk</p>
        </div>

        <div class="metric-card">
          <h2>Labor Efficiency</h2>
          <div class="metric-value">${analytics.laborEfficiency}</div>
          <p>Store efficiency performance</p>
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
            <strong>Deli production is trending above target.</strong><br>
            Review production planning with department leadership.
          </div>
          <div class="mission-status">Watch</div>
        </div>

        <div class="mission-card">
          <div>
            <strong>Labor efficiency remains healthy.</strong><br>
            Continue monitoring holiday scheduling impacts.
          </div>
          <div class="mission-status">Stable</div>
        </div>

        <div class="mission-card">
          <div>
            <strong>Food Safety compliance is strong.</strong><br>
            Temperature validation still needs follow-up.
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
