/*==========================================================
  app.js
  PART 1 OF N
==========================================================*/

"use strict";

/*==========================================================
  F.R.I.E.N.D.
  Core App Controller
  Version 1.0
==========================================================*/

const FRIENDApp = (() => {

let initialized = false;

let currentScreen = "executive";

function initialize(){

    if(initialized) return;

    FRIENDIntegration.initAll();

    FRIENDPermissions.setRole(
        FRIENDPermissions.ROLES.ASSOCIATE
    );

    FRIENDLogger.info("App initialized");

    initialized = true;

    return true;

}

function getState(){

    return {

        initialized,

        currentScreen

    };

}

return {

    initialize,
    getState

};

})();

/*==========================================================
  Global Access
==========================================================*/

window.FRIENDApp =
    FRIENDApp;

/*==========================================================
  End app.js
==========================================================*/
