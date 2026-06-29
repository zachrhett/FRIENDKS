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
/*==========================================================
  mission-engine.js
  PART 2 OF N
==========================================================*/

/*==========================================================
  Complete Mission
==========================================================*/

function completeMission(id){

    const mission =
        MISSIONS.find(
            m => m.id === id
        );

    if(!mission) return null;

    mission.status = STATUS.COMPLETE;

    currentMission = null;

    return mission;

}

/*==========================================================
  Pause Mission
==========================================================*/

function pauseMission(id){

    const mission =
        MISSIONS.find(
            m => m.id === id
        );

    if(!mission) return null;

    mission.status = STATUS.PAUSED;

    currentMission = mission;

    return mission;

}

/*==========================================================
  Resume Mission
==========================================================*/

function resumeMission(id){

    const mission =
        MISSIONS.find(
            m => m.id === id
        );

    if(!mission) return null;

    mission.status = STATUS.ACTIVE;

    currentMission = mission;

    return mission;

}

/*==========================================================
  Mission Queries
==========================================================*/

function getMission(id){

    return MISSIONS.find(
        m => m.id === id
    );

}

function getAllMissions(){

    sortMissions();

    return [...MISSIONS];

}

function getActiveMission(){

    return currentMission;

}

function getReadyMissions(){

    return MISSIONS.filter(
        m => m.status === STATUS.READY
    );

}

function getCompletedMissions(){

    return MISSIONS.filter(
        m => m.status === STATUS.COMPLETE
    );

}
  /*==========================================================
  mission-engine.js
  PART 3 OF N
==========================================================*/

/*==========================================================
  Mission Statistics
==========================================================*/

function statistics(){

    return{

        total:MISSIONS.length,

        ready:getReadyMissions().length,

        active:
            MISSIONS.filter(
                m=>m.status===STATUS.ACTIVE
            ).length,

        paused:
            MISSIONS.filter(
                m=>m.status===STATUS.PAUSED
            ).length,

        completed:getCompletedMissions().length

    };

}

/*==========================================================
  Public API
==========================================================*/

return{

    PRIORITY,
    STATUS,

    startMission,
    completeMission,
    pauseMission,
    resumeMission,

    getMission,
    getNextMission,
    getAllMissions,
    getReadyMissions,
    getCompletedMissions,
    getActiveMission,

    statistics

};

})();

/*==========================================================
  Global Access
==========================================================*/

window.FRIENDMissionEngine =
    FRIENDMissionEngine;

/*==========================================================
  End mission-engine.js
==========================================================*/
