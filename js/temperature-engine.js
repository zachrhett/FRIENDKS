/*==========================================================
  temperature-engine.js
  PART 1 OF N
==========================================================*/

"use strict";

/*==========================================================
  F.R.I.E.N.D.
  Temperature Mission Engine
  Version 1.0
==========================================================*/

const FRIENDTemperatureEngine = (() => {

const TARGET = {

    minimum:165,

    unit:"°F"

};

const MISSIONS = [

{

    id:"TEMP-001",

    associate:"Alex",

    leader:"Jamie",

    department:"Deli",

    product:"Rotisserie Chicken",

    target:165,

    actual:171,

    probe:"Probe",

    sanitized:false,

    recorded:false,

    completed:false

}

];

/*==========================================================
  Get Current Mission
==========================================================*/

function currentMission(){

    return MISSIONS[0];

}

/*==========================================================
  Sanitize Probe
==========================================================*/

function sanitizeProbe(){

    const mission=currentMission();

    mission.sanitized=true;

    return mission;

}

/*==========================================================
  Record Temperature
==========================================================*/

function recordTemperature(value){

    const mission=currentMission();

    mission.actual=value;

    mission.recorded=true;

    return mission;

}
/*==========================================================
  temperature-engine.js
  PART 2 OF N
==========================================================*/

/*==========================================================
  Validate Temperature
==========================================================*/

function validateTemperature(){

    const mission = currentMission();

    return {

        passed:
            mission.actual >= mission.target,

        target:
            mission.target,

        actual:
            mission.actual,

        difference:
            mission.actual - mission.target

    };

}

/*==========================================================
  Complete Mission
==========================================================*/

function completeMission(){

    const mission = currentMission();

    mission.completed = true;

    return {

        success: true,

        associate: mission.associate,

        leader: mission.leader,

        compliance: "100%",

        completionTime: "3:42",

        message:
            "Mission complete. Dashboard updated."

    };

}
/*==========================================================
  temperature-engine.js
  PART 3 OF N
==========================================================*/

/*==========================================================
  Public API
==========================================================*/

return {

    TARGET,

    currentMission,

    sanitizeProbe,

    recordTemperature,

    validateTemperature,

    completeMission

};

})();

/*==========================================================
  Global Access
==========================================================*/

window.FRIENDTemperatureEngine =
    FRIENDTemperatureEngine;

/*==========================================================
  End temperature-engine.js
==========================================================*/
