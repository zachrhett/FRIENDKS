import { appData } from "../../data/app-data.js";

export function render() {

    const metrics = appData.metrics.executive;

    return `

<section class="screen executive-screen">

<header class="page-header">

<button class="back-button" data-screen="home">

← Home

</button>

<div>

<h1>Executive Dashboard</h1>

<p>
Division ${appData.store.division}
•
District ${appData.store.district}
•
Store ${appData.store.number}
</p>

</div>

</header>

<div class="dashboard-grid">

<div class="metric-card">

<h2>Store Health</h2>

<div class="metric-value">${metrics.storeHealth}</div>

<p>Overall Store Performance</p>

</div>

<div class="metric-card">

<h2>Mission Completion</h2>

<div class="metric-value">${metrics.missionCompletion}</div>

<p>Today's Completion Rate</p>

</div>

<div class="metric-card">

<h2>Open Alerts</h2>

<div class="metric-value">${metrics.alerts}</div>

<p>Priority Notifications</p>

</div>

<div class="metric-card">

<h2>Maximo</h2>

<div class="metric-value">${metrics.maximo}</div>

<p>Outstanding Work Orders</p>

</div>

</div>

<section class="mission-panel">

<h2>Priority Missions</h2>

${appData.missions.map(mission => `

<div class="mission-card">

<div>

<strong>${mission.title}</strong>

<br>

Owner: ${mission.owner}

<br>

Leader: ${mission.leader}

</div>

<div class="mission-status">

${mission.status}

</div>

</div>

`).join("")}

</section>

</section>

`;
}

export function afterRender(){

console.log("Executive Dashboard Loaded");

}
