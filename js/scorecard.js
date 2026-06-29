/*==========================================================
  scorecard.js
  PART 1 OF N
==========================================================*/

"use strict";

/*==========================================================
  F.R.I.E.N.D. v1.0
  Premium Store Scorecard Engine
==========================================================*/

const FRIENDScorecard = (() => {

const STORE = {

    id: 129,
    name: "King Soopers #129",

    district: 2,
    division: 620,

    storeHealth: 92,

    alerts: 7,

    maximo: 5,

    lastRefresh: new Date(),

    leaderFocus:
        "Improve Bakery labor efficiency while maintaining Food Safety compliance and reducing shrink in Deli.",

    guidedActions: [

        {
            priority:1,
            title:"Review Bakery Labor",
            owner:"Jamie",
            status:"Due Today",
            level:"high"
        },

        {
            priority:2,
            title:"Verify Deli Production",
            owner:"Joey",
            status:"In Progress",
            level:"medium"
        },

        {
            priority:3,
            title:"Complete Temperature Validation",
            owner:"Alex",
            status:"Ready",
            level:"low"
        }

    ]

};

/*==========================================================
  Executive Metrics
==========================================================*/

const METRICS = [

{
id:"sales",
title:"Sales",
value:"102.6%",
target:100,
status:"good",
trend:"+1.8%"
},

{
id:"labor",
title:"Labor",
value:"98.7%",
target:100,
status:"good",
trend:"+0.6%"
},

{
id:"shrink",
title:"Shrink",
value:"94.2%",
target:100,
status:"warning",
trend:"-0.9%"
},

{
id:"foodSafety",
title:"Food Safety",
value:"99.1%",
target:100,
status:"excellent",
trend:"+0.4%"
},

{
id:"replenishment",
title:"Replenishment",
value:"96.4%",
target:100,
status:"good",
trend:"+1.1%"
},

{
id:"inventory",
title:"Inventory",
value:"97.8%",
target:100,
status:"good",
trend:"+0.9%"
},

{
id:"production",
title:"Production",
value:"93.6%",
target:100,
status:"warning",
trend:"-1.2%"
},

{
id:"customer",
title:"Customer",
value:"95.8%",
target:100,
status:"good",
trend:"+1.0%"
}

];

/*==========================================================
  Department Health
==========================================================*/

const DEPARTMENTS = [

{
name:"Produce",
health:96,
status:"excellent"
},

{
name:"Meat",
health:95,
status:"excellent"
},

{
name:"Seafood",
health:93,
status:"good"
},

{
name:"Bakery",
health:88,
status:"warning"
},

{
name:"Deli",
health:87,
status:"warning"
},

{
name:"Dairy",
health:94,
status:"good"
},

{
name:"Grocery",
health:97,
status:"excellent"
},

{
name:"GM",
health:95,
status:"good"
},

{
name:"HBC",
health:96,
status:"excellent"
},

{
name:"Starbucks",
health:92,
status:"good"
},

{
name:"Murray's Cheese",
health:91,
status:"good"
}

];

/*==========================================================
  Color Palette
==========================================================*/

const COLORS = {

blue:"#0057B8",

darkBlue:"#083E78",

red:"#C8102E",

green:"#1E8E3E",

yellow:"#F2B705",

orange:"#FF8F00",

white:"#FFFFFF",

black:"#1B1B1B",

gray:"#F3F5F7",

border:"#D7DEE6"

};

/*==========================================================
  Utilities
==========================================================*/

function statusColor(status){

switch(status){

case "excellent":
return COLORS.green;

case "good":
return COLORS.blue;

case "warning":
return COLORS.yellow;

case "critical":
return COLORS.red;

default:
return COLORS.gray;

}

}

function healthColor(value){

if(value>=95) return COLORS.green;

if(value>=90) return COLORS.blue;

if(value>=85) return COLORS.yellow;

return COLORS.red;

}

function formatTime(date){

return date.toLocaleTimeString([],{
hour:"2-digit",
minute:"2-digit"
});

}

function percent(v){

return `${v}%`;

}

/*==========================================================
  Public API
==========================================================*/

return {

STORE,

METRICS,

DEPARTMENTS,

COLORS,

statusColor,

healthColor,

formatTime,

percent

};

})();
/*==========================================================
  scorecard.js
  PART 2 OF N
==========================================================*/

/*==========================================================
  TC-52 Premium Store Scorecard Renderer
==========================================================*/

