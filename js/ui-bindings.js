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
