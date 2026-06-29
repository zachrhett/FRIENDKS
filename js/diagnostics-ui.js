/*==========================================================
  diagnostics-ui.js
  PART 1 OF N
==========================================================*/

"use strict";

/*==========================================================
  F.R.I.E.N.D.
  Diagnostics UI Engine
  Version 1.0
==========================================================*/

const FRIENDDiagnosticsUI = (() => {

function render(){

    const report = FRIENDDiagnostics.runSelfCheck();

    return `

        <section class="diagnostics-ui">

            <header>

                <h2>System Diagnostics</h2>

                <span class="status">${report.health}</span>

            </header>

            <div class="diagnostics-grid">

                <div class="diag-card">
                    <div class="label">Errors</div>
                    <div class="value">${report.errors}</div>
                </div>

                <div class="diag-card">
                    <div class="label">Warnings</div>
                    <div class="value">${report.warnings}</div>
                </div>

                <div class="diag-card">
                    <div class="label">Uptime (ms)</div>
                    <div class="value">${report.uptimeMs}</div>
                </div>

            </div>

        </section>

    `;

}

return {

    render

};

})();

/*==========================================================
  Global Access
==========================================================*/

window.FRIENDDiagnosticsUI =
    FRIENDDiagnosticsUI;

/*==========================================================
  End diagnostics-ui.js
==========================================================*/
