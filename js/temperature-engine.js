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
