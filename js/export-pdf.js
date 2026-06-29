/*==========================================================
  export-pdf.js
  PART 1 OF N
==========================================================*/

"use strict";

/*==========================================================
  F.R.I.E.N.D.
  PDF Export Engine
  Version 1.0
==========================================================*/

const FRIENDPDFExport = (() => {

function createCanvas(){

    return document.createElement("canvas");

}

function renderText(ctx, text, x, y){

    ctx.fillText(text, x, y);

}

function exportSimplePDF(title, data = []){

    const canvas = createCanvas();

    const ctx = canvas.getContext("2d");

    canvas.width = 800;

    canvas.height = 1000;

    ctx.font = "16px Arial";

    ctx.fillText(title, 40, 40);

    let y = 80;

    data.forEach(item => {

        ctx.fillText(String(item), 40, y);

        y += 24;

    });

    return canvas.toDataURL("image/png");

}

return {

    exportSimplePDF

};

})();

/*==========================================================
  Global Access
==========================================================*/

window.FRIENDPDFExport =
    FRIENDPDFExport;

/*==========================================================
  End export-pdf.js
==========================================================*/
