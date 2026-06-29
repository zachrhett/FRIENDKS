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
