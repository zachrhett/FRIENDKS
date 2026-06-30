/*==========================================================
  system-bootstrap.js
  PART 1 OF N
==========================================================*/

"use strict";

/*==========================================================
  F.R.I.E.N.D.
  System Bootstrap Layer
  Phase 2 Final Integration
==========================================================*/

const FRIENDBootstrap = (() => {

function initializeSystem(){

    console.log("[BOOTSTRAP] Initializing F.R.I.E.N.D. System...");

    const checks = FRIENDModuleHealth?.report?.();

    if(!checks?.healthy){

        console.warn("[BOOTSTRAP] System missing modules:", checks?.missing);

    }

    FRIENDStateStore?.bindToEventBus?.();

    FRIENDRealtimeEngine?.bindEventBus?.();

    FRIENDRealtimeEngine?.start?.();

    FRIENDIntegration?.boot?.();

    FRIENDLogger?.info?.("System boot complete");

    return {

        success: true,

        health: checks,

        timestamp: new Date()

    };

}

function shutdownSystem(){

    FRIENDRealtimeEngine?.stop?.();

    FRIENDSync?.clearQueue?.();

    FRIENDLogger?.warn?.("System shutdown initiated");

    return true;

}

return {

    initializeSystem,
    shutdownSystem

};

})();

/*==========================================================
  Global Access
==========================================================*/

window.FRIENDBootstrap =
    FRIENDBootstrap;

/*==========================================================
  End system-bootstrap.js
==========================================================*/
/*==========================================================
  system-bootstrap.js
  PART 2 OF N
==========================================================*/

/*==========================================================
  Safe Startup Wrapper
==========================================================*/

function safeInitialize(){

    try{

        const result = initializeSystem();

        if(result?.health?.healthy === false){

            FRIENDLogger?.warn?.(
                "Bootstrap completed with missing modules",
                result.health
            );

        }

        return result;

    } catch(err){

        console.error("[BOOTSTRAP ERROR]", err);

        FRIENDLogger?.error?.("Bootstrap failure", {

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
  Auto Start Hook
==========================================================*/

function autoStart(){

    document.addEventListener("DOMContentLoaded", () => {

        safeInitialize();

    });

}

/*==========================================================
  Recovery Mode
==========================================================*/

function recoveryMode(){

    console.warn("[BOOTSTRAP] Entering recovery mode");

    FRIENDStateStore?.reset?.();

    FRIENDSync?.clearQueue?.();

    FRIENDLogger?.warn?.("Recovery mode activated");

    return true;

}
/*==========================================================
  system-bootstrap.js
  PART 3 OF N
==========================================================*/

/*==========================================================
  Public API
==========================================================*/

return {

    initializeSystem,
    safeInitialize,
    autoStart,
    shutdownSystem,
    recoveryMode

};

})();

/*==========================================================
  Global Access
==========================================================*/

window.FRIENDBootstrap =
    FRIENDBootstrap;

/*==========================================================
  End system-bootstrap.js
==========================================================*/
