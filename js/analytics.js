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
/*==========================================================
  analytics.js
  PART 2 OF N
==========================================================*/

FRIENDAnalytics.mount = function (
    target = "#analyticsScreen"
) {

    const root =
        typeof target === "string"
            ? document.querySelector(target)
            : target;

    if (!root) return;

    root.innerHTML = this.render();

    this.bindEvents(root);

};

/*==========================================================
  Event Binding
==========================================================*/

FRIENDAnalytics.bindEvents = function (
    root
) {

    root.querySelectorAll("[data-analytics-id]")
        .forEach(card => {

            card.addEventListener("click", () => {

                const id =
                    card.dataset.analyticsId;

                const metric =
                    this.DASHBOARD.metrics.find(
                        item => item.id === id
                    );

                if (metric) {

                    this.openMetric(metric);

                }

            });

        });

};

/*==========================================================
  Metric Detail
==========================================================*/

FRIENDAnalytics.openMetric = function (
    metric
) {

    const existing =
        document.querySelector(".analytics-overlay");

    if (existing) existing.remove();

    const overlay =
        document.createElement("div");

    overlay.className = "analytics-overlay";

    overlay.innerHTML = `

        <div class="analytics-modal">

            <div class="analytics-modal-header">

                <div>

                    <h2>${metric.title}</h2>

                    <p>Operational Analytics</p>

                </div>

                <button class="analytics-close">
                    ×
                </button>

            </div>

            <div class="analytics-modal-body">

                <div class="analytics-big-value">

                    ${metric.value}${metric.unit}

                </div>

                <div class="analytics-status">

                    ${metric.status.toUpperCase()}

                </div>

                <div class="analytics-trend-detail">

                    Trend: ${metric.trend}

                </div>

                <div class="analytics-description">

                    This KPI contributes to Store Health,
                    Executive Dashboard reporting,
                    Guided Actions,
                    and AI leadership recommendations.

                </div>

            </div>

            <div class="analytics-modal-footer">

                <button>
                    View History
                </button>

                <button>
                    Close
                </button>

            </div>

        </div>

    `;

    document.body.appendChild(overlay);

    overlay
        .querySelector(".analytics-close")
        .addEventListener("click", () => overlay.remove());

    overlay
        .querySelectorAll(".analytics-modal-footer button")[1]
        .addEventListener("click", () => overlay.remove());

    overlay.addEventListener("click", event => {

        if (event.target === overlay) {

            overlay.remove();

        }

    });

};
/*==========================================================
  analytics.js
  PART 3 OF N
==========================================================*/

/*==========================================================
  Refresh
==========================================================*/

FRIENDAnalytics.refresh = function () {

    this.DASHBOARD.lastUpdated = new Date();

    const root =
        document.querySelector("#analyticsScreen");

    if (!root) return;

    this.mount(root);

};

/*==========================================================
  Auto Mount
==========================================================*/

document.addEventListener("DOMContentLoaded", () => {

    const root =
        document.querySelector("#analyticsScreen");

    if (root) {

        FRIENDAnalytics.mount(root);

    }

});

/*==========================================================
  Global Access
==========================================================*/

window.FRIENDAnalytics = FRIENDAnalytics;

/*==========================================================
  End analytics.js
==========================================================*/
