/*==========================================================
  analytics.js
  PART 1 OF N
==========================================================*/

"use strict";

const FRIENDAnalytics = (() => {

const DASHBOARD = {

    title: "Store Analytics",

    lastUpdated: new Date(),

    metrics: [

        {
            id: "storeHealth",
            title: "Store Health",
            value: 92,
            unit: "%",
            trend: "+2.1%",
            status: "excellent"
        },

        {
            id: "sales",
            title: "Sales",
            value: 102.6,
            unit: "%",
            trend: "+1.8%",
            status: "good"
        },

        {
            id: "labor",
            title: "Labor",
            value: 98.7,
            unit: "%",
            trend: "+0.6%",
            status: "good"
        },

        {
            id: "shrink",
            title: "Shrink",
            value: 94.2,
            unit: "%",
            trend: "-0.9%",
            status: "warning"
        },

        {
            id: "foodSafety",
            title: "Food Safety",
            value: 99.1,
            unit: "%",
            trend: "+0.4%",
            status: "excellent"
        },

        {
            id: "alerts",
            title: "Alerts",
            value: 7,
            unit: "",
            trend: "-2",
            status: "critical"
        },

        {
            id: "maximo",
            title: "Maximo",
            value: 5,
            unit: "",
            trend: "+1",
            status: "good"
        }

    ]

};

function render(){

    return `

    <section class="analytics-screen">

        <header class="analytics-header">

            <h2>${DASHBOARD.title}</h2>

            <div class="analytics-updated">

                Updated ${DASHBOARD.lastUpdated.toLocaleTimeString([],{
                    hour:"2-digit",
                    minute:"2-digit"
                })}

            </div>

        </header>

        <div class="analytics-grid">

            ${DASHBOARD.metrics.map(metric => `

                <div
                    class="analytics-card ${metric.status}"
                    data-analytics-id="${metric.id}">

                    <div class="analytics-title">
                        ${metric.title}
                    </div>

                    <div class="analytics-value">
                        ${metric.value}${metric.unit}
                    </div>

                    <div class="analytics-trend">
                        ${metric.trend}
                    </div>

                </div>

            `).join("")}

        </div>

    </section>

    `;

}

return {

    DASHBOARD,
    render

};

})();
