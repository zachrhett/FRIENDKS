/*==========================================================
  update-manager.js
  PART 1 OF N
==========================================================*/

"use strict";

/*==========================================================
  F.R.I.E.N.D.
  Update Manager
  Version 1.0
==========================================================*/

const FRIENDUpdateManager = (() => {

const STATE = {

    version: "1.0.0",

    latestVersion: "1.0.0",

    updateAvailable: false,

    checking: false,

    lastChecked: null

};

function checkForUpdates(){

    STATE.checking = true;

    STATE.lastChecked = new Date();

    return new Promise(resolve => {

        setTimeout(() => {

            STATE.checking = false;

            STATE.updateAvailable =
                STATE.latestVersion !== STATE.version;

            resolve(STATE);

        }, 800);

    });

}

function getStatus(){

    return {

        ...STATE

    };

}

return {

    checkForUpdates,
    getStatus

};

})();

/*==========================================================
  Global Access
==========================================================*/

window.FRIENDUpdateManager =
    FRIENDUpdateManager;

/*==========================================================
  End update-manager.js
==========================================================*/
/*==========================================================
  update-manager.js
  PART 2 OF N
==========================================================*/

/*==========================================================
  Apply Update
==========================================================*/

function applyUpdate(){

    if(!STATE.updateAvailable){

        return {

            success:false,

            message:"No update available"

        };

    }

    STATE.version = STATE.latestVersion;

    STATE.updateAvailable = false;

    return {

        success:true,

        version:STATE.version,

        timestamp:new Date()

    };

}

/*==========================================================
  Force Version Set (Dev Mode)
==========================================================*/

function setVersion(version){

    STATE.version = version;

    return STATE.version;

}
