import { appData } from "../../data/app-data.js";

export function render() {
  return `
    <section class="screen ai-screen">
      <header class="page-header">
        <button class="back-button" data-screen="home">← Home</button>

        <div>
          <h1>AI Assistant</h1>
          <p>F.R.I.E.N.D. Guidance Engine • Store ${appData.store.number}</p>
        </div>
      </header>

      <section class="screen-card">
        <h2>F.R.I.E.N.D. AI</h2>
        <p>
          Monitoring store execution, guided missions, food safety, labor, Maximo, and leadership follow-up.
        </p>
      </section>

      <section class="mission-panel">
        <h2>Recommended Guidance</h2>

        <div class="mission-card">
          <div>
            <strong>Support Alex with temperature compliance.</strong><br>
            Alex completed the temperature mission on track. Jamie has been notified.
          </div>
          <div class="mission-status">Complete</div>
        </div>

        <div class="mission-card">
          <div>
            <strong>Review Deli production trend.</strong><br>
            Deli production is above target and may impact shrink if not corrected.
          </div>
          <div class="mission-status">Watch</div>
        </div>

        <div class="mission-card">
          <div>
            <strong>Check Maximo follow-up.</strong><br>
            5 open work orders remain active for Store ${appData.store.number}.
          </div>
          <div class="mission-status">5 Open</div>
        </div>
      </section>

      <section class="screen-card">
        <h2>Ask F.R.I.E.N.D.</h2>
        <p class="ai-prompt">
          “What should I focus on next?”
        </p>

        <button class="primary-action" data-screen="alerts">
          View Priority Alerts
        </button>
      </section>
    </section>
  `;
}

export function afterRender() {
  console.log("AI Assistant Loaded");
}
