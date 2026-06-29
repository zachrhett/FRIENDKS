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
/*==========================================================
  app.js
  PART 2 OF N
==========================================================*/

/*==========================================================
  Screen Navigation
==========================================================*/

function navigate(screen){

    currentScreen = screen;

    FRIENDLogger.info("Navigated", { screen });

    const screens = document.querySelectorAll(".friend-screen");

    screens.forEach(s => s.style.display = "none");

    const active =
        document.querySelector("#" + screen + "Screen");

    if(active){

        active.style.display = "block";

    }

    return currentScreen;

}

/*==========================================================
  Reload App State
==========================================================*/

function reload(){

    initialized = false;

    return initialize();

}

/*==========================================================
  Get Current Screen
==========================================================*/

function getCurrentScreen(){

    return currentScreen;

}
/*==========================================================
  app.js
  PART 3 OF N
==========================================================*/

/*==========================================================
  Public API
==========================================================*/

return {

    initialize,
    navigate,
    reload,
    getState,
    getCurrentScreen

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
