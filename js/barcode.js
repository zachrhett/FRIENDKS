/*==========================================================
  barcode.js
  PART 1 OF N
==========================================================*/

"use strict";

/*==========================================================
  F.R.I.E.N.D.
  Barcode Engine
  Version 1.0
==========================================================*/

const FRIENDBarcode = (() => {

let lastScan = null;

let scanHistory = [];

function scan(code){

    const entry = {

        code,
        timestamp: new Date(),

        valid: validate(code)

    };

    lastScan = entry;

    scanHistory.push(entry);

    return entry;

}

function validate(code){

    if(!code) return false;

    return String(code).length >= 6;

}

function getLastScan(){

    return lastScan;

}

function getHistory(){

    return [...scanHistory];

}

return {

    scan,
    validate,
    getLastScan,
    getHistory

};

})();

/*==========================================================
  Global Access
==========================================================*/

window.FRIENDBarcode =
    FRIENDBarcode;

/*==========================================================
  End barcode.js
==========================================================*/
