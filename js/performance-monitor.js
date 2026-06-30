/*==========================================================
  performance-monitor.js
  PART 1 OF N
==========================================================*/

"use strict";

/*==========================================================
  F.R.I.E.N.D.
  Performance Monitor Layer
  Phase 2 - System Optimization
==========================================================*/

const FRIENDPerformanceMonitor = (() => {

const SNAPSHOT = {

    fps: 60,

    cpu: 22,

    memory: 38,

    renderTime: 7.2,

    networkLatency: 110,

    lastUpdated: new Date()

};

let interval = null;

function measure(){

    return {

        ...SNAPSHOT,

        timestamp: new Date()

    };

}

function update(partial = {}){

    Object.assign(SNAPSHOT, partial);

    SNAPSHOT.lastUpdated = new Date();

    return measure();

}

function start(intervalMs = 3000){

    if(interval) return;

    interval = setInterval(() => {

        tick();

    }, intervalMs);

}

function stop(){

    if(interval){

        clearInterval(interval);

        interval = null;

    }

}

function tick(){

    const state = FRIENDStateStore?.getState?.();

    if(!state) return;

    update({

        cpu: Math.floor(Math.random() * 40),

        memory: Math.floor(Math.random() * 50),

        fps: 55 + Math.floor(Math.random() * 10)

    });

}

return {

    measure,
    update,
    start,
    stop

};

})();

/*==========================================================
  Global Access
==========================================================*/

window.FRIENDPerformanceMonitor =
    FRIENDPerformanceMonitor;

/*==========================================================
  End performance-monitor.js
==========================================================*/
/*==========================================================
  performance-monitor.js
  PART 2 OF N
==========================================================*/

/*==========================================================
  Threshold Alerts
==========================================================*/

function evaluateHealth(){

    const data = measure();

    return {

        healthy:
            data.cpu < 80 &&
            data.memory < 80 &&
            data.fps >= 30,

        status:

            data.cpu > 85 ? "CRITICAL" :
            data.cpu > 70 ? "WARNING" :
            "OK",

        metrics: data

    };

}

/*==========================================================
  Force Refresh Snapshot
==========================================================*/

function refresh(){

    return tick();

}

/*==========================================================
  Bind to EventBus
==========================================================*/

function bindEventBus(){

    if(!window.FRIENDEventBus) return false;

    window.FRIENDEventBus.on("state:updated", () => {

        tick();

    });

    return true;

}
/*==========================================================
  performance-monitor.js
  PART 3 OF N
==========================================================*/

/*==========================================================
  Public API
==========================================================*/

return {

    measure,
    update,
    start,
    stop,
    evaluateHealth,
    refresh,
    bindEventBus

};

})();

/*==========================================================
  Global Access
==========================================================*/

window.FRIENDPerformanceMonitor =
    FRIENDPerformanceMonitor;

/*==========================================================
  End performance-monitor.js
==========================================================*/
