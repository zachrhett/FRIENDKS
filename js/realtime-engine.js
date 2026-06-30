/*==========================================================
  realtime-engine.js
  PART 1 OF N
==========================================================*/

"use strict";

/*==========================================================
  F.R.I.E.N.D.
  Real-Time Engine
  Phase 2 - Live System Updates
==========================================================*/

const FRIENDRealtimeEngine = (() => {

let interval = null;

let active = false;

const CONFIG = {

    refreshRate: 3000

};

function start(){

    if(active) return;

    active = true;

    interval = setInterval(() => {

        tick();

    }, CONFIG.refreshRate);

}

function stop(){

    active = false;

    if(interval){

        clearInterval(interval);

        interval = null;

    }

}

function tick(){

    const state =
        FRIENDStateStore?.getState?.();

    if(!state) return;

    FRIENDStateStore.setState({

        storeHealth: state.storeHealth,
        alerts: state.alerts,
        maximo: state.maximo,
        lastUpdated: new Date()

    });

}

function isActive(){

    return active;

}

return {

    start,
    stop,
    isActive

};

})();

/*==========================================================
  Global Access
==========================================================*/

window.FRIENDRealtimeEngine =
    FRIENDRealtimeEngine;

/*==========================================================
  End realtime-engine.js
==========================================================*/
/*==========================================================
  realtime-engine.js
  PART 2 OF N
==========================================================*/

/*==========================================================
  Event Sync Bridge
==========================================================*/

function bindEventBus(){

    if(!window.FRIENDEventBus) return false;

    window.FRIENDEventBus.on("state:updated", (data) => {

        if(!active) return;

        console.log("[Realtime] State update received", data);

    });

    return true;

}

/*==========================================================
  Manual Tick
==========================================================*/

function forceTick(){

    tick();

    return true;

}

/*==========================================================
  Health Check
==========================================================*/

function status(){

    return {

        active,

        refreshRate: CONFIG.refreshRate,

        intervalExists: !!interval

    };

}
/*==========================================================
  realtime-engine.js
  PART 3 OF N
==========================================================*/

/*==========================================================
  Public API
==========================================================*/

return {

    start,
    stop,
    isActive,
    bindEventBus,
    forceTick,
    status

};

})();

/*==========================================================
  Global Access
==========================================================*/

window.FRIENDRealtimeEngine =
    FRIENDRealtimeEngine;

/*==========================================================
  End realtime-engine.js
==========================================================*/
