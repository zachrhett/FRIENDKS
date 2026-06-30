/*==========================================================
  system-launch.js
  PART 1 OF N
==========================================================*/

"use strict";

/*==========================================================
  F.R.I.E.N.D.
  SYSTEM LAUNCH CONTROLLER
  PHASE 2 → FINALIZATION SEQUENCE
==========================================================*/

const FRIENDSystemLaunch = (() => {

function launch(){

    console.log("[LAUNCH] Initializing F.R.I.E.N.D. FULL SYSTEM");

    const bootstrap =
        FRIENDBootstrap?.safeInitialize?.();

    const health =
        FRIENDModuleHealth?.report?.();

    const stability =
        FRIENDFinalCheck?.stabilityScore?.();

    const ai =
        FRIENDAIOrchestrator?.run?.();

    const state =
        FRIENDStateStore?.getState?.();

    if(stability?.status === "CRITICAL"){

        console.error("[LAUNCH] System unstable");

    }

    return {

        boot: bootstrap,

        health,

        stability,

        ai,

        state,

        timestamp: new Date()

    };

}

function restart(){

    FRIENDLogger?.warn?.("System restart triggered");

    FRIENDRealtimeEngine?.stop?.();

    FRIENDSync?.clearQueue?.();

    return launch();

}

function shutdown(){

    FRIENDLogger?.warn?.("System shutdown");

    FRIENDRealtimeEngine?.stop?.();

    FRIENDSync?.clearQueue?.();

    FRIENDStateStore?.reset?.();

    return true;

}

return {

    launch,
    restart,
    shutdown

};

})();

/*==========================================================
  Global Access
==========================================================*/

window.FRIENDSystemLaunch =
    FRIENDSystemLaunch;

/*==========================================================
  End system-launch.js
==========================================================*/
/*==========================================================
  system-launch.js
  PART 2 OF N
==========================================================*/

/*==========================================================
  Safe Launch Wrapper
==========================================================*/

function safeLaunch(){

    try{

        const result = launch();

        FRIENDLogger?.info?.("System launched successfully", {
            stability: result?.stability?.status
        });

        return result;

    } catch(err){

        console.error("[LAUNCH ERROR]", err);

        FRIENDLogger?.error?.("Launch failure", {
            error: err.message
        });

        return {

            success: false,

            error: err.message,

            timestamp: new Date()

        };

    }

}

/*==========================================================
  Auto Launch
==========================================================*/

function autoLaunch(){

    document.addEventListener("DOMContentLoaded", () => {

        safeLaunch();

    });

}

/*==========================================================
  Emergency Stop
==========================================================*/

function emergencyStop(){

    FRIENDLogger?.error?.("EMERGENCY STOP ACTIVATED");

    FRIENDRealtimeEngine?.stop?.();

    FRIENDSync?.clearQueue?.();

    FRIENDEventBus?.clear?.();

    return {

        stopped: true,

        timestamp: new Date()

    };

}
/*==========================================================
  system-launch.js
  PART 3 OF N
==========================================================*/

/*==========================================================
  Public API
==========================================================*/

return {

    launch,
    safeLaunch,
    autoLaunch,
    restart,
    shutdown,
    emergencyStop

};

})();

/*==========================================================
  Global Access
==========================================================*/

window.FRIENDSystemLaunch =
    FRIENDSystemLaunch;

/*==========================================================
  End system-launch.js
==========================================================*/
