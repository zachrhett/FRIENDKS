/*==========================================================
  diagnostics.js
  PART 1 OF N
==========================================================*/

"use strict";

/*==========================================================
  F.R.I.E.N.D.
  Diagnostics Engine
  Version 1.0
==========================================================*/

const FRIENDDiagnostics = (() => {

const STATE = {

    health: "OK",

    uptimeStart: new Date(),

    errors: 0,

    warnings: 0,

    lastCheck: null

};

function runSelfCheck(){

    STATE.lastCheck = new Date();

    return {

        health: STATE.health,

        errors: STATE.errors,

        warnings: STATE.warnings,

        uptimeMs: Date.now() - STATE.uptimeStart.getTime()

    };

}

function recordError(message){

    STATE.errors++;

    return {

        logged:true,

        message

    };

}

function recordWarning(message){

    STATE.warnings++;

    return {

        logged:true,

        message

    };

}

return {

    runSelfCheck,
    recordError,
    recordWarning

};

})();

/*==========================================================
  Global Access
==========================================================*/

window.FRIENDDiagnostics =
    FRIENDDiagnostics;

/*==========================================================
  End diagnostics.js
==========================================================*/
