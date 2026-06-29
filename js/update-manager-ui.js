/*==========================================================
  update-manager-ui.js
  PART 1 OF N
==========================================================*/

"use strict";

/*==========================================================
  F.R.I.E.N.D.
  Update Manager UI
  Version 1.0
==========================================================*/

const FRIENDUpdateUI = (() => {

function render(){

    const status =
        FRIENDUpdateManager.getStatus();

    return `

        <section class="update-ui">

            <header>

                <h2>System Updates</h2>

                <span class="version">
                    v${status.version}
                </span>

            </header>

            <div class="update-body">

                <div class="update-item">
                    <div class="label">Latest Version</div>
                    <div class="value">${status.latestVersion}</div>
                </div>

                <div class="update-item">
                    <div class="label">Update Available</div>
                    <div class="value">
                        ${status.updateAvailable}
                    </div>
                </div>

                <div class="update-item">
                    <div class="label">Last Checked</div>
                    <div class="value">
                        ${status.lastChecked || "Never"}
                    </div>
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

window.FRIENDUpdateUI =
    FRIENDUpdateUI;

/*==========================================================
  End update-manager-ui.js
==========================================================*/
