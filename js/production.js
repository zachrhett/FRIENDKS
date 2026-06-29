/*==========================================================
  production.js
  PART 1 OF N
==========================================================*/

"use strict";

/*==========================================================
  F.R.I.E.N.D.
  Production Engine
  Version 1.0
==========================================================*/

const FRIENDProduction = (() => {

const DASHBOARD = {

    productionHealth: 94,

    completedTasks: 128,

    outstandingTasks: 11,

    overProduction: 2,

    underProduction: 1,

    lastUpdated: new Date()

};

const DEPARTMENTS = [

{
    name:"Deli",
    completion:91,
    status:"warning",
    owner:"Heather"
},

{
    name:"Bakery",
    completion:94,
    status:"good",
    owner:"Beth"
},

{
    name:"Meat",
    completion:96,
    status:"excellent",
    owner:"David"
},

{
    name:"Seafood",
    completion:97,
    status:"excellent",
    owner:"Amber"
},

{
    name:"Murray's Cheese",
    completion:95,
    status:"good",
    owner:"Jackie"
},

{
    name:"Starbucks",
    completion:93,
    status:"good",
    owner:"Roman"
}

];

/*==========================================================
  Dashboard Summary
==========================================================*/

function summary(){

    return {

        ...DASHBOARD,

        departments: DEPARTMENTS.length

    };

}
