/*==========================================================
  app.js
  PART 1 OF N
==========================================================*/

"use strict";

/*==========================================================
  F.R.I.E.N.D. Version 1.0
  Application Bootstrap
==========================================================*/

const FRIENDApp = (() => {

const VERSION = "1.0";

const CONFIG = {

    store: 129,

    district: 2,

    division: 620,

    application: "F.R.I.E.N.D.",

    device: "TC-52"

};

let initialized = false;

/*==========================================================
  Initialize Modules
==========================================================*/

function initialize(){

    if(initialized) return;

    initialized = true;

    if(window.FRIENDRouter){

        FRIENDRouter.initialize();

    }

    console.log(
        `${CONFIG.application} v${VERSION} initialized`
    );

}

/*==========================================================
  Refresh Entire Application
==========================================================*/

function refresh(){

    if(window.FRIENDScorecard){

        FRIENDScorecard.refresh();

    }

    if(window.FRIENDAnalytics){

        FRIENDAnalytics.refresh();

    }

    if(window.FRIENDLeaderFocus){

        FRIENDLeaderFocus.refresh();

    }

    if(window.FRIENDGuidedActions){

        FRIENDGuidedActions.refresh();

    }

    if(window.FRIENDMaximo){

        FRIENDMaximo.refresh();

    }

    if(window.FRIENDExecutiveDashboard){

        FRIENDExecutiveDashboard.refresh();

    }

    if(window.FRIENDExecutiveAI){

        FRIENDExecutiveAI.refresh();

    }

}

/*==========================================================
  Public API
==========================================================*/

return{

    VERSION,
    CONFIG,
    initialize,
    refresh

};

})();
/*==========================================================
  app.js
  PART 2 OF N
==========================================================*/

/*==========================================================
  Application Ready
==========================================================*/

document.addEventListener("DOMContentLoaded", () => {

    FRIENDApp.initialize();

});

/*==========================================================
  Global Access
==========================================================*/

window.FRIENDApp = FRIENDApp;

/*==========================================================
  End app.js
==========================================================*/
