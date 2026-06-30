/*==========================================================
  system-controller.js
  CLEAN SINGLE ENTRY POINT
==========================================================*/

"use strict";

const FRIENDSystemController = (() => {

let initialized = false;

function boot(){

    if(initialized) return;

    console.log("[SYSTEM] CLEAN BOOT START");

    // 1. Core systems first
    FRIENDModuleSync?.autoBind?.();
    FRIENDStateStore?.bindToEventBus?.();

    // 2. Event system
    FRIENDEventBus?.emit?.("system:boot:start");

    // 3. UI
    FRIENDScreenRenderer?.init?.();

    // 4. Router default screen
    FRIENDRouter?.safeNavigate?.("executive");

    // 5. Realtime systems
    FRIENDRealtimeEngine?.start?.();
    FRIENDPerformanceMonitor?.start?.();

    initialized = true;

    FRIENDEventBus?.emit?.("system:boot:complete");

    console.log("[SYSTEM] CLEAN BOOT COMPLETE");

}

function shutdown(){

    FRIENDRealtimeEngine?.stop?.();
    FRIENDPerformanceMonitor?.stop?.();
    FRIENDSync?.clearQueue?.();
    FRIENDStateStore?.reset?.();

    initialized = false;

}

function restart(){

    shutdown();
    boot();

}

function status(){

    return {

        initialized,
        state: FRIENDStateStore?.getState?.()

    };

}

return {

    boot,
    shutdown,
    restart,
    status

};

})();

/* GLOBAL */
window.FRIENDSystemController = FRIENDSystemController;

/* AUTO START (ONLY HERE) */
document.addEventListener("DOMContentLoaded", () => {
    FRIENDSystemController.boot();
  FRIENDScreenRenderer.init();
});
