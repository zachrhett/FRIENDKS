import { appData } from "../../data/app-data.js";

export function render() {
  return `
    <section class="screen mission-screen">
      <header class="page-header">
        <button class="back-button" data-screen="home">← Home</button>

        <div>
          <h1>Guided Mission</h1>
          <p>Associate workflow • Alex • Store ${appData.store.number}</p>
        </div>
      </header>

      <section class="executive-hero-card">
        <div>
          <h2>Temperature Mission</h2>
          <p>Target 165°F • Actual 171°F • Probe thermometer verified.</p>
        </div>

        <div class="executive-score">
          100%
        </div>
      </section>

      <section class="mission-panel">
        <h2>Mission Flow</h2>

        <div class="mission-card">
          <div>
            <strong>Fresh Start Complete</strong><br>
            Alex is ready for the next guided mission.
          </div>
          <div class="mission-status">Ready</div>
        </div>

        <div class="mission-card">
          <div>
            <strong>Step 1: Sanitize Probe</strong><br>
            Probe thermometer sanitized before use.
          </div>
          <div class="mission-status">Done</div>
        </div>

        <div class="mission-card">
          <div>
            <strong>Step 2: Take Temperature</strong><br>
            Target: 165°F • Actual: 171°F.
          </div>
          <div class="mission-status">171°F</div>
        </div>

        <div class="mission-card">
          <div>
            <strong>Step 3: Record Location</strong><br>
            Temperature recorded and dashboard updated.
          </div>
          <div class="mission-status">Logged</div>
        </div>
      </section>

      <section class="screen-card">
        <h2>Mission Complete</h2>
        <p>
          Great work Alex. Jamie has been notified and Joey’s Store Leader Dashboard has been updated.
        </p>
        <p>
          Compliance: 100% • Time: 3:42 • Status: On Track
        </p>
      </section>
    </section>
  `;
}

export function afterRender() {
  console.log("Guided Mission Loaded");
}
