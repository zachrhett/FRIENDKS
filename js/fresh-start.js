/*==========================================================
  fresh-start.js
  PART 1 OF N
==========================================================*/

"use strict";

/*==========================================================
  F.R.I.E.N.D.
  Fresh Start Engine
  Version 1.0
==========================================================*/

const FRIENDFreshStart = (() => {

const DASHBOARD = {

    dueAssignments:14,

    developmentCompliance:4,

    communicationItems:2,

    districtRanking:2,

    store:129,

    lastUpdated:new Date()

};

const ASSIGNMENTS = [

{
    id:"FS-001",
    title:"Daily 5 Question Compliance",
    due:"Today",
    status:"Open"
},

{
    id:"FS-002",
    title:"New Hire Day 1 Check-In",
    due:"Scheduled",
    status:"Open"
},

{
    id:"FS-003",
    title:"New Hire Day 15 Check-In",
    due:"Scheduled",
    status:"Open"
},

{
    id:"FS-004",
    title:"New Hire Day 30 Check-In",
    due:"Scheduled",
    status:"Open"
},

{
    id:"FS-005",
    title:"Review Associate Development Plan",
    due:"Today",
    status:"Overdue"
}

];

/*==========================================================
  Dashboard Summary
==========================================================*/

function summary(){

    return {

        ...DASHBOARD,

        totalAssignments:ASSIGNMENTS.length

    };

}
