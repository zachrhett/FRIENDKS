/*==========================================================
  replenishment.js
  PART 1 OF N
==========================================================*/

"use strict";

/*==========================================================
  F.R.I.E.N.D.
  Replenishment Engine
  Version 1.0
==========================================================*/

const FRIENDReplenishment = (() => {

const DASHBOARD = {

    average: 91,

    profileStatus: "Improving",

    storeReadiness: 96,

    openMissions: 3,

    lastUpdated: new Date()

};

const DEPARTMENTS = [

{
    name:"Meat",
    completion:94,
    status:"good"
},

{
    name:"Packaged Meat",
    completion:92,
    status:"good"
},

{
    name:"Seafood",
    completion:95,
    status:"excellent"
},

{
    name:"Packaged Seafood",
    completion:93,
    status:"good"
},

{
    name:"Bakery",
    completion:88,
    status:"warning"
},

{
    name:"Deli",
    completion:89,
    status:"warning"
},

{
    name:"Produce",
    completion:97,
    status:"excellent"
},

{
    name:"Grocery",
    completion:96,
    status:"excellent"
},

{
    name:"GM",
    completion:95,
    status:"good"
},

{
    name:"HBC",
    completion:96,
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
