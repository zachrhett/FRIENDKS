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
/*==========================================================
  charts.js
  PART 2 OF N
==========================================================*/

/*==========================================================
  Create Line Chart
==========================================================*/

function createLineChart(canvas, data = []){

    if(!canvas) return null;

    const ctx = canvas.getContext("2d");

    const width = canvas.width = 600;

    const height = canvas.height = 300;

    ctx.clearRect(0,0,width,height);

    ctx.beginPath();

    const step = width / (data.length - 1 || 1);

    data.forEach((point, index) => {

        const x = index * step;

        const y = height - point.value;

        if(index === 0){

            ctx.moveTo(x,y);

        } else {

            ctx.lineTo(x,y);

        }

    });

    ctx.strokeStyle = "#0057B8";

    ctx.lineWidth = 3;

    ctx.stroke();

}

/*==========================================================
  Create Pie Chart (Simple)
==========================================================*/

function createPieChart(canvas, data = []){

    if(!canvas) return null;

    const ctx = canvas.getContext("2d");

    const total = data.reduce((sum,d) => sum + d.value, 0);

    let startAngle = 0;

    const centerX = 300;

    const centerY = 150;

    const radius = 100;

    data.forEach(item => {

        const sliceAngle =
            (item.value / total) * Math.PI * 2;

        ctx.beginPath();

        ctx.moveTo(centerX, centerY);

        ctx.arc(
            centerX,
            centerY,
            radius,
            startAngle,
            startAngle + sliceAngle
        );

        ctx.closePath();

        ctx.fillStyle = item.color || "#0057B8";

        ctx.fill();

        startAngle += sliceAngle;

    });

}
