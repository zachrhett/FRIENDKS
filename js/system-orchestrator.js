/*==========================================================
  system-orchestrator.js
  PART 1 OF N
==========================================================*/

"use strict";

/*==========================================================
  F.R.I.E.N.D.
  System Orchestrator
  FINAL PHASE - FULL INTEGRATION LAYER
==========================================================*/

const FRIENDSystemOrchestrator = (() => {

function initialize(){

    console.log("[ORCHESTRATOR] Initializing full system...");

    FRIENDModuleSync?.autoBind?.();

    FRIENDStateStore?.bindToEventBus?.();

    FRIENDRealtimeEngine?.bindEventBus?.();

    FRIENDPerformanceMonitor?.bindEventBus?.();

    FRIENDSystemLaunch?.safeLaunch?.();

    FRIENDLogger?.info?.("System orchestrator initialized");

    return {

        status: "ACTIVE",

        timestamp: new Date()

    };

}

function runHealthCycle(){

    const system =
        FRIENDFinalCheck?.run?.();

    const performance =
        FRIENDPerformanceMonitor?.evaluateHealth?.();

    const modules =
        FRIENDModuleHealth?.report?.();

    return {

        system,

        performance,

        modules,

        timestamp: new Date()

    };

}

return {

    initialize,
    runHealthCycle

};

})();

/*==========================================================
  Global Access
==========================================================*/

window.FRIENDSystemOrchestrator =
    FRIENDSystemOrchestrator;

/*==========================================================
  End system-orchestrator.js
==========================================================*/
/*==========================================================
  system-orchestrator.js
  PART 2 OF N
==========================================================*/

/*==========================================================
  Continuous Monitoring Loop
==========================================================*/

let cycleInterval = null;

function startMonitoring(intervalMs = 5000){

    if(cycleInterval) return;

    cycleInterval = setInterval(() => {

        const report = runHealthCycle();

        console.log("[ORCHESTRATOR CYCLE]", report);

        FRIENDEventBus?.emit?.("system:cycle", report);

    }, intervalMs);

}

/*==========================================================
  Stop Monitoring
==========================================================*/

function stopMonitoring(){

    if(cycleInterval){

        clearInterval(cycleInterval);

        cycleInterval = null;

    }

}

/*==========================================================
  Emergency Rebalance
==========================================================*/

function rebalance(){

    FRIENDLogger?.warn?.("System rebalance triggered");

    FRIENDStateStore?.reset?.();

    FRIENDSync?.clearQueue?.();

    FRIENDRealtimeEngine?.stop?.();

    return initialize();

}
/*==========================================================
  system-orchestrator.js
  PART 3 OF N
==========================================================*/

/*==========================================================
  Public API
==========================================================*/

return {

    initialize,
    runHealthCycle,
    startMonitoring,
    stopMonitoring,
    rebalance

};

})();

/*==========================================================
  Global Access
==========================================================*/

window.FRIENDSystemOrchestrator =
    FRIENDSystemOrchestrator;

/*==========================================================
  End system-orchestrator.js
==========================================================*/
