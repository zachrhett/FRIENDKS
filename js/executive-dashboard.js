/*==========================================================
  executive-dashboard.js
  PART 1 OF N
==========================================================*/

"use strict";

const FRIENDExecutiveDashboard = (() => {

const EXECUTIVE = {

    title: "Executive Dashboard",

    storeHealth: 92,

    district: 2,

    division: 620,

    stores: 155,

    associates: 22000,

    alerts: 7,

    maximo: 5,

    priorityMission:
        "Support Bakery labor optimization while protecting Food Safety and Customer Experience."

};

const KPI = [

{
title:"Store Health",
value:"92%",
status:"excellent"
},

{
title:"District",
value:"2",
status:"good"
},

{
title:"Division",
value:"620",
status:"good"
},

{
title:"Stores",
value:"155",
status:"good"
},

{
title:"Associates",
value:"22,000+",
status:"good"
},

{
title:"Alerts",
value:"7",
status:"critical"
},

{
title:"Maximo",
value:"5",
status:"good"
},

{
title:"Operational Readiness",
value:"96%",
status:"excellent"
}

];

function render(){

return `

<section class="executive-dashboard">

<header class="executive-header">

<h1>

${EXECUTIVE.title}

</h1>

<div class="executive-subtitle">

Division ${EXECUTIVE.division}
•
District ${EXECUTIVE.district}

</div>

</header>

<div class="executive-kpi-grid">

${KPI.map(createTile).join("")}

</div>

<section class="executive-priority">

<h2>

Executive Priority

</h2>

<p>

${EXECUTIVE.priorityMission}

</p>

</section>

</section>

`;

}

function createTile(tile){

return `

<div class="executive-tile ${tile.status}">

<div class="executive-value">

${tile.value}

</div>

<div class="executive-label">

${tile.title}

</div>

</div>

`;

}

return{

EXECUTIVE,
KPI,
render

};

})();
/*==========================================================
  executive-dashboard.js
  PART 2 OF N
==========================================================*/

FRIENDExecutiveDashboard.mount = function (
    target = "#executiveDashboardScreen"
) {

    const root =
        typeof target === "string"
            ? document.querySelector(target)
            : target;

    if (!root) return;

    root.innerHTML = this.render();

    this.bindEvents(root);

};

/*==========================================================
  Event Binding
==========================================================*/

FRIENDExecutiveDashboard.bindEvents = function (
    root
) {

    root.querySelectorAll(".executive-tile")
        .forEach((tile, index) => {

            tile.addEventListener("click", () => {

                this.openTile(
                    this.KPI[index]
                );

            });

        });

};

/*==========================================================
  KPI Detail
==========================================================*/

FRIENDExecutiveDashboard.openTile = function (
    tile
) {

    const existing =
        document.querySelector(".executive-overlay");

    if (existing) existing.remove();

    const overlay =
        document.createElement("div");

    overlay.className = "executive-overlay";

    overlay.innerHTML = `

        <div class="executive-modal">

            <div class="executive-modal-header">

                <div>

                    <h2>${tile.title}</h2>

                    <p>Executive Performance Detail</p>

                </div>

                <button class="executive-close">
                    ×
                </button>

            </div>

            <div class="executive-modal-body">

                <div class="executive-big-number">

                    ${tile.value}

                </div>

                <div class="executive-status">

                    ${tile.status.toUpperCase()}

                </div>

                <div class="executive-description">

                    This KPI contributes directly to the
                    F.R.I.E.N.D. Store Health calculation,
                    executive visibility,
                    guided leadership,
                    and division reporting.

                </div>

            </div>

            <div class="executive-modal-footer">

                <button>
                    View Details
                </button>

                <button>
                    Close
                </button>

            </div>

        </div>

    `;

    document.body.appendChild(overlay);

    overlay
        .querySelector(".executive-close")
        .addEventListener("click", () => overlay.remove());

    overlay
        .querySelectorAll(".executive-modal-footer button")[1]
        .addEventListener("click", () => overlay.remove());

    overlay.addEventListener("click", event => {

        if (event.target === overlay) {

            overlay.remove();

        }

    });

};
/*==========================================================
  executive-dashboard.js
  PART 3 OF N
==========================================================*/

/*==========================================================
  Refresh
==========================================================*/

FRIENDExecutiveDashboard.refresh = function () {

    const root =
        document.querySelector("#executiveDashboardScreen");

    if (!root) return;

    this.mount(root);

};

/*==========================================================
  Auto Mount
==========================================================*/

document.addEventListener("DOMContentLoaded", () => {

    const root =
        document.querySelector("#executiveDashboardScreen");

    if (root) {

        FRIENDExecutiveDashboard.mount(root);

    }

});

/*==========================================================
  Global Access
==========================================================*/

window.FRIENDExecutiveDashboard = FRIENDExecutiveDashboard;

/*==========================================================
  End executive-dashboard.js
==========================================================*/
