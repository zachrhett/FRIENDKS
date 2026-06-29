/*==========================================================
  guided-actions.js
  PART 1 OF N
==========================================================*/

"use strict";

const FRIENDGuidedActions = (() => {

const MISSIONS = [

{
    id:1,
    priority:"Critical",
    title:"Review Bakery Labor Efficiency",
    owner:"Jamie",
    department:"Bakery",
    due:"Today",
    estimatedTime:"12 min",
    impact:"Labor",
    status:"Open"
},

{
    id:2,
    priority:"High",
    title:"Verify Deli Production Plan",
    owner:"Joey",
    department:"Deli",
    due:"Today",
    estimatedTime:"8 min",
    impact:"Shrink",
    status:"In Progress"
},

{
    id:3,
    priority:"Medium",
    title:"Complete Temperature Validation",
    owner:"Alex",
    department:"Food Safety",
    due:"Ready",
    estimatedTime:"4 min",
    impact:"Compliance",
    status:"Ready"
},

{
    id:4,
    priority:"Medium",
    title:"Review Maximo Work Orders",
    owner:"Store Leader",
    department:"Maintenance",
    due:"Today",
    estimatedTime:"6 min",
    impact:"Maximo",
    status:"Open"
},

{
    id:5,
    priority:"Low",
    title:"Verify Customer Ready Standards",
    owner:"Department Leaders",
    department:"Store",
    due:"Today",
    estimatedTime:"10 min",
    impact:"Customer",
    status:"Scheduled"
}

];

function render(){

return `

<section class="guided-actions-screen">

<header class="guided-header">

<h2>Guided Actions</h2>

<div class="guided-count">

${MISSIONS.length} Active Missions

</div>

</header>

<div class="guided-mission-list">

${MISSIONS.map(createMissionCard).join("")}

</div>

</section>

`;

}

function createMissionCard(mission){

return `

<div
class="guided-mission ${mission.priority.toLowerCase()}"
data-guided-id="${mission.id}">

<div class="guided-priority">

${mission.priority}

</div>

<div class="guided-content">

<div class="guided-title">

${mission.title}

</div>

<div class="guided-owner">

${mission.owner}

</div>

<div class="guided-meta">

${mission.department}
•
${mission.estimatedTime}
•
${mission.status}

</div>

</div>

</div>

`;

}

return{

MISSIONS,
render

};

})();
/*==========================================================
  guided-actions.js
  PART 2 OF N
==========================================================*/

FRIENDGuidedActions.mount = function (
    target = "#guidedActionsScreen"
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

FRIENDGuidedActions.bindEvents = function (
    root
) {

    root.querySelectorAll("[data-guided-id]")
        .forEach(card => {

            card.addEventListener("click", () => {

                const id =
                    Number(card.dataset.guidedId);

                const mission =
                    this.MISSIONS.find(
                        item => item.id === id
                    );

                if (mission) {

                    this.openMission(mission);

                }

            });

        });

};

/*==========================================================
  Mission Detail
==========================================================*/

FRIENDGuidedActions.openMission = function (
    mission
) {

    const existing =
        document.querySelector(".guided-overlay");

    if (existing) existing.remove();

    const overlay =
        document.createElement("div");

    overlay.className = "guided-overlay";

    overlay.innerHTML = `

        <div class="guided-modal">

            <div class="guided-modal-header">

                <div>

                    <h2>${mission.title}</h2>

                    <p>${mission.department}</p>

                </div>

                <button class="guided-close">
                    ×
                </button>

            </div>

            <div class="guided-modal-body">

                <div class="guided-row">
                    <strong>Priority</strong>
                    <span>${mission.priority}</span>
                </div>

                <div class="guided-row">
                    <strong>Owner</strong>
                    <span>${mission.owner}</span>
                </div>

                <div class="guided-row">
                    <strong>Due</strong>
                    <span>${mission.due}</span>
                </div>

                <div class="guided-row">
                    <strong>Estimated Time</strong>
                    <span>${mission.estimatedTime}</span>
                </div>

                <div class="guided-row">
                    <strong>Business Impact</strong>
                    <span>${mission.impact}</span>
                </div>

                <div class="guided-description">

                    Complete this mission following
                    standard operating procedures.
                    Successful completion updates
                    the Store Health Score,
                    Leader Dashboard,
                    Alerts,
                    and Maximo integration.

                </div>

            </div>

            <div class="guided-modal-footer">

                <button class="guided-start">
                    Start Mission
                </button>

                <button class="guided-complete">
                    Complete
                </button>

            </div>

        </div>

    `;

    document.body.appendChild(overlay);

    overlay
        .querySelector(".guided-close")
        .addEventListener("click", () => overlay.remove());

    overlay.addEventListener("click", e => {

        if (e.target === overlay) {

            overlay.remove();

        }

    });

};
