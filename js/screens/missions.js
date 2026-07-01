import { appData } from "../../data/app-data.js";

export function render() {
  return `
    <section class="screen mission-screen">
      <header class="page-header">
        <button class="back-button" data-screen="home">← Home</button>

        <div>
          <h1>Guided Mission</h1>
          <p>Associate Temperature Workflow • Store ${appData.store.number}</p>
        </div>
      </header>

      <section class="mission-panel">
        <h2>Welcome Alex</h2>

        <div class="mission-card">
          <div>
            <strong>Fresh Start Complete</strong><br>
            Please move to your next guided mission.
          </div>
          <div class="mission-status">Ready</div>
        </div>

        <div class="mission-card">
          <div>
            <strong>Temperature Mission</strong><br>
            Target temperature: 165°F<br>
            Actual temperature: 171°F
          </div>
          <div class="mission-status">On Track</div>
        </div>

        <div class="mission-card">
          <div>
            <strong>Step 1</strong><br>
            Sanitize probe thermometer.
          </div>
          <div class="mission-status">Complete</div>
        </div>

        <div class="mission-card">
          <div>
            <strong>Step 2</strong><br>
            Take temperature using probe.
          </div>
          <div class="mission-status">171°F</div>
        </div>

        <div class="mission-card">
          <div>
            <strong>Step 3</strong><br>
            Record location and submit validation.
          </div>
          <div class="mission-status">Submitted</div>
        </div>

        <div class="mission-card">
          <div>
            <strong>Mission Complete</strong><br>
            Great work Alex. Jamie has been notified and Joey’s Store Leader Dashboard has been updated.
            <br><br>
            Compliance: 100%<br>
            Time: 3:42 — on track
          </div>
          <div class="mission-status">100%</div>
        </div>
      </section>
    </section>
  `;
}

export function afterRender() {
  console.log("Guided Mission Loaded");
}
