/*==========================================================
  mission-engine.js
  PART 1 OF N
==========================================================*/

"use strict";

/*==========================================================
  F.R.I.E.N.D.
  Mission Engine v1.0
==========================================================*/

const FRIENDMissionEngine = (() => {

const PRIORITY = {

    CRITICAL: 100,
    HIGH: 75,
    MEDIUM: 50,
    LOW: 25

};

const STATUS = {

    READY: "Ready",
    ACTIVE: "Active",
    PAUSED: "Paused",
    COMPLETE: "Complete",
    OVERDUE: "Overdue"

};

const MISSIONS = [

{

    id:"MSN-0001",

    title:"Complete Temperature Validation",

    department:"Food Safety",

    associate:"Alex",

    leader:"Jamie",

    priority:PRIORITY.CRITICAL,

    status:STATUS.READY,

    estimatedMinutes:4,

    reward:50,

    impact:"Food Safety"

},

{

    id:"MSN-0002",

    title:"Review Bakery Labor",

    department:"Bakery",

    associate:"Jamie",

    leader:"Joey",

    priority:PRIORITY.HIGH,

    status:STATUS.READY,

    estimatedMinutes:12,

    reward:40,

    impact:"Labor"

},

{

    id:"MSN-0003",

    title:"Verify Deli Production",

    department:"Deli",

    associate:"Heather",

    leader:"Joey",

    priority:PRIORITY.HIGH,

    status:STATUS.ACTIVE,

    estimatedMinutes:8,

    reward:35,

    impact:"Shrink"

},

{

    id:"MSN-0004",

    title:"Review Maximo Work Orders",

    department:"Maintenance",

    associate:"Maintenance",

    leader:"Store Leader",

    priority:PRIORITY.MEDIUM,

    status:STATUS.READY,

    estimatedMinutes:6,

    reward:20,

    impact:"Maximo"

}

];

let currentMission = null;

/*==========================================================
  Sort Missions
==========================================================*/

function sortMissions(){

    MISSIONS.sort((a,b)=>{

        return b.priority-a.priority;

    });

}

/*==========================================================
  Get Next Mission
==========================================================*/

function getNextMission(){

    sortMissions();

    return MISSIONS.find(m=>

        m.status===STATUS.READY

    );

}

/*==========================================================
  Start Mission
==========================================================*/

function startMission(id){

    const mission=

        MISSIONS.find(

            m=>m.id===id

        );

    if(!mission) return null;

    mission.status=STATUS.ACTIVE;

    currentMission=mission;

    return mission;

}
