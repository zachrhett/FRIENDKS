/*==========================================================
  export.js
  PART 1 OF N
==========================================================*/

"use strict";

/*==========================================================
  F.R.I.E.N.D.
  Export Engine
  Version 1.0
==========================================================*/

const FRIENDExport = (() => {

function toJSON(data){

    try{

        return JSON.stringify(data, null, 2);

    } catch(e){

        return null;

    }

}

function toCSV(data){

    if(!Array.isArray(data)) return "";

    const keys = Object.keys(data[0] || {});

    const rows = data.map(row => {

        return keys.map(k => row[k]).join(",");

    });

    return [keys.join(","), ...rows].join("\n");

}

function download(filename, content, type="text/plain"){

    const blob = new Blob([content], { type });

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");

    a.href = url;

    a.download = filename;

    a.click();

    URL.revokeObjectURL(url);

}

return {

    toJSON,
    toCSV,
    download

};

})();

/*==========================================================
  Global Access
==========================================================*/

window.FRIENDExport =
    FRIENDExport;

/*==========================================================
  End export.js
==========================================================*/
