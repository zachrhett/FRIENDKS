/*==========================================================
  inventory.js
  PART 1 OF N
==========================================================*/

"use strict";

/*==========================================================
  F.R.I.E.N.D.
  Inventory Engine
  Version 1.0
==========================================================*/

const FRIENDInventory = (() => {

const DASHBOARD = {

    onHandAccuracy: 97.8,

    outOfStocks: 14,

    osa: 96.3,

    openCounts: 2,

    completedCounts: 118,

    lastUpdated: new Date()

};

const DEPARTMENTS = [

{
    name:"Grocery",
    accuracy:98,
    status:"excellent"
},

{
    name:"HBC",
    accuracy:97,
    status:"excellent"
},

{
    name:"GM",
    accuracy:96,
    status:"good"
},

{
    name:"Dairy",
    accuracy:97,
    status:"excellent"
},

{
    name:"Meat",
    accuracy:96,
    status:"good"
},

{
    name:"Seafood",
    accuracy:97,
    status:"excellent"
},

{
    name:"Deli",
    accuracy:94,
    status:"warning"
},

{
    name:"Bakery",
    accuracy:93,
    status:"warning"
},

{
    name:"Produce",
    accuracy:98,
    status:"excellent"
},

{
    name:"Starbucks",
    accuracy:95,
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
  inventory.js
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
  Inventory Health
==========================================================*/

function inventoryHealth(){

    return {

        healthy:
            DASHBOARD.onHandAccuracy >= 95,

        onHandAccuracy:
            DASHBOARD.onHandAccuracy,

        osa:
            DASHBOARD.osa,

        outOfStocks:
            DASHBOARD.outOfStocks,

        openCounts:
            DASHBOARD.openCounts

    };

}

/*==========================================================
  Refresh
==========================================================*/

function refresh(){

    DASHBOARD.lastUpdated = new Date();

    return summary();

}
