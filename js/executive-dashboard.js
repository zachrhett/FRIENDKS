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
