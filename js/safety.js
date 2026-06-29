/*==========================================================
  safety.js
  PART 1 OF N
==========================================================*/

"use strict";

/*==========================================================
  F.R.I.E.N.D.
  Safety Engine
  Version 1.0
==========================================================*/

const FRIENDSafety = (() => {

const DASHBOARD = {

    daysWithoutInjury:145,

    trainingDue:16,

    riskLevel:"Low",

    shoesForCrews:98,

    inspectionsCompleted:92,

    lastUpdated:new Date()

};

const MISSIONS = [

{

    id:"SAFE-001",

    title:"Complete PM Equipment Inspections",

    owner:"Grocery Closing Leader",

    priority:"High",

    status:"Due Today"

},

{

    id:"SAFE-002",

    title:"Verify Shoes For Crews Compliance",

    owner:"Meat Department",

    priority:"Critical",

    status:"Overdue"

},

{

    id:"SAFE-003",

    title:"Review Fire Extinguisher Sign Off",

    owner:"Store Leader",

    priority:"Medium",

    status:"Ready"

},

{

    id:"SAFE-004",

    title:"Complete LOTO Verification",

    owner:"Maintenance",

    priority:"Medium",

    status:"Ready"

}

];

/*==========================================================
  Dashboard Summary
==========================================================*/

function summary(){

    return{

        ...DASHBOARD,

        openMissions:MISSIONS.length

    };

}
/*==========================================================
  safety.js
  PART 2 OF N
==========================================================*/

/*==========================================================
  Mission Queries
==========================================================*/

function getMissions(){

    return [...MISSIONS];

}

function getMission(id){

    return MISSIONS.find(

        m => m.id === id

    );

}

/*==========================================================
  Guided Safety Actions
==========================================================*/

function guidedMissions(){

    return [

        {
            priority:1,
            mission:"Review PM Inspections",
            status:"Due Today"
        },

        {
            priority:2,
            mission:"Complete Shoes For Crews Audit",
            status:"Overdue"
        },

        {
            priority:3,
            mission:"Verify Training Compliance",
            status:"Open"
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
/*==========================================================
  safety.js
  PART 3 OF N
==========================================================*/

/*==========================================================
  Public API
==========================================================*/

return {

    summary,

    getMissions,

    getMission,

    guidedMissions,

    refresh

};

})();

/*==========================================================
  Global Access
==========================================================*/

window.FRIENDSafety =
    FRIENDSafety;

/*==========================================================
  End safety.js
==========================================================*/
