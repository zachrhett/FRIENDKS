/*==========================================================
  system-controller.js
  CLEAN SINGLE ENTRY POINT
==========================================================*/

"use strict";

const FRIENDSystemController = (() => {

let initialized = false;

/*==========================================================
  SYSTEM CONTROLLER (FIXED BOOT ORDER)
==========================================================*/

function boot(){

    if(initialized) return;

    console.log("[SYSTEM] SAFE BOOT START");

    // ======================================================
    // 1. WAIT FOR CORE LAYERS SAFETY CHECK
    // ======================================================

    if(!FRIENDStateStore || !FRIENDEventBus){

        console.warn("[SYSTEM] Core dependencies missing - retrying boot");

        setTimeout(boot, 250);

        return;

    }

    // ======================================================
    // 2. CORE INFRASTRUCTURE
    // ======================================================

    FRIENDModuleSync?.autoBind?.();

    FRIENDStateStore?.bindToEventBus?.();

    // ======================================================
    // 3. EVENT SYSTEM START
    // ======================================================

    FRIENDEventBus?.emit?.("system:boot:start");

    // ======================================================
    // 4. UI LAYER (SAFE INIT)
    // ======================================================

    if(FRIENDScreenRenderer?.init){

        FRIENDScreenRenderer.init();

    }

    if(FRIENDUIBindings?.init){

        FRIENDUIBindings.init();

    }

    // ======================================================
    // 5. ROUTER (AFTER UI EXISTS)
    // ======================================================

    FRIENDRouter?.safeNavigate?.("executive");

    // ======================================================
    // 6. LIVE SYSTEMS
    // ======================================================

    FRIENDRealtimeEngine?.start?.();

    FRIENDPerformanceMonitor?.start?.();

    initialized = true;

    FRIENDEventBus?.emit?.("system:boot:complete");

    console.log("[SYSTEM] SAFE BOOT COMPLETE");

}ot();
  FRIENDScreenRenderer.init();
});
