/*==========================================================
  module-health.js
  PART 1 OF N
==========================================================*/

"use strict";

/*==========================================================
  F.R.I.E.N.D.
  Module Health Monitor
  Phase 2 - System Integrity Layer
==========================================================*/

const FRIENDModuleHealth = (() => {

const CRITICAL_MODULES = [

    "FRIENDStateStore",
    "FRIENDEventBus",
    "FRIENDRealtimeEngine",
    "FRIENDMissionEngine",
    "FRIENDAIOrchestrator",
    "FRIENDRecommendationEngine"

];

function check(){

    return CRITICAL_MODULES.map(name => {

        const loaded = !!window[name];

        return {

            module: name,

            loaded,

            status: loaded ? "OK" : "MISSING"

        };

    });

}

function isHealthy(){

    return check().every(m => m.loaded);

}

return {

    check,
    isHealthy

};

})();

/*==========================================================
  Global Access
==========================================================*/

window.FRIENDModuleHealth =
    FRIENDModuleHealth;

/*==========================================================
  End module-health.js
==========================================================*/
/*==========================================================
  module-health.js
  PART 2 OF N
==========================================================*/

/*==========================================================
  Health Report
==========================================================*/

function report(){

    const results = check();

    const missing = results.filter(m => !m.loaded);

    return {

        healthy: missing.length === 0,

        total: results.length,

        loaded: results.length - missing.length,

        missing,

        timestamp: new Date()

    };

}

/*==========================================================
  Auto Repair Hook (soft fail handling)
==========================================================*/

function autoRepair(){

    const missing = check().filter(m => !m.loaded);

    if(missing.length > 0){

        console.warn("[ModuleHealth] Missing modules detected:", missing);

        return false;

    }

    return true;

}
/*==========================================================
  module-health.js
  PART 3 OF N
==========================================================*/

/*==========================================================
  Public API
==========================================================*/

return {

    check,
    isHealthy,
    report,
    autoRepair

};

})();

/*==========================================================
  Global Access
==========================================================*/

window.FRIENDModuleHealth =
    FRIENDModuleHealth;

/*==========================================================
  End module-health.js
==========================================================*/
