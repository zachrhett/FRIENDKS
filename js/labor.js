/*==========================================================
  labor.js
  PART 1 OF N
==========================================================*/

"use strict";

/*==========================================================
  F.R.I.E.N.D.
  Labor Engine
  Version 1.0
==========================================================*/

const FRIENDLabor = (() => {

const DASHBOARD = {

    laborPercent: 3.29,

    scheduledHours: 65.5,

    overtimeHours: 85,

    storeEfficiency: 101.6,

    forecastVariance: 2.2,

    lastUpdated: new Date()

};

const DEPARTMENTS = [

{
    name:"Grocery",
    efficiency:103,
    overtime:1.2,
    status:"excellent"
},

{
    name:"Produce",
    efficiency:102,
    overtime:1.4,
    status:"excellent"
},

{
    name:"Bakery",
    efficiency:94,
    overtime:4.8,
    status:"warning"
},

{
    name:"Deli",
    efficiency:92,
    overtime:5.2,
    status:"critical"
},

{
    name:"Meat",
    efficiency:101,
    overtime:1.8,
    status:"good"
},

{
    name:"Seafood",
    efficiency:102,
    overtime:1.1,
    status:"excellent"
},

{
    name:"Dairy",
    efficiency:101,
    overtime:1.5,
    status:"good"
},

{
    name:"GM",
    efficiency:103,
    overtime:0.8,
    status:"excellent"
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
  labor.js
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
  Guided Labor Missions
==========================================================*/

function guidedMissions(){

    return [

        {
            priority:1,
            mission:"Review Deli Labor Exceptions",
            status:"Due Today"
        },

        {
            priority:2,
            mission:"Connect With Bakery Leader",
            status:"Needs Attention"
        },

        {
            priority:3,
            mission:"Review Holiday Labor Forecast",
            status:"Overdue"
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
