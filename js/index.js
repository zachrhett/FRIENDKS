/*==========================================================
  index.js
  FINAL ENTRY POINT
==========================================================*/

"use strict";

/*==========================================================
  F.R.I.E.N.D.
  MASTER ENTRY CONTROLLER
==========================================================*/

(function(){

function start(){

    console.log("[FRIEND] SYSTEM STARTING...");

    FRIENDBootstrap?.safeInitialize?.();

    FRIENDModuleSync?.autoBind?.();

    FRIENDStateStore?.bindToEventBus?.();

    FRIENDRealtimeEngine?.start?.();

    FRIENDPerformanceMonitor?.start?.();

    FRIENDFinalLaunchSequence?.safeExecute?.();

    FRIENDSystemOrchestrator?.startMonitoring?.();

    FRIENDLogger?.info?.("F.R.I.E.N.D. FULL SYSTEM ONLINE");

}

function shutdown(){

    FRIENDRealtimeEngine?.stop?.();

    FRIENDPerformanceMonitor?.stop?.();

    FRIENDSync?.clearQueue?.();

    FRIENDStateStore?.reset?.();

    FRIENDLogger?.warn?.("SYSTEM SHUTDOWN");

}

function restart(){

    shutdown();

    return start();

}

/*==========================================================
  AUTO BOOT
==========================================================*/

document.addEventListener("DOMContentLoaded", start);

/*==========================================================
  GLOBAL ACCESS
==========================================================*/

window.FRIENDSystem =
    {

        start,
        shutdown,
        restart

    };

})();

/*==========================================================
  END INDEX.JS (SYSTEM COMPLETE)
==========================================================*/
