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
