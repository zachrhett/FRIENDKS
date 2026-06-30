/*==========================================================
  ui-bindings.js
  PART 1 OF N
==========================================================*/

"use strict";

/*==========================================================
  F.R.I.E.N.D.
  UI BINDING LAYER
  Connects DOM → System Core
==========================================================*/

const FRIENDUIBindings = (() => {

const SELECTORS = {

    storeHealth: ".store-health",
    alerts: "#alertCount",
    maximo: "#maximoValue",
    district: "#districtValue",
    division: "#divisionValue",

    navButtons: ".friend-nav-button",

    screens: ".friend-screen"

};

/*==========================================================
  STATE → UI RENDER
==========================================================*/

function renderState(){

    const state = FRIENDStateStore?.getState?.();

    if(!state) return;

    const map = {

        storeHealth: state.storeHealth,
        alerts: state.alerts,
        maximo: state.maximo,
        district: state.district,
        division: state.division

    };

    Object.entries(map).forEach(([key,value]) => {

        const el = document.querySelector(SELECTORS[key]);

        if(el){

            el.textContent = value;

        }

    });

}
  /*==========================================================
  EVENT → UI UPDATES
==========================================================*/

function bindEvents(){

    if(!window.FRIENDEventBus) return false;

    FRIENDEventBus.on("state:updated", () => {

        renderState();

    });

    FRIENDEventBus.on("system:cycle", (data) => {

        if(data?.state){

            FRIENDStateStore.setState(data.state);

        }

        renderState();

    });

    return true;

}

/*==========================================================
  NAVIGATION WIRES
==========================================================*/

function bindNavigation(){

    const buttons =
        document.querySelectorAll(SELECTORS.navButtons);

    buttons.forEach(btn => {

        btn.addEventListener("click", () => {

            const target = btn.dataset.target;

            FRIENDRouter?.safeNavigate?.(target);

        });

    });

}
  /*==========================================================
  INITIALIZE UI SYSTEM
==========================================================*/

function init(){

    console.log("[UI] Binding UI to FRIEND system...");

    renderState();

    bindEvents();

    bindNavigation();

    FRIENDLogger?.info?.("UI bindings active");

}

/*==========================================================
  FORCE FULL REFRESH
==========================================================*/

function refresh(){

    renderState();

}

/*==========================================================
  PUBLIC API
==========================================================*/

return {

    init,
    renderState,
    refresh,
    bindEvents,
    bindNavigation

};

})();

/*==========================================================
  GLOBAL ACCESS
==========================================================*/

window.FRIENDUIBindings =
    FRIENDUIBindings;

/*==========================================================
  AUTO START HOOK
==========================================================*/

document.addEventListener("DOMContentLoaded", () => {

    FRIENDUIBindings.init();

});

/*==========================================================
  END ui-bindings.js
==========================================================*/
/*==========================================================
  EVENT → UI UPDATES
==========================================================*/

function bindEvents(){

    if(!window.FRIENDEventBus) return false;

    FRIENDEventBus.on("state:updated", () => {

        renderState();

    });

    FRIENDEventBus.on("system:cycle", (data) => {

        if(data?.state){

            FRIENDStateStore.setState(data.state);

        }

        renderState();

    });

    return true;

}

/*==========================================================
  NAVIGATION WIRES
==========================================================*/

function bindNavigation(){

    const buttons =
        document.querySelectorAll(SELECTORS.navButtons);

    buttons.forEach(btn => {

        btn.addEventListener("click", () => {

            const target = btn.dataset.target;

            FRIENDRouter?.safeNavigate?.(target);

        });

    });

}
/*==========================================================
  INITIALIZE UI SYSTEM
==========================================================*/

function init(){

    console.log("[UI] Binding UI to FRIEND system...");

    renderState();

    bindEvents();

    bindNavigation();

    FRIENDLogger?.info?.("UI bindings active");

}

/*==========================================================
  FORCE FULL REFRESH
==========================================================*/

function refresh(){

    renderState();

}

/*==========================================================
  PUBLIC API
==========================================================*/

return {

    init,
    renderState,
    refresh,
    bindEvents,
    bindNavigation

};

})();

/*==========================================================
  GLOBAL ACCESS
==========================================================*/

window.FRIENDUIBindings =
    FRIENDUIBindings;

/*==========================================================
  AUTO START HOOK
==========================================================*/

document.addEventListener("DOMContentLoaded", () => {

    FRIENDUIBindings.init();

});

/*==========================================================
  END ui-bindings.js
==========================================================*/
/*==========================================================
  ui-bindings.js
  PART 4 OF N
  DOM SCREEN MAPPING LAYER
==========================================================*/

"use strict";

/*==========================================================
  SCREEN RENDER ENGINE
==========================================================*/

function renderScreens(){

    const screens = document.querySelectorAll(".friend-screen");

    const state = FRIENDStateStore?.getState?.() || {};

    screens.forEach(screen => {

        const id = screen.id;

        switch(id){

            case "executiveDashboardScreen":

                renderExecutive(screen, state);

                break;

            case "storeScorecardScreen":

                renderScorecard(screen, state);

                break;

            case "analyticsScreen":

                renderAnalytics(screen, state);

                break;

            case "alertsScreen":

                renderAlerts(screen, state);

                break;

        }

    });

}

/*==========================================================
  EXECUTIVE DASHBOARD
==========================================================*/

function renderExecutive(root, state){

    const health = root.querySelector(".store-health-value");

    if(health) health.textContent = state.storeHealth ?? "--";

    const alerts = root.querySelector(".alert-count");

    if(alerts) alerts.textContent = state.alerts ?? "--";

}

/*==========================================================
  STORE SCORECARD
==========================================================*/

function renderScorecard(root, state){

    const maximo = root.querySelector(".maximo-value");

    if(maximo) maximo.textContent = state.maximo ?? "--";

    const district = root.querySelector(".district-value");

    if(district) district.textContent = state.district ?? "--";

    const division = root.querySelector(".division-value");

    if(division) division.textContent = state.division ?? "--";

}

/*==========================================================
  ANALYTICS SCREEN
==========================================================*/

function renderAnalytics(root, state){

    const chart = root.querySelector("canvas");

    if(chart && FRIENDCharts){

        FRIENDCharts.createBarChart(chart, [

            { value: state.storeHealth || 0, status: "good" },
            { value: state.alerts || 0, status: "warning" }

        ]);

    }

}

/*==========================================================
  ALERTS SCREEN
==========================================================*/

function renderAlerts(root, state){

    const container = root.querySelector(".alerts-list");

    if(!container || !FRIENDAlerts) return;

    const alerts = FRIENDAlerts.getAlerts?.() || [];

    container.innerHTML = alerts.map(a => `

        <div class="alert-item ${a.type}">

            <div class="title">${a.title}</div>
            <div class="msg">${a.message}</div>

        </div>

    `).join("");

}
