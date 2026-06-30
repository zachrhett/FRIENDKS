/*==========================================================
  system-controller.js
  FINAL CONTROL LAYER
==========================================================*/

"use strict";

const FRIENDSystemController = (() => {

let initialized = false;

/*==========================================================
  BOOT SEQUENCE (ORDER IS EVERYTHING)
==========================================================*/

function boot(){

    if(initialized) return;

    console.log("[SYSTEM] Boot sequence starting...");

    // 1. Core infrastructure first
    FRIENDModuleSync?.autoBind?.();

    FRIENDStateStore?.bindToEventBus?.();

    // 2. Event system
    FRIENDEventBus?.emit?.("system:boot:start");

    // 3. UI renderer
    FRIENDScreenRenderer?.init?.();

    // 4. Router
    FRIENDRouter?.safeNavigate?.("executive");

    // 5. Realtime engine
    FRIENDRealtimeEngine?.start?.();

    // 6. Performance monitor
    FRIENDPerformanceMonitor?.start?.();

    initialized = true;

    FRIENDEventBus?.emit?.("system:boot:complete");

    console.log("[SYSTEM] Boot complete");

}

/*==========================================================
  SHUTDOWN
==========================================================*/

function shutdown(){

    FRIENDRealtimeEngine?.stop?.();

    FRIENDPerformanceMonitor?.stop?.();

    FRIENDSync?.clearQueue?.();

    FRIENDStateStore?.reset?.();

    initialized = false;

    console.log("[SYSTEM] Shutdown complete");

}

/*==========================================================
  RESTART
==========================================================*/

function restart(){

    shutdown();

    boot();

}

/*==========================================================
  STATUS
==========================================================*/

function status(){

    return {

        initialized,

        state: FRIENDStateStore?.getState?.(),

        modules: FRIENDModuleSync?.status?.()

    };

}

return {

    boot,
    shutdown,
    restart,
    status

};

})();

window.FRIENDSystemController =
    FRIENDSystemController;
