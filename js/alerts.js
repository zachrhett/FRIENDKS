/*==========================================================
  alerts.js
  PART 1 OF N
==========================================================*/

"use strict";

/*==========================================================
  F.R.I.E.N.D.
  Alerts Engine
  Version 1.0
==========================================================*/

const FRIENDAlerts = (() => {

const DASHBOARD = {

    totalAlerts:7,

    critical:2,

    warning:3,

    info:1,

    success:1,

    lastUpdated:new Date()

};

const ALERTS = [

{
    id:"ALT-001",
    type:"critical",
    title:"Food Safety Violation",
    message:"Temperature validation overdue in Deli.",
    owner:"Alex"
},

{
    id:"ALT-002",
    type:"warning",
    title:"Labor Inefficiency",
    message:"Bakery labor above target threshold.",
    owner:"Jamie"
},

{
    id:"ALT-003",
    type:"warning",
    title:"Shrink Increase",
    message:"Deli shrink trending upward.",
    owner:"Joey"
},

{
    id:"ALT-004",
    type:"info",
    title:"Store Health Update",
    message:"Store Health improved to 92%.",
    owner:"System"
},

{
    id:"ALT-005",
    type:"critical",
    title:"Maximo Overdue Work Order",
    message:"WO-2436 requires immediate attention.",
    owner:"Maintenance"
}

];

/*==========================================================
  Summary
==========================================================*/

function summary(){

    return {

        ...DASHBOARD,

        active:ALERTS.length

    };

}
/*==========================================================
  alerts.js
  PART 2 OF N
==========================================================*/

/*==========================================================
  Alert Queries
==========================================================*/

function getAlerts(){

    return [...ALERTS];

}

function getAlert(id){

    return ALERTS.find(

        a => a.id === id

    );

}

/*==========================================================
  Alert Grouping
==========================================================*/

function getByType(type){

    return ALERTS.filter(

        a => a.type === type

    );

}

/*==========================================================
  Refresh
==========================================================*/

function refresh(){

    DASHBOARD.lastUpdated = new Date();

    return summary();

}
/*==========================================================
  alerts.js
  PART 3 OF N
==========================================================*/

/*==========================================================
  Public API
==========================================================*/

return {

    summary,

    getAlerts,

    getAlert,

    getByType,

    refresh

};

})();

/*==========================================================
  Global Access
==========================================================*/

window.FRIENDAlerts =
    FRIENDAlerts;

/*==========================================================
  End alerts.js
==========================================================*/
