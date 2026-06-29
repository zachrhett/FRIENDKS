/*==========================================================
  charts.js
  PART 1 OF N
==========================================================*/

"use strict";

/*==========================================================
  F.R.I.E.N.D.
  Chart Engine
  Version 1.0
==========================================================*/

const FRIENDCharts = (() => {

const COLORS = {

    good: "#2E9D49",
    warning: "#F5B400",
    critical: "#C8102E",
    primary: "#0057B8"

};

function createBarChart(canvas, data = []){

    if(!canvas) return null;

    const ctx = canvas.getContext("2d");

    const width = canvas.width = 600;

    const height = canvas.height = 300;

    const barWidth = width / (data.length * 2);

    ctx.clearRect(0,0,width,height);

    data.forEach((item, index) => {

        const x = index * barWidth * 2;

        const barHeight = item.value;

        ctx.fillStyle = COLORS[item.status] || COLORS.primary;

        ctx.fillRect(
            x,
            height - barHeight,
            barWidth,
            barHeight
        );

    });

    return canvas;

}

return {

    createBarChart

};

})();

/*==========================================================
  Global Access
==========================================================*/

window.FRIENDCharts =
    FRIENDCharts;

/*==========================================================
  End charts.js
==========================================================*/
