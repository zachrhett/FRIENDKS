/*==========================================================
  maximo.js
  PART 1 OF N
==========================================================*/

"use strict";

const FRIENDMaximo = (() => {

const DATA = {

    title: "Maximo",

    openWorkOrders: 5,

    overdue: 1,

    completedToday: 12,

    completionRate: 96,

    workOrders: [

        {
            id: "WO-2418",
            asset: "Bakery Oven",
            priority: "High",
            owner: "Maintenance",
            status: "Open"
        },

        {
            id: "WO-2421",
            asset: "Seafood Cooler",
            priority: "Medium",
            owner: "Maintenance",
            status: "Assigned"
        },

        {
            id: "WO-2427",
            asset: "Deli Slicer",
            priority: "Critical",
            owner: "Maintenance",
            status: "Open"
        },

        {
            id: "WO-2432",
            asset: "Produce Case",
            priority: "Low",
            owner: "Maintenance",
            status: "Scheduled"
        },

        {
            id: "WO-2436",
            asset: "HVAC Unit",
            priority: "High",
            owner: "Maintenance",
            status: "In Progress"
        }

    ]

};

function render(){

    return `

    <section class="maximo-screen">

        <header class="maximo-header">

            <h2>${DATA.title}</h2>

            <div class="maximo-summary">

                ${DATA.openWorkOrders} Open Work Orders

            </div>

        </header>

        <div class="maximo-kpis">

            ${createKPI("Open",DATA.openWorkOrders)}

            ${createKPI("Overdue",DATA.overdue)}

            ${createKPI("Completed",DATA.completedToday)}

            ${createKPI("Completion",DATA.completionRate+"%")}

        </div>

        <div class="maximo-list">

            ${DATA.workOrders.map(createCard).join("")}

        </div>

    </section>

    `;

}

function createKPI(title,value){

return `

<div class="maximo-kpi">

<div class="maximo-kpi-value">

${value}

</div>

<div class="maximo-kpi-title">

${title}

</div>

</div>

`;

}

function createCard(order){

return `

<div
class="maximo-card ${order.priority.toLowerCase()}"
data-maximo-id="${order.id}">

<div class="maximo-card-title">

${order.asset}

</div>

<div class="maximo-card-id">

${order.id}

</div>

<div class="maximo-card-meta">

${order.priority}
•
${order.status}

</div>

</div>

`;

}

return{

DATA,
render

};

})();
/*==========================================================
  maximo.js
  PART 2 OF N
==========================================================*/

FRIENDMaximo.mount = function (
    target = "#maximoScreen"
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

FRIENDMaximo.bindEvents = function (
    root
) {

    root.querySelectorAll("[data-maximo-id]")
        .forEach(card => {

            card.addEventListener("click", () => {

                const id =
                    card.dataset.maximoId;

                const workOrder =
                    this.DATA.workOrders.find(
                        item => item.id === id
                    );

                if (workOrder) {

                    this.openWorkOrder(workOrder);

                }

            });

        });

};

/*==========================================================
  Work Order Detail
==========================================================*/

FRIENDMaximo.openWorkOrder = function (
    workOrder
) {

    const existing =
        document.querySelector(".maximo-overlay");

    if (existing) existing.remove();

    const overlay =
        document.createElement("div");

    overlay.className = "maximo-overlay";

    overlay.innerHTML = `

        <div class="maximo-modal">

            <div class="maximo-modal-header">

                <div>

                    <h2>${workOrder.asset}</h2>

                    <p>${workOrder.id}</p>

                </div>

                <button class="maximo-close">
                    ×
                </button>

            </div>

            <div class="maximo-modal-body">

                <div class="maximo-row">
                    <strong>Priority</strong>
                    <span>${workOrder.priority}</span>
                </div>

                <div class="maximo-row">
                    <strong>Status</strong>
                    <span>${workOrder.status}</span>
                </div>

                <div class="maximo-row">
                    <strong>Owner</strong>
                    <span>${workOrder.owner}</span>
                </div>

                <div class="maximo-description">

                    This work order is synchronized with
                    the F.R.I.E.N.D. operational platform.
                    Completion automatically updates
                    Store Health,
                    Guided Actions,
                    Executive Dashboard,
                    and operational analytics.

                </div>

            </div>

            <div class="maximo-modal-footer">

                <button>
                    Open Work Order
                </button>

                <button>
                    Close
                </button>

            </div>

        </div>

    `;

    document.body.appendChild(overlay);

    overlay
        .querySelector(".maximo-close")
        .addEventListener("click", () => overlay.remove());

    overlay
        .querySelectorAll(".maximo-modal-footer button")[1]
        .addEventListener("click", () => overlay.remove());

    overlay.addEventListener("click", event => {

        if (event.target === overlay) {

            overlay.remove();

        }

    });

};
