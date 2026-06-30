/*==========================================================
  final-system-check.js
  PART 1 OF N
==========================================================*/

"use strict";

/*==========================================================
  F.R.I.E.N.D.
  Final System Check Layer
  Phase 2 Completion Validation
==========================================================*/

const FRIENDFinalCheck = (() => {

function run(){

    const modules = FRIENDModuleHealth?.report?.();

    const state = FRIENDStateStore?.getState?.();

    const events = FRIENDModuleSync?.status?.();

    const realtime = FRIENDRealtimeEngine?.status?.();

    const ai = FRIENDAIOrchestrator?.run?.();

    return {

        systemHealthy: modules?.healthy ?? false,

        modules,

        state,

        sync: events,

        realtime,

        ai,

        timestamp: new Date()

    };

}

function quickCheck(){

    return {

        modulesOK: FRIENDModuleHealth?.isHealthy?.() ?? false,

        stateOK: !!FRIENDStateStore?.getState?.(),

        eventsOK: !!FRIENDEventBus,

        realtimeOK: FRIENDRealtimeEngine?.isActive?.() ?? false

    };

}

return {

    run,
    quickCheck

};

})();

/*==========================================================
  Global Access
==========================================================*/

window.FRIENDFinalCheck =
    FRIENDFinalCheck;

/*==========================================================
  End final-system-check.js
==========================================================*/
/*==========================================================
  final-system-check.js
  PART 2 OF N
==========================================================*/

/*==========================================================
  Stability Score
==========================================================*/

function stabilityScore(){

    const check = quickCheck();

    let score = 0;

    if(check.modulesOK) score += 25;

    if(check.stateOK) score += 25;

    if(check.eventsOK) score += 25;

    if(check.realtimeOK) score += 25;

    return {

        score,

        status:

            score === 100 ? "STABLE" :
            score >= 75 ? "DEGRADED" :
            score >= 50 ? "UNSTABLE" : "CRITICAL"

    };

}

/*==========================================================
  Full Diagnostic Dump
==========================================================*/

function dump(){

    return {

        runtime: run(),

        stability: stabilityScore(),

        memory: performance?.memory || null,

        userAgent: navigator.userAgent,

        timestamp: new Date()

    };

}

/*==========================================================
  Watch Mode
==========================================================*/

function watch(interval = 5000){

    setInterval(() => {

        const report = stabilityScore();

        console.log("[FRIEND CHECK]", report);

    }, interval);

}
/*==========================================================
  final-system-check.js
  PART 2 OF N
==========================================================*/

/*==========================================================
  Stability Score
==========================================================*/

function stabilityScore(){

    const check = quickCheck();

    let score = 0;

    if(check.modulesOK) score += 25;

    if(check.stateOK) score += 25;

    if(check.eventsOK) score += 25;

    if(check.realtimeOK) score += 25;

    return {

        score,

        status:

            score === 100 ? "STABLE" :
            score >= 75 ? "DEGRADED" :
            score >= 50 ? "UNSTABLE" : "CRITICAL"

    };

}

/*==========================================================
  Full Diagnostic Dump
==========================================================*/

function dump(){

    return {

        runtime: run(),

        stability: stabilityScore(),

        memory: performance?.memory || null,

        userAgent: navigator.userAgent,

        timestamp: new Date()

    };

}

/*==========================================================
  Watch Mode
==========================================================*/

function watch(interval = 5000){

    setInterval(() => {

        const report = stabilityScore();

        console.log("[FRIEND CHECK]", report);

    }, interval);

}