FRIENDScorecard.createStoreHealthCard = function () {

    return `
    <section class="friend-scorecard">

        <div class="friend-header">

            <div class="friend-title">
                <div class="friend-title-main">Store Health</div>
                <div class="friend-title-sub">
                    Store #${this.STORE.id}
                </div>
            </div>

            <div class="friend-health-ring">

                <svg viewBox="0 0 120 120">

                    <circle
                        class="ring-bg"
                        cx="60"
                        cy="60"
                        r="52">
                    </circle>

                    <circle
                        class="ring-progress"
                        cx="60"
                        cy="60"
                        r="52"
                        stroke-dasharray="327"
                        stroke-dashoffset="${327-(327*this.STORE.storeHealth/100)}">
                    </circle>

                </svg>

                <div class="ring-center">
                    <span class="ring-score">${this.STORE.storeHealth}</span>
                    <span class="ring-label">Healthy</span>
                </div>

            </div>

        </div>

        <div class="scorecard-kpis">

            ${this.createKPI(
                "District",
                this.STORE.district,
                "blue"
            )}

            ${this.createKPI(
                "Division",
                this.STORE.division,
                "blue"
            )}

            ${this.createKPI(
                "Alerts",
                this.STORE.alerts,
                "red"
            )}

            ${this.createKPI(
                "Maximo",
                this.STORE.maximo,
                "green"
            )}

        </div>

    </section>
    `;

};

/*==========================================================
  KPI Card
==========================================================*/

FRIENDScorecard.createKPI = function (
    title,
    value,
    color
){

    return `

    <div class="friend-kpi ${color}">

        <div class="friend-kpi-title">
            ${title}
        </div>

        <div class="friend-kpi-value">
            ${value}
        </div>

    </div>

    `;

};

/*==========================================================
  Leader Focus
==========================================================*/

FRIENDScorecard.createLeaderFocus = function(){

return `

<section class="leader-focus">

    <div class="panel-header">

        <span class="panel-icon">
            👔
        </span>

        <span class="panel-title">
            Leader Focus
        </span>

    </div>

    <div class="leader-message">

        ${this.STORE.leaderFocus}

    </div>

</section>

`;

};

/*==========================================================
  Guided Actions
==========================================================*/

FRIENDScorecard.createGuidedActions = function(){

let html=`

<section class="guided-actions">

<div class="panel-header">

<span class="panel-icon">
🎯
</span>

<span class="panel-title">

Guided Actions

</span>

</div>

`;

this.STORE.guidedActions.forEach(action=>{

html+=`

<div class="guided-action ${action.level}">

<div class="guided-number">

${action.priority}

</div>

<div class="guided-body">

<div class="guided-title">

${action.title}

</div>

<div class="guided-owner">

${action.owner}

</div>

</div>

<div class="guided-status">

${action.status}

</div>

</div>

`;

});

html+=`

</section>

`;

return html;

};

/*==========================================================
  Premium Dashboard Container
==========================================================*/

FRIENDScorecard.renderDashboard=function(){

return `

<div class="tc52-scorecard">

${this.createStoreHealthCard()}

${this.createLeaderFocus()}

${this.createGuidedActions()}

</div>

`;

};
/*==========================================================
  scorecard.js
  PART 2 OF N
==========================================================*/

/*==========================================================
  TC-52 Premium Store Scorecard Renderer
==========================================================*/

FRIENDScorecard.createStoreHealthCard = function () {

    return `
    <section class="friend-scorecard">

        <div class="friend-header">

            <div class="friend-title">
                <div class="friend-title-main">Store Health</div>
                <div class="friend-title-sub">
                    Store #${this.STORE.id}
                </div>
            </div>

            <div class="friend-health-ring">

                <svg viewBox="0 0 120 120">

                    <circle
                        class="ring-bg"
                        cx="60"
                        cy="60"
                        r="52">
                    </circle>

                    <circle
                        class="ring-progress"
                        cx="60"
                        cy="60"
                        r="52"
                        stroke-dasharray="327"
                        stroke-dashoffset="${327-(327*this.STORE.storeHealth/100)}">
                    </circle>

                </svg>

                <div class="ring-center">
                    <span class="ring-score">${this.STORE.storeHealth}</span>
                    <span class="ring-label">Healthy</span>
                </div>

            </div>

        </div>

        <div class="scorecard-kpis">

            ${this.createKPI(
                "District",
                this.STORE.district,
                "blue"
            )}

            ${this.createKPI(
                "Division",
                this.STORE.division,
                "blue"
            )}

            ${this.createKPI(
                "Alerts",
                this.STORE.alerts,
                "red"
            )}

            ${this.createKPI(
                "Maximo",
                this.STORE.maximo,
                "green"
            )}

        </div>

    </section>
    `;

};

/*==========================================================
  KPI Card
==========================================================*/

FRIENDScorecard.createKPI = function (
    title,
    value,
    color
){

    return `

    <div class="friend-kpi ${color}">

        <div class="friend-kpi-title">
            ${title}
        </div>

        <div class="friend-kpi-value">
            ${value}
        </div>

    </div>

    `;

};

/*==========================================================
  Leader Focus
==========================================================*/

FRIENDScorecard.createLeaderFocus = function(){

return `

<section class="leader-focus">

    <div class="panel-header">

        <span class="panel-icon">
            👔
        </span>

        <span class="panel-title">
            Leader Focus
        </span>

    </div>

    <div class="leader-message">

        ${this.STORE.leaderFocus}

    </div>

</section>

`;

};

