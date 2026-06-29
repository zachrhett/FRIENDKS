/*==========================================================
  app-integration.js
  PART 1 OF N
==========================================================*/

"use strict";

/*==========================================================
  F.R.I.E.N.D.
  App Integration Layer
  Version 1.0
==========================================================*/

const FRIENDIntegration = (() => {

function initAll(){

    if(window.FRIENDStorage) FRIENDStorage.getAll();

    if(window.FRIENDLogger) FRIENDLogger.info("System init");

    if(window.FRIENDSync) FRIENDSync.init?.();

    if(window.FRIENDOffline) FRIENDOffline.init?.();

    if(window.FRIENDPermissions) FRIENDPermissions.getRole();

    if(window.FRIENDMissionEngine) FRIENDMissionEngine.getAllMissions?.();

    if(window.FRIENDFoodSafety) FRIENDFoodSafety.summary?.();

    if(window.FRIENDInventory) FRIENDInventory.summary?.();

    if(window.FRIENDProduction) FRIENDProduction.summary?.();

    if(window.FRIENDShrink) FRIENDShrink.summary?.();

    if(window.FRIENDLabor) FRIENDLabor.summary?.();

    if(window.FRIENDOrdering) FRIENDOrdering.summary?.();

    if(window.FRIENDSafety) FRIENDSafety.summary?.();

    if(window.FRIENDFreshStart) FRIENDFreshStart.summary?.();

    if(window.FRIENDAlerts) FRIENDAlerts.summary?.();

    if(window.FRIENDReports) FRIENDReports.summary?.();

    console.log("F.R.I.E.N.D. modules initialized");

}

function healthCheck(){

    return {

        storage: !!window.FRIENDStorage,

        logger: !!window.FRIENDLogger,

        sync: !!window.FRIENDSync,

        offline: !!window.FRIENDOffline,

        missionEngine: !!window.FRIENDMissionEngine,

        ai: !!window.FRIENDAIEngine,

        updateManager: !!window.FRIENDUpdateManager

    };

}

return {

    initAll,
    healthCheck

};

})();

/*==========================================================
  Global Access
==========================================================*/

window.FRIENDIntegration =
    FRIENDIntegration;

/*==========================================================
  End app-integration.js
==========================================================*/
