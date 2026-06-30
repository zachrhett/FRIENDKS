/*==========================================================
  module-sync.js
  PART 1 OF N
==========================================================*/

"use strict";

/*==========================================================
  F.R.I.E.N.D.
  Module Sync Layer
  Phase 2 - System Integration
==========================================================*/

const FRIENDModuleSync = (() => {

const MODULES = {

    state: "FRIENDStateStore",
    events: "FRIENDEventBus",
    realtime: "FRIENDRealtimeEngine",
    storage: "FRIENDStorage",
    logger: "FRIENDLogger",
    api: "FRIENDAPI"

};

function checkModules(){

    return Object.entries(MODULES).map(([key, globalName]) => {

        return {

            module: key,

            loaded: !!window[globalName]

        };

    });

}

function getMissing(){

    return checkModules().filter(m => !m.loaded);

}

function status(){

    const missing = getMissing();

    return {

        total: Object.keys(MODULES).length,

        loaded: Object.keys(MODULES).length - missing.length,

        missing

    };

}

return {

    checkModules,
    getMissing,
    status

};

})();

/*==========================================================
  Global Access
==========================================================*/

window.FRIENDModuleSync =
    FRIENDModuleSync;

/*==========================================================
  End module-sync.js
==========================================================*/
/*==========================================================
  module-sync.js
  PART 2 OF N
==========================================================*/

/*==========================================================
  Auto Bind System
==========================================================*/

function autoBind(){

    const missing = getMissing();

    if(missing.length === 0){

        console.log("[ModuleSync] All modules loaded.");

        return true;

    }

    console.warn("[ModuleSync] Missing modules:", missing);

    return false;

}

/*==========================================================
  Safe Access Wrapper
==========================================================*/

function safeGet(moduleKey, method){

    const globalName = MODULES[moduleKey];

    const module = window[globalName];

    if(!module) return null;

    if(typeof module[method] !== "function") return null;

    return module[method].bind(module);

}

/*==========================================================
  Full System Snapshot
==========================================================*/

function snapshot(){

    return {

        modules: checkModules(),

        realtime: FRIENDRealtimeEngine?.status?.(),

        state: FRIENDStateStore?.getState?.(),

        timestamp: new Date()

    };

}
/*==========================================================
  module-sync.js
  PART 3 OF N
==========================================================*/

/*==========================================================
  Public API
==========================================================*/

return {

    checkModules,
    getMissing,
    status,
    autoBind,
    safeGet,
    snapshot

};

})();

/*==========================================================
  Global Access
==========================================================*/

window.FRIENDModuleSync =
    FRIENDModuleSync;

/*==========================================================
  End module-sync.js
==========================================================*/