/*==========================================================
  Guided Actions
==========================================================*/

FRIENDScorecard.createGuidedActions = function(){

let html=`

<section class="guided-actions">

<div class="panel-header">

<span class="panel-icon">
🎯
</span>

<span class="panel-title">

Guided Actions

</span>

</div>

`;

this.STORE.guidedActions.forEach(action=>{

html+=`

<div class="guided-action ${action.level}">

<div class="guided-number">

${action.priority}

</div>

<div class="guided-body">

<div class="guided-title">

${action.title}

</div>

<div class="guided-owner">

${action.owner}

</div>

</div>

<div class="guided-status">

${action.status}

</div>

</div>

`;

});

html+=`

</section>

`;

return html;

};

/*==========================================================
  Premium Dashboard Container
==========================================================*/

FRIENDScorecard.renderDashboard=function(){

return `

<div class="tc52-scorecard">

${this.createStoreHealthCard()}

${this.createLeaderFocus()}

${this.createGuidedActions()}

</div>

`;

};
/*==========================================================
  scorecard.js
  PART 4 OF N
==========================================================*/

/*==========================================================
  TC-52 Scorecard Mounting
==========================================================*/

FRIENDScorecard.mount = function (
    target = "#storeScorecardScreen"
) {

    const root =
        typeof target === "string"
            ? document.querySelector(target)
            : target;

    if (!root) return;

    root.innerHTML = this.renderFullScorecard();

    this.bindScorecardEvents(root);

};

/*==========================================================
  Event Binding
==========================================================*/

FRIENDScorecard.bindScorecardEvents = function (
    root
) {

    const metricCards =
        root.querySelectorAll("[data-scorecard-metric]");

    metricCards.forEach(card => {

        card.addEventListener("click", () => {

            const metricId =
                card.getAttribute("data-scorecard-metric");

            this.openMetricDetail(metricId);

        });

    });

};

/*==========================================================
  Metric Detail
==========================================================*/

FRIENDScorecard.openMetricDetail = function (
    metricId
) {

    const metric =
        this.METRICS.find(item => item.id === metricId);

    if (!metric) return;

    const existing =
        document.querySelector(".scorecard-detail-overlay");

    if (existing) existing.remove();

    const overlay =
        document.createElement("div");

    overlay.className = "scorecard-detail-overlay";

    overlay.innerHTML = `

        <div class="scorecard-detail-card">

            <div class="detail-header">

                <div>

                    <div class="detail-title">
                        ${metric.title}
                    </div>

                    <div class="detail-subtitle">
                        Store Scorecard Detail
                    </div>

                </div>

                <button
                    class="detail-close"
                    type="button"
                    aria-label="Close">
                    ×
                </button>

            </div>

            <div class="detail-value">
                ${metric.value}
            </div>

            <div class="detail-status ${metric.status}">
                ${metric.status.toUpperCase()}
            </div>

            <div class="detail-copy">
                Metric performance is being monitored against store standard,
                district expectation, and division 620 execution target.
            </div>

            <div class="detail-actions">

                <button type="button">
                    Create Guided Action
                </button>

                <button type="button">
                    Notify Leader
                </button>

            </div>

        </div>

    `;

    document.body.appendChild(overlay);

    overlay
        .querySelector(".detail-close")
        .addEventListener("click", () => overlay.remove());

    overlay.addEventListener("click", event => {

        if (event.target === overlay) overlay.remove();

    });

  /*==========================================================
  scorecard.js
  PART 5 OF N
==========================================================*/

/*==========================================================
  Scorecard Data Refresh
==========================================================*/

FRIENDScorecard.refresh = function () {

    this.STORE.lastRefresh = new Date();

    const root =
        document.querySelector("#storeScorecardScreen");

    if (!root) return;

    this.mount(root);

};

/*==========================================================
  Scorecard Summary
==========================================================*/

FRIENDScorecard.getSummary = function () {

    return {
        storeHealth: this.STORE.storeHealth,
        district: this.STORE.district,
        division: this.STORE.division,
        alerts: this.STORE.alerts,
        maximo: this.STORE.maximo,
        leaderFocus: this.STORE.leaderFocus,
        guidedActions: this.STORE.guidedActions.length,
        refreshed: this.formatTime(this.STORE.lastRefresh)
    };

};

/*==========================================================
  Scorecard Screen Starter
==========================================================*/

document.addEventListener("DOMContentLoaded", () => {

    const scorecardRoot =
        document.querySelector("#storeScorecardScreen");

    if (scorecardRoot) {

        FRIENDScorecard.mount(scorecardRoot);

    }

});

/*==========================================================
  Global Access
==========================================================*/

window.FRIENDScorecard = FRIENDScorecard;

/*==========================================================
  End scorecard.js
==========================================================*/
};
