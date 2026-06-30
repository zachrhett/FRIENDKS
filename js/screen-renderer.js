/*==========================================================
  screen-renderer.js
  PART 1 OF N
==========================================================*/

"use strict";

/*==========================================================
  F.R.I.E.N.D.
  SCREEN RENDERER LAYER
  Connects State → Visible UI
==========================================================*/

const FRIENDScreenRenderer = (() => {

function getState(){

    return FRIENDStateStore?.getState?.() || {};

}

/*==========================================================
  EXECUTIVE DASHBOARD
==========================================================*/

function renderExecutive(){

    const state = getState();

    const root =
        document.getElementById("executiveDashboardScreen");

    if(!root) return;

    root.innerHTML = `

        <div class="card">
            <h2>Store Health</h2>
            <div class="store-health">${state.storeHealth ?? "--"}</div>
        </div>

        <div class="card">
            <h2>Alerts</h2>
            <div>${state.alerts ?? "--"}</div>
        </div>

        <div class="card">
            <h2>Maximo Status</h2>
            <div>${state.maximo ?? "--"}</div>
        </div>

    `;

}
  /*==========================================================
  STORE SCORECARD
==========================================================*/

function renderScorecard(){

    const state = getState();

    const root =
        document.getElementById("storeScorecardScreen");

    if(!root) return;

    root.innerHTML = `

        <div class="card">
            <h2>District</h2>
            <div>${state.district ?? "--"}</div>
        </div>

        <div class="card">
            <h2>Division</h2>
            <div>${state.division ?? "--"}</div>
        </div>

    `;

}

/*==========================================================
  ANALYTICS
==========================================================*/

function renderAnalytics(){

    const state = getState();

    const root =
        document.getElementById("analyticsScreen");

    if(!root) return;

    root.innerHTML = `

        <div class="card">
            <h2>Performance Overview</h2>
            <div>Health: ${state.storeHealth ?? "--"}</div>
            <div>Alerts: ${state.alerts ?? "--"}</div>
        </div>

    `;

}
  /*==========================================================
  ALERTS SCREEN
==========================================================*/

function renderAlerts(){

    const state = getState();

    const root =
        document.getElementById("notificationsScreen");

    if(!root) return;

    const alerts =
        FRIENDAlerts?.getAlerts?.() || [];

    root.innerHTML = alerts.map(a => `

        <div class="card ${a.type}">
            <h3>${a.title}</h3>
            <p>${a.message}</p>
        </div>

    `).join("");

}

/*==========================================================
  MASTER RENDER
==========================================================*/

function renderAll(){

    renderExecutive();

    renderScorecard();

    renderAnalytics();

    renderAlerts();

}

/*==========================================================
  LIVE BINDING
==========================================================*/

function init(){

    renderAll();

    FRIENDStateStore?.subscribe?.("state", renderAll);

    FRIENDEventBus?.on?.("state:updated", renderAll);

    console.log("[UI] Screen renderer active");

}

/*==========================================================
  PUBLIC API
==========================================================*/

return {

    init,
    renderAll

};

})();

/*==========================================================
  GLOBAL
==========================================================*/

window.FRIENDScreenRenderer =
    FRIENDScreenRenderer;
