/*==========================================================
  food-safety.js
  PART 1 OF N
==========================================================*/

"use strict";

/*==========================================================
  F.R.I.E.N.D.
  Food Safety Engine
  Version 1.0
==========================================================*/

const FRIENDFoodSafety = (() => {

const DASHBOARD = {

    compliance: 99.1,

    temperatureLogs: 96,

    auditsDue: 3,

    riskLevel: "Low",

    fastStatus: "No Issues"

};

const DEPARTMENTS = [

{
    name: "Meat",
    score: 98,
    trend: "up"
},

{
    name: "Seafood",
    score: 97,
    trend: "up"
},

{
    name: "Produce",
    score: 99,
    trend: "up"
},

{
    name: "Bakery",
    score: 94,
    trend: "down"
},

{
    name: "Deli",
    score: 92,
    trend: "down"
},

{
    name: "Dairy",
    score: 96,
    trend: "up"
},

{
    name: "Murray's Cheese",
    score: 95,
    trend: "up"
},

{
    name: "Starbucks",
    score: 97,
    trend: "up"
}

];

/*==========================================================
  Dashboard Summary
==========================================================*/

function summary(){

    return {

        ...DASHBOARD,

        departments: DEPARTMENTS.length,

        timestamp: new Date()

    };

}
/*==========================================================
  food-safety.js
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
  Compliance
==========================================================*/

function complianceStatus(){

    return {

        compliant:
            DASHBOARD.compliance >= 95,

        score:
            DASHBOARD.compliance,

        risk:
            DASHBOARD.riskLevel,

        auditsDue:
            DASHBOARD.auditsDue

    };

}

/*==========================================================
  Refresh
==========================================================*/

function refresh(){

    return summary();

}
