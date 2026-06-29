/*==========================================================
  ordering.js
  PART 1 OF N
==========================================================*/

"use strict";

/*==========================================================
  F.R.I.E.N.D.
  Ordering Engine
  Version 1.0
==========================================================*/

const FRIENDOrdering = (() => {

const DASHBOARD = {

    orderAccuracy: 93,

    openOrders: 5,

    caoReviews: 5,

    vendorGaps: 3,

    lastUpdated: new Date()

};

const DEPARTMENTS = [

{
    name:"Grocery",
    status:"good"
},

{
    name:"Dairy",
    status:"good"
},

{
    name:"Meat",
    status:"excellent"
},

{
    name:"Seafood",
    status:"excellent"
},

{
    name:"Bakery",
    status:"warning"
},

{
    name:"Deli",
    status:"warning"
},

{
    name:"Produce",
    status:"excellent"
},

{
    name:"Starbucks",
    status:"good"
},

{
    name:"GM",
    status:"good"
},

{
    name:"HBC",
    status:"excellent"
},

{
    name:"Liquor",
    status:"good"
},

{
    name:"Maintenance",
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
