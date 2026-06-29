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
/*==========================================================
  barcode.js
  PART 2 OF N
==========================================================*/

/*==========================================================
  Scan Analysis
==========================================================*/

function analyzeLastScan(){

    if(!lastScan) return null;

    return {

        code: lastScan.code,

        valid: lastScan.valid,

        riskLevel: lastScan.valid ? "Low" : "High",

        recommendation: lastScan.valid
            ? "Accept item"
            : "Re-scan required"

    };

}

/*==========================================================
  Clear History
==========================================================*/

function clearHistory(){

    scanHistory = [];

    lastScan = null;

    return true;

}

/*==========================================================
  Stats
==========================================================*/

function stats(){

    return {

        totalScans: scanHistory.length,

        validScans: scanHistory.filter(s => s.valid).length,

        invalidScans: scanHistory.filter(s => !s.valid).length

    };

}
/*==========================================================
  barcode.js
  PART 3 OF N
==========================================================*/

/*==========================================================
  Public API
==========================================================*/

return {

    scan,
    validate,
    getLastScan,
    getHistory,
    analyzeLastScan,
    clearHistory,
    stats

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
