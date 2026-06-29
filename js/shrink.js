/*==========================================================
  shrink.js
  PART 1 OF N
==========================================================*/

"use strict";

/*==========================================================
  F.R.I.E.N.D.
  Shrink Engine
  Version 1.0
==========================================================*/

const FRIENDShrink = (() => {

const DASHBOARD = {

    riskLevel: "Medium",

    topDriver: "Deli Waste",

    recovery: 91,

    actionItems: 6,

    estimatedSavings: 420,

    lastUpdated: new Date()

};

const DEPARTMENTS = [

{
    name:"Meat",
    score:95,
    status:"good"
},

{
    name:"Seafood",
    score:96,
    status:"excellent"
},

{
    name:"Produce",
    score:97,
    status:"excellent"
},

{
    name:"Bakery",
    score:92,
    status:"warning"
},

{
    name:"Deli",
    score:87,
    status:"critical"
},

{
    name:"Dairy",
    score:95,
    status:"good"
},

{
    name:"Grocery",
    score:96,
    status:"excellent"
},

{
    name:"GM",
    score:97,
    status:"excellent"
},

{
    name:"HBC",
    score:96,
    status:"excellent"
},

{
    name:"Starbucks",
    score:95,
    status:"good"
}

];

/*==========================================================
  Dashboard Summary
==========================================================*/

function summary(){

    return {

        ...DASHBOARD,

        departments:DEPARTMENTS.length

    };

}
/*==========================================================
  shrink.js
  PART 2 OF N
==========================================================*/

/*==========================================================
  Department Queries
==========================================================*/

function getDepartments(){

    return [...DEPARTMENTS];

}

function getDepartment(name){

    return DEPARTMENTS.find(

        department =>

            department.name === name

    );

}

/*==========================================================
  Guided Shrink Missions
==========================================================*/

function guidedMissions(){

    return [

        {
            priority:1,
            mission:"Review Deli Over Production",
            status:"Overdue"
        },

        {
            priority:2,
            mission:"Complete ESW Action Items",
            status:"Due Today"
        },

        {
            priority:3,
            mission:"Verify Markdown Effectiveness",
            status:"Due Today"
        }

    ];

}

/*==========================================================
  Refresh
==========================================================*/

function refresh(){

    DASHBOARD.lastUpdated = new Date();

    return summary();

}
