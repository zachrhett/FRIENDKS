/*==========================================================
  reports.js
  PART 1 OF N
==========================================================*/

"use strict";

/*==========================================================
  F.R.I.E.N.D.
  Reports Engine
  Version 1.0
==========================================================*/

const FRIENDReports = (() => {

const REPORTS = [

{
    id:"RPT-001",
    title:"Daily Store Health Report",
    type:"Executive",
    generated:new Date(),
    status:"Ready"
},

{
    id:"RPT-002",
    title:"Food Safety Compliance Report",
    type:"Compliance",
    generated:new Date(),
    status:"Ready"
},

{
    id:"RPT-003",
    title:"Labor Efficiency Report",
    type:"Labor",
    generated:new Date(),
    status:"Pending"
},

{
    id:"RPT-004",
    title:"Shrink Analysis Report",
    type:"Shrink",
    generated:new Date(),
    status:"Ready"
}

];

function getAll(){

    return [...REPORTS];

}

function getReport(id){

    return REPORTS.find(r => r.id === id);

}

function summary(){

    return {

        total:REPORTS.length,

        ready:REPORTS.filter(r => r.status==="Ready").length,

        pending:REPORTS.filter(r => r.status==="Pending").length

    };

}

return {

    getAll,
    getReport,
    summary

};

})();

/*==========================================================
  Global Access
==========================================================*/

window.FRIENDReports =
    FRIENDReports;

/*==========================================================
  End reports.js
==========================================================*/
/*==========================================================
  reports.js
  PART 2 OF N
==========================================================*/

/*==========================================================
  Generate Report
==========================================================*/

function generateReport(type){

    const report = {

        id: "RPT-" + Math.floor(Math.random()*9000),

        title: type + " Report",

        type,

        generated: new Date(),

        status: "Ready"

    };

    REPORTS.push(report);

    return report;

}

/*==========================================================
  Filter Reports
==========================================================*/

function getByType(type){

    return REPORTS.filter(r => r.type === type);

}

/*==========================================================
  Delete Report
==========================================================*/

function deleteReport(id){

    const index =
        REPORTS.findIndex(r => r.id === id);

    if(index === -1) return false;

    REPORTS.splice(index,1);

    return true;

}
